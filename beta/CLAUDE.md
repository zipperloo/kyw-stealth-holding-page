# KYW Beta Website — AI Coding Conventions

> This file is the single source of truth for how to build pages on the KYW beta website.
> All AI assistants (Copilot, Claude, etc.) MUST follow these rules.

## Tech Stack

| Layer        | Tool                 | Version   |
|------------- |----------------------|-----------|
| CSS          | Tailwind CSS         | 3.4+      |
| PostCSS      | autoprefixer         | 10.4+     |
| Encryption   | staticrypt           | CLI       |
| JS (future)  | Alpine.js (planned)  | —         |
| Fonts        | Inter (Google Fonts) | —         |
| Build        | `npm run build`      | —         |
| Deploy       | `npm run deploy`     | (build + encrypt) |

## Responsive Design — MANDATORY

### Mobile-First Approach
All styling is **mobile-first**. Write bare Tailwind classes for phones, then layer breakpoints for larger screens.

```
WRONG:  class="text-4xl sm:text-2xl"         ← desktop-first
RIGHT:  class="text-2xl md:text-3xl lg:text-4xl"  ← mobile-first
```

### Breakpoints (Tailwind defaults)

| Prefix | Min-width | Target device              |
|--------|-----------|----------------------------|
| (none) | 0px       | Phones (portrait)          |
| `sm:`  | 640px     | Phones (landscape)         |
| `md:`  | 768px     | Tablets / iPad portrait    |
| `lg:`  | 1024px    | iPad landscape / laptops   |
| `xl:`  | 1280px    | Desktops                   |
| `2xl:` | 1536px    | Large desktops             |

### Responsive Rules
1. **Always test at 3 widths**: 375px (phone), 768px (tablet), 1280px (desktop)
2. **Never use fixed pixel widths** for layout containers — use `max-w-*`, `w-full`, percentages
3. **Never use raw `@media` queries** — use Tailwind breakpoint prefixes instead
4. **Images**: Always include `w-full`, `max-w-*`, and appropriate aspect ratio classes
5. **Font sizes**: Use the responsive type scale from `tailwind.config.js` (e.g., `text-display-sm md:text-display`)
6. **Padding/margins**: Scale up at breakpoints (e.g., `p-4 md:p-6 lg:p-8`)
7. **Grid layouts**: Stack on mobile, expand on tablet+ (e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)

## Page Structure Template

Every content page (not the password template) should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title — Know Your Worth</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
  <!-- Background orbs (optional, for hero sections) -->
  <div class="orb orb-purple -top-48 -right-24 lg:-top-52 lg:-right-32"></div>
  <div class="orb orb-blue -bottom-32 -left-24 lg:-bottom-40 lg:-left-32"></div>

  <!-- Navigation (future — will be a shared component) -->
  <header>...</header>

  <main class="page-container">

    <!-- Hero Section -->
    <section class="section">
      <h1 class="text-hero">Page Title</h1>
      <p class="text-lead max-w-narrow">Subtitle text goes here.</p>
    </section>

    <!-- Content Sections -->
    <section class="section">
      <h2 class="text-section">Section Heading</h2>
      <div class="grid-2">
        <div class="card">...</div>
        <div class="card">...</div>
      </div>
    </section>

  </main>

  <footer>...</footer>
