// Photos live on your CDN. Set the base URL in .env.local:
//   NEXT_PUBLIC_CDN_URL=https://cdn.example.com/photos
// Entries in data/photos.json use paths relative to that base
// (e.g. "seoul/IMG_0412.jpg"). Absolute http(s) URLs are used as-is.
const BASE = (process.env.NEXT_PUBLIC_CDN_URL ?? "").replace(/\/$/, "");

export function cdn(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE}/${path.replace(/^\//, "")}`;
}

// Grid thumbnails. By default this is the same file as the full image.
// If your CDN resizes on the fly, change it here, e.g. for Cloudflare:
//   return `${BASE}/cdn-cgi/image/width=600,quality=80/${path}`;
// or for imgix/Bunny-style query params:
//   return `${cdn(path)}?width=600`;
export function thumb(path: string): string {
  return cdn(path);
}
