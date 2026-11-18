// Builds data/photos.json from a local folder of originals.
//
//   node scripts/build-manifest.mjs ./photos
//
// Layout: one sub-folder per location, e.g.
//   photos/seoul/IMG_0412.jpg
//   photos/lake-bled/IMG_0033.jpg
// Folder names become location names ("lake-bled" -> "Lake Bled").
// Upload the same folder structure to your CDN; `src` is "<folder>/<file>".
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, extname, basename } from "node:path";
import { imageSize } from "image-size";

const root = process.argv[2];
if (!root) {
  console.error("usage: node scripts/build-manifest.mjs <photos-folder>");
  process.exit(1);
}

const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const title = (s) =>
  s
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

const out = [];
const folders = readdirSync(root)
  .filter((f) => statSync(join(root, f)).isDirectory())
  .sort();

for (const folder of folders) {
  const files = readdirSync(join(root, folder))
    .filter((f) => EXT.has(extname(f).toLowerCase()))
    .sort();

  for (const file of files) {
    const { width, height, orientation } = imageSize(
      readFileSync(join(root, folder, file)),
    );
    if (!width || !height) {
      console.warn("skipping (no dimensions):", folder, file);
      continue;
    }
    // EXIF orientations 5–8 are rotated 90°, so width/height swap.
    const swap = orientation && orientation >= 5;
    out.push({
      id: `${folder}/${basename(file, extname(file))}`,
      src: `${folder}/${file}`,
      width: swap ? height : width,
      height: swap ? width : height,
      location: title(folder),
    });
  }
}

writeFileSync("data/photos.json", JSON.stringify(out, null, 2) + "\n");
console.log(`wrote ${out.length} photos in ${folders.length} locations`);
