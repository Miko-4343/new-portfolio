import raw from "@/data/photos.json";

export type Photo = {
  id: string;
  /** Path relative to the CDN base, or an absolute URL. */
  src: string;
  width: number;
  height: number;
  location: string;
  title?: string;
};

export type Group = { slug: string; name: string; photos: Photo[] };

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Groups photos by location, keeping the order locations first appear in. */
export function groupByLocation(photos: Photo[]): Group[] {
  const map = new Map<string, Group>();
  for (const p of photos) {
    const slug = slugify(p.location);
    let g = map.get(slug);
    if (!g) {
      g = { slug, name: p.location, photos: [] };
      map.set(slug, g);
    }
    g.photos.push(p);
  }
  return [...map.values()];
}

export const photos = raw as Photo[];
