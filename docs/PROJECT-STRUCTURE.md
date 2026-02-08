# PolyProfits – Project Structure

Clean layout for building out the site.

## Root

| Path | Purpose |
|------|--------|
| `index.html` | Home |
| `about.html` | About |
| `process.html` | How It Works |
| `team.html` | Team |
| `styles.css` | Global styles (nav, footer, sections) |
| `process-styles.css` | Process page only |
| `script.js` | Shared JS (nav, menu, form, active link) |
| `performance-optimization.js` | Preload / defer (used by index, process, legal) |
| `light-pillar.js` | Entry for background effect |
| `light-pillar-bundle.js` / `.css` | Built background (all pages) |
| `gradient-text-bundle.js` / `.css` | Built hero gradient text (index only) |
| `sw.js` | Service worker |
| `manifest.json` | PWA manifest |
| `CNAME`, `robots.txt`, `sitemap.xml` | Deploy / SEO |

## Folders

- **assets/** – Images (logos, emblems, placeholders). See `assets/README.md`.
- **components/** – React sources for bundles:
  - **LightPillar/** – Background effect (`npm run build:lightpillar`)
  - **GradientText/** – Hero gradient text (`npm run build:gradient`)
- **legal/** – `privacy-policy/index.html`, `terms-of-service/index.html` (clean URLs: /legal/privacy-policy/, /legal/terms-of-service/)
- **docs/** – Project notes (this file)

## Build

```bash
npm run build:lightpillar   # after editing LightPillar
npm run build:gradient      # after editing GradientText (needs gradient-text.js entry if missing)
```

## Adding pages

1. Add `page.html` at root (reuse nav/footer from existing pages).
2. Link `styles.css` + `light-pillar-bundle.css` + `script.js` + `light-pillar-bundle.js`.
3. Include `<div id="light-pillar-root">` in the page background wrapper.
4. Add a `page-styles.css` only if the page needs extra styles.
