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

**Workflow:** Run a local server → edit HTML/CSS/JS → see changes in the browser (refresh or use live reload) → when you’re happy, push to GitHub.

### Local dev with live reload (if you have Node/npm)

1. In Terminal: `cd` into this project folder, then run `npm install`
2. Run: `npm run dev`
3. Your browser should open at **http://localhost:3000** and reload when you save files.

### If "This site can't be reached" or you don't use Node

**Option A – use the start script**

1. Open **Terminal** (or Cursor: **View → Terminal**).
2. Go to the project folder: `cd /Users/tylerteves/PolyProfits`
3. Run: `./start-server.sh` (or `bash start-server.sh`)
4. **Leave that window open.** In your browser, open: **http://localhost:3000**
5. Stop the server with **Ctrl+C** when you’re done.

**Option B – run Python directly**

1. In Terminal, go to the project folder: `cd /Users/tylerteves/PolyProfits`
2. Run: `python3 -m http.server 3000`
3. Leave the window open and open **http://localhost:3000** in your browser.

You won’t get auto-reload—refresh the page (Cmd+R or F5) after you save changes.

### Other options

- Open `index.html` in a browser (double-click the file), or run a static server (e.g. `npx serve .`).
- Rebuild bundles if you change source:
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
