# ghanshyamanuragi.in

Website of डॉ घनश्याम अनुरागी, former MP and अध्यक्ष जिला पंचायत जालौन (BJP). Static site, Hindi, mobile first.

## Stack

Astro 7, Tailwind 4, no client framework, no CMS. Fonts (Martel, Mukta) are self-hosted from `@fontsource`. Images under `src/assets` are optimised at build; videos are served as-is from `public/videos`.

## Run

```sh
bun install
bun run dev        # http://localhost:4321
bun run build      # dist/
bun run preview    # serves dist/ on 4322
```

Node 22.12 or newer.

## Where things live

| What | Where |
|---|---|
| Copy: name, roles, nav, contact, socials, timeline, facts, leaders | `src/data/site.ts` |
| Biography and Apni Rasoi text (paragraph arrays) | `content/extracted.json` |
| Gallery and press photo lists (order + aspect) | `content/extracted.json` (`gallery`, `media`) |
| Gallery / press photos | `src/assets/gallery`, `src/assets/media` |
| Hero and portrait images | `src/assets/bio-1.png`, `portrait-*.png`, `rasoi_*.jpg` |
| Videos and their poster frames | `public/videos`, `src/assets/posters` |
| Design tokens | `src/styles/global.css` (`@theme`), summary in `docs/design-system/DESIGN.md` |
| Design brief, directions, evidence | `docs/design-work/PERS-121/` |

## Pages

`/` · `/about` · `/gallery` · `/videos` · `/media` · `/apni-rasoi` · `/contact`. Old Gatsby routes `/video-gallery` and `/apni_rasoi` redirect.

## Editing content

- Text: edit `src/data/site.ts` or `content/extracted.json`; no build step beyond `bun run build`.
- Add a gallery photo: drop `gallery_N.jpg` in `src/assets/gallery` and append `{ "src": "/images/gallery/gallery_N.jpg", "w": 3, "h": 2 }` to `gallery` in `content/extracted.json`.
- Add a video: drop `anuragi_videos_N.mp4` in `public/videos`, cut a poster with `ffmpeg -ss 0.5 -i public/videos/anuragi_videos_N.mp4 -frames:v 1 -vf scale=640:-2 src/assets/posters/N.jpg`, and raise the count in `allVideos`.

## History

2022–23: Gatsby + Contentful, hosted on Vercel, domain on GoDaddy. Domain lapsed Jan 2025 and the Contentful account was lost. `feat/static-content` is the Gatsby site running from a local content snapshot; `master` is the Astro rebuild.
