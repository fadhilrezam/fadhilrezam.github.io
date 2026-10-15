# Fadhil Reza Maulana — Portfolio

Personal portfolio website, built with plain HTML, CSS, and JavaScript. No framework, no build step.

🌐 **Live site → https://fadhilrezam.github.io**

---

## Features

- **Bilingual** — Indonesian & English with a navbar toggle; the choice is remembered in `localStorage`
- **Dark / light theme** — toggle in the navbar, persisted across visits
- **Scroll reveal** — sections fade in as they enter the viewport
- **Scroll spy** — the navbar highlights the section you're currently reading
- **Sections** — background, core strengths, work experience, projects, education, certifications, contact
- **Contact form** — AJAX submission with a graceful `mailto:` fallback when no backend is configured
- **Responsive** — mobile-first with a hamburger menu below 780px
- **Accessible** — skip link, ARIA labels, visible focus states, `prefers-reduced-motion` respected
- **SEO** — meta tags, Open Graph, canonical URL, `robots.txt`, `sitemap.xml`
- **Zero dependencies** — nothing to install, works offline

## Stack

| | |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS custom properties, Grid, Flexbox |
| Logic | Vanilla JavaScript (ES2015+) |
| Hosting | GitHub Pages |
| Typeface | Plus Jakarta Sans + JetBrains Mono |

The whole site is roughly 50 KB before compression — no images, no libraries, no trackers.

## Run locally

Requires [Node.js](https://nodejs.org) (any recent version):

```bash
git clone https://github.com/fadhilrezam/fadhilrezam.github.io.git
cd fadhilrezam.github.io
node start.mjs
```

Then open <http://localhost:8000>.

Any static file server works just as well:

```bash
npx serve .
php -S localhost:8000
```

## Project structure

```
.
├── index.html          # page structure
├── start.mjs           # zero-dependency local dev server
├── robots.txt          # search engine directives
├── sitemap.xml         # sitemap
├── .nojekyll           # tells GitHub Pages to skip Jekyll processing
└── assets/
    ├── css/style.css   # design tokens, layout, responsive rules
    ├── js/main.js      # rendering, i18n, animations, form handling
    ├── data/content.js # site content (all copy lives here)
    ├── avatar.svg      # profile image placeholder
    └── favicon.svg
```

## Customizing

All visible copy lives in `assets/data/content.js`. Text entries are stored as language
pairs and the interface renders whichever language is active:

```js
tagline: {
  id: "versi Bahasa Indonesia",
  en: "English version"
}
```

Colors are controlled by CSS custom properties at the top of `assets/css/style.css` —
change `--accent`, `--accent-2`, and `--bg` to retheme the entire site.

## Deploying

The site is published straight from the `main` branch through GitHub Pages. Push any
commit and it goes live within about a minute — no rebuild step required.

## License

© Fadhil Reza Maulana. All rights reserved.