</body>
</html>
```

## Reusable Component Classes

Defined in `src/css/globals.css`. Use these instead of re-inventing layouts:

### Layout
| Class                  | Purpose                                    |
|------------------------|--------------------------------------------|
| `.page-container`      | Centered content, responsive padding, 72rem max |
| `.page-container-narrow` | Narrow text content, 40rem max            |
| `.section`             | Vertical padding for page sections         |
| `.section-sm`          | Tighter vertical padding variant           |

### Grids
| Class     | Columns                              |
|-----------|--------------------------------------|
| `.grid-2` | 1 col → 2 col at `md:`              |
| `.grid-3` | 1 col → 2 col at `sm:` → 3 at `lg:` |
| `.grid-4` | 1 col → 2 col at `sm:` → 4 at `xl:` |

### Cards
| Class         | Purpose                               |
|---------------|---------------------------------------|
| `.card`       | Surface bg, border, rounded, padded   |
| `.card-hover` | Add to `.card` for interactive cards  |

### Buttons
| Class            | Purpose                     |
|------------------|-----------------------------|
| `.btn-primary`   | Purple CTA button           |
| `.btn-secondary` | Outline / bordered button   |
| `.btn-ghost`     | Minimal text-only button    |

### Typography
| Class           | Purpose                                 |
|-----------------|-----------------------------------------|
| `.text-hero`    | Page title (responsive display size)    |
| `.text-section` | Section heading (responsive h1/h2)     |
| `.text-lead`    | Subtitle / lead paragraph              |

### Background
| Class          | Purpose                     |
|----------------|-----------------------------|
| `.orb`         | Base floating orb           |
| `.orb-purple`  | Purple gradient orb         |
| `.orb-blue`    | Blue gradient orb           |

## Design Tokens (from tailwind.config.js)

### Colors
Use `kyw-*` prefixed colors. **Never use raw hex values in HTML.**

- **Primary**: `kyw-primary` (#604de4), `kyw-primary-hover` (#7c6ef0)
- **Surfaces**: `kyw-bg`, `kyw-surface`, `kyw-surface-hover`
- **Text**: `kyw-text`, `kyw-text-secondary`, `kyw-text-muted`
- **Borders**: `kyw-border`
- **Status**: `kyw-success`, `kyw-error`, `kyw-warning`, `kyw-info`

### Type Scale
Use the named font sizes from the config: `text-display`, `text-display-sm`, `text-heading-1`, `text-heading-2`, `text-heading-3`, `text-body-lg`, `text-body`, `text-body-sm`, `text-caption`.

## File Organization

```
beta/
├── src/
│   ├── pages/                  ← SOURCE CONTENT PAGES — edit these!
│   │   ├── index.html          ← Homepage (unencrypted source)
│   │   ├── big-idea.html       ← Big Idea page (unencrypted source)
│   │   └── investors.html      ← Investors page (unencrypted source)
│   ├── css/globals.css         ← Tailwind directives + component classes
│   └── js/main.js              ← Alpine.js entry point (future)
├── assets/css/main.css         ← GENERATED by Tailwind — never edit directly
├── password_template.html      ← Staticrypt template (inline CSS — don't use Tailwind)
├── index.html                  ← ENCRYPTED output — never edit directly
├── big-idea.html               ← ENCRYPTED output — never edit directly
├── investors.html              ← ENCRYPTED output — never edit directly
├── tailwind.config.js          ← Design tokens + breakpoints
├── postcss.config.js           ← PostCSS pipeline
└── package.json                ← Scripts: dev, build, encrypt, deploy
```

## Workflow

The build pipeline separates source content from encrypted output:

1. **Edit** content pages in `src/pages/` (and CSS in `src/css/globals.css`)
2. **Build** Tailwind CSS: `npm run build` → generates `assets/css/main.css`
3. **Encrypt** pages: `npm run encrypt` → wraps `src/pages/*.html` with staticrypt → outputs to `beta/` root
4. **Deploy** (both): `npm run deploy` → runs build + encrypt in sequence
5. **Commit** both the source pages AND encrypted output to git

> **Important:** The encrypted HTML files in the root (`index.html`, `big-idea.html`, `investors.html`)
> are auto-generated. Always edit the source pages in `src/pages/` and re-run `npm run deploy`.

## Rules for AI Assistants

1. **Only edit files in `src/pages/` and `src/css/`** — never edit the encrypted output HTML files in `beta/` root.
2. **Never edit `assets/css/main.css`** — it's generated. Edit `src/css/globals.css` instead.
3. **Never edit `password_template.html`** — it uses inline CSS intentionally for staticrypt's self-contained output.
4. **Never add raw CSS** outside of `globals.css`. Use Tailwind utility classes in HTML.
5. **Extract to `globals.css`** only when a pattern is used 3+ times across pages.
6. **Always include responsive variants** when adding layout, typography, or spacing classes.
7. **Run `npm run build`** after CSS changes to regenerate `main.css`.
8. **Run `npm run deploy`** after content changes to rebuild + re-encrypt.
9. **Keep JS minimal** — CSS-first animations, Tailwind for layout, Alpine.js (when added) for interactivity only.
10. **Accessibility is non-negotiable** — semantic HTML, focus-visible outlines, alt text, ARIA labels.
11. **Performance budget** — keep total page weight under 200KB (excluding fonts). No heavy JS frameworks.
