# Marvin Cangcianno — Personal Website

A production-grade personal website built with **Angular 21** and **Tailwind CSS v4**.

---

## Tech Stack

| Layer     | Technology                                                    |
| --------- | ------------------------------------------------------------- |
| Framework | Angular 21 (standalone components, signals)                   |
| Styling   | Tailwind CSS v3 + custom CSS utilities                        |
| Fonts     | Orbitron (display), JetBrains Mono (mono), Syne (UI)          |
| Routing   | Angular Router with lazy-loaded routes + View Transitions API |
| State     | Angular Signals (`signal`, `computed`)                        |
| Build     | Angular CLI / esbuild                                         |

---

## Pages

| Route       | Component           | Description                                           |
| ----------- | ------------------- | ----------------------------------------------------- |
| `/`         | `LandingComponent`  | Hero, stats, featured projects, skills grid, CTA      |
| `/projects` | `ProjectsComponent` | Filterable project cards with categories              |
| `/about`    | `AboutComponent`    | Bio, work timeline, skill bars, credentials           |
| `/contact`  | `ContactComponent`  | Contact form + social links + availability status     |
| `/docs`     | `DocsComponent`     | Docs portal with sidebar nav and rich article content |

---

## Project Structure

```
src/
├── app/
│   ├── app.ts                   # Root component
│   ├── app.config.ts            # provideRouter, provideAnimations
│   ├── app.routes.ts            # Lazy-loaded route definitions
│   ├── components/
│   │   └── nav/nav.ts           # Sticky navigation component
│   └── pages/
│       ├── landing/landing.ts
│       ├── projects/projects.ts
│       ├── about/about.ts
│       ├── contact/contact.ts
│       └── docs/docs.ts
├── index.html                   # Google Fonts + meta tags
├── main.ts                      # bootstrapApplication
└── styles.css                   # Tailwind directives + global utilities
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development server

```bash
npm start
# Open http://localhost:4200
```

### Production build

```bash
npm run build
# Output: dist/marvincang.github.io/
```

---

## Design System

### Color Palette

| Variable       | Hex       | Usage                     |
| -------------- | --------- | ------------------------- |
| `void`         | `#07070e` | Page background           |
| `surface`      | `#0f0f1a` | Card backgrounds          |
| `surface-2`    | `#161625` | Input backgrounds         |
| `cyan`         | `#00d4ff` | Primary accent, links     |
| `jade`         | `#00ff88` | Success, availability     |
| `ember`        | `#ff6b35` | Warnings, featured badges |
| `silver`       | `#e2e8f0` | Primary text              |
| `silver-muted` | `#94a3b8` | Secondary text            |

### Typography

- **Display:** Orbitron — headings, logo, labels
- **Mono:** JetBrains Mono — code, tags, metadata
- **UI:** Syne — body text, descriptions

### Key CSS Utilities

```css
.btn-primary       /* Cyan bordered CTA button */
.btn-secondary     /* Muted bordered button */
.card              /* Surface panel with border */
.card-accent       /* Card with cyan hover glow */
.section-label     /* Mono uppercase tracking label */
.gradient-text     /* Cyan-to-jade gradient text */
.tag               /* Muted tech tag chip */
.tag-cyan          /* Cyan-highlighted tag chip */
.input-field       /* Dark styled form input */
.clip-corner       /* Diagonal corner clip-path */
.bg-grid           /* Subtle dot-grid background */
```

---

## Customization

### 1. Personal Info

Update the data arrays in each page component:

- `landing.ts` → `techStack`, `stats`, `featuredProjects`, `skillDomains`
- `projects.ts` → `projects[]` array
- `about.ts` → `quickFacts`, `experience`, `skillBars`, `credentials`
- `contact.ts` → `contactMethods`, `socialLinks`

### 2. Colors

Edit `tailwind.config.js` to change the color palette.

### 3. Fonts

Replace Google Fonts links in `src/index.html` and update `fontFamily` in `tailwind.config.js`.

### 4. Adding a New Page

```bash
# 1. Create the component file
touch src/app/pages/blog/blog.ts

# 2. Add to app.routes.ts
{
  path: 'blog',
  loadComponent: () => import('./pages/blog/blog').then(m => m.BlogComponent),
  title: 'Blog — Marvin Cangcianno'
}

# 3. Add to nav links in nav.ts
{ path: '/blog', label: 'Blog', index: '05' }
```

---

## Deployment

### Netlify / Vercel

Add a `_redirects` file (Netlify) or `vercel.json` for SPA routing:

**Netlify** — create `dist/marvincang.github.io/_redirects`:

```
/*    /index.html   200
```

**Vercel** — create `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### GitHub Pages

Use `--base-href` flag and set `outputPath` to `docs/`:

```bash
ng build --base-href /your-repo-name/
```

---

## License

MIT — feel free to use this as a template for your own personal site.
