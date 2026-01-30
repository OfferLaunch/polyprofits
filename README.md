# PolyProfits

Modern, minimal website for **PolyProfits** — an automated Polymarket bot that wins on your behalf. Fully automated; set it and forget it.

## What’s included

- **Home** (`index.html`) – Hero, value props placeholder, CTA
- **How It Works** (`process.html`) – Simple 3-step flow placeholder
- **About** (`about.html`) – Company placeholder
- **Team** (`team.html`) – Team placeholder
- **Legal** – Privacy Policy, Terms of Service
- Shared **nav** and **footer** across all pages
- **Silk** background, **PillNav**, **GradientText** components (from original build)
- **styles.css** + **script.js** for layout and behavior

## Tech

- Static HTML/CSS/JS
- Manrope (Google Fonts), Font Awesome
- AOS for scroll animations
- Optional React-based bundles: Silk background, PillNav, GradientText, ChromaGrid (esbuild)

## Develop

1. Open `index.html` in a browser, or run a local server (e.g. `npx serve .`).
2. Rebuild bundles if you change source:
   - `npm run build:silk`
   - `npm run build:pillnav`
   - `npm run build:gradient`
   - `npm run build:chroma`
   - `npm run build:spotlight`

## Customize

- Replace placeholder copy on each page.
- Add your domain in `CNAME` (e.g. `polyprofits.com`).
- Add favicons and `assets/images/logos/og-image.png` for social sharing.
- Update contact email (`team@polyprofits.co`) and legal entity in `legal/` as needed.

## License

Use and modify as needed for PolyProfits.
