# Portfolio

```bash
npm install
npm run dev
```

## Photography gallery (`/photography`)

Photos are served from your CDN; the site only stores a manifest (`data/photos.json`).

1. Organise originals locally, one folder per location:
   `photos/seoul/IMG_0412.jpg`, `photos/lake-bled/IMG_0033.jpg`, …
2. Upload the same folder structure to your CDN.
3. Generate the manifest (reads image sizes, so the grid doesn't jump while loading):
   `node scripts/build-manifest.mjs ./photos`
4. Create `.env.local`:
   `NEXT_PUBLIC_CDN_URL=https://cdn.example.com/photos`
5. If your CDN can resize on the fly, edit `thumb()` in `lib/cdn.ts` so the grid loads
   small versions and only the modal loads the full-size file. With ~500 photos this matters.

The shipped `data/photos.json` is sample data pointing at placeholder images — replace it.

A manifest entry looks like:

```json
{ "id": "seoul/IMG_0412", "src": "seoul/IMG_0412.jpg", "width": 4000, "height": 3000, "location": "Seoul", "title": "optional caption" }
```

Locations appear in the order they first show up in the manifest.
