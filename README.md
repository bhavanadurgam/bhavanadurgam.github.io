# bhavanadurgam.github.io

Bhavana Durgam's portfolio: a folder-themed site built with [Astro](https://astro.build), hosted free on GitHub Pages.

## Edit the content

Almost everything lives in **`src/data/content.ts`**. Open it, change the text, save.
Search for `TODO(Bhavana)` to find everything still waiting on you.

| To change… | Edit |
|---|---|
| Work, education, projects, accomplishments | the matching array in `content.ts` |
| Sticky notes, philosophy quote, "Currently" note | `notes`, `philosophy`, `currently` in `content.ts` |
| Books on the shelf | `books` in `content.ts` (add `top3: 1` / `2` / `3` for your top three) |
| Your headshot | replace `src/assets/photos/headshot.jpg` (keep the name) |
| Singing recordings | MP3s in `public/audio/`, then set `src: '/audio/your-file.mp3'` in `songs` |
| Instagram preview video | `public/video/instagram-preview.mp4` (+ `.jpg` poster), then `hasVideo = true` in `src/pages/hobbies/content.astro` |
| The secret file text | the `#secret` block in `src/layouts/Base.astro` |

### Add a book
```ts
{ title: 'Book title', author: 'Author Name', color: '#3D78BC', textColor: '#FBF8F2',
  rating: 4, review: 'One line on why.', year: 2026, style: 'serif', w: 44, h: 240 },
```
`style` can be `serif`, `sans` or `type`. `w` (30–70) and `h` (200–290) set the spine size; `lean: -6` tilts it.

## Run it on your Mac
```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

## Deploy (free)
1. Create a GitHub repository named exactly **`bhavanadurgam.github.io`** (public).
2. Push this folder to its `main` branch.
3. In the repository: **Settings → Pages → Source: GitHub Actions**.
4. Every push to `main` rebuilds and publishes to https://bhavanadurgam.github.io (about 1–2 minutes).

### Optional: your own domain
Buy `bhavanadurgam.com`, add a file `public/CNAME` containing `bhavanadurgam.com`, point the domain's DNS at GitHub Pages
(four A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153, plus a `www` CNAME to `bhavanadurgam.github.io`),
change `site` in `astro.config.mjs` and the URLs in `public/robots.txt`, then turn on **Enforce HTTPS** in Settings → Pages.

## Get found on Google ("Bhavana Durgam")
1. [Google Search Console](https://search.google.com/search-console) → Add property → URL prefix → your site.
   Choose **HTML tag**, paste it into `src/components/SEO.astro` (there's a marked spot), push, then **Verify**.
2. **Sitemaps** → submit `sitemap-index.xml`.
3. **URL Inspection** → paste your home page → **Request indexing**.
4. Add the site URL to your LinkedIn (Contact info → Website, and Featured), Instagram bio, résumé header, email signature and GitHub profile.
5. Optional: [Bing Webmaster Tools](https://www.bing.com/webmasters) → import from Search Console.

Expect indexing within days and your name to rank within a few weeks.

## Easter eggs
Type `bhavana` anywhere on the site, or tap the footer logo five times.
