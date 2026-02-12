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

**Workflow:** Run a local server → edit HTML/CSS/JS → see changes in the browser → when you’re happy, push to GitHub so the live site updates.

### 1. Start the local site (localhost)

**Preferred – Node/npm (live reload when you save):**

1. Open **Terminal** (or Cursor: **View → Terminal**).
2. Go to the project: `cd /Users/tylerteves/PolyProfits`
3. Install dependencies once: `npm install`
4. Start the server: `npm run dev`
5. Your browser should open at **http://localhost:3000**. Edit files and save; the page will reload automatically.
6. To stop the server, press **Ctrl+C** in the terminal.

**Important:** Always open **http://localhost:3000** in the browser (not by double‑clicking `index.html`). Opening the file directly can break layout and show odd shapes because CSS/scripts load incorrectly.

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

### 2. Push to the live site when you’re done

When your local changes look good and you want to update the live site:

1. In the same project folder, stage and commit:  
   `git add -A && git commit -m "Your short description of changes"`
2. Push to GitHub:  
   `git push origin main`  
   (Or, if you use a token in `.env`:  
   `set -a && . ./.env && set +a && git push https://${GITHUB_TOKEN}@github.com/OfferLaunch/polyprofits.git main`)
3. If the live site is hosted from this repo (e.g. GitHub Pages), it will update after the push.

### Other options

- Run a static server (e.g. `npx serve .`) and open the URL it prints. Avoid double‑clicking `index.html` (file://)—the site can look broken (weird shapes, vertical nav) because paths and assets don’t load correctly.
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
