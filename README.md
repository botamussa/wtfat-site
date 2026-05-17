# WTFat — landing site

Single-page landing for **WTFat**, the AI roast platform for Gen Z.

Stack: Next.js 14 (App Router, TypeScript) + Tailwind CSS. No external UI libs. System font stack. Ships in one page.

## Local dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel (one-shot, ~60s)

```bash
git init
git add .
git commit -m "init"
# create a new GitHub repo, then:
git remote add origin git@github.com:<you>/wtfat-site.git
git branch -M main
git push -u origin main
```

Then go to [vercel.com/new](https://vercel.com/new), import the repo, accept defaults (Next.js is auto-detected), and click **Deploy**. No env vars required.

Or, with the Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

## Files that matter

- `app/page.tsx` — the entire landing page (all sections inline)
- `app/layout.tsx` — meta tags, OG, favicon
- `app/globals.css` — Tailwind + global resets
- `tailwind.config.ts` — accent color `#FF3B30`, ink `#0A0A0A`

## Add an OG image

Drop a `1200×630` PNG at `public/og.png` and the meta tags will pick it up automatically.
