# Regen Phytozenika

Responsive wellness website for Regen Phytozenika, built with React and Vite. The site presents the brand philosophy, product categories, company information, and contact experience.

## Features

- Full-width responsive product-category slider
- Category-specific brand palette and product visuals
- Animated product backdrop and carousel controls
- Responsive navigation and contact experience
- About page with company and wellness information
- Search-engine and social-sharing metadata

## Category palette

| Category | Hex |
| --- | --- |
| Immune | `#EC008C` |
| Cardiovascular | `#ED1C24` |
| Skin care | `#FABFAC` |
| Metabolic | `#F14624` |
| Respiratory | `#81C2D9` |

## Requirements

- Node.js 22.12 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup, normally `http://localhost:5173`.

## Quality checks

Run the complete local validation before committing:

```bash
npm run check
```

This runs ESLint and creates a production build in `dist/`.

## Production preview

```bash
npm run build
npm run preview
```

## Project structure

```text
public/              Static images and favicon
src/components/      Shared website components
src/pages/           Route-level pages
src/App.jsx          Application routes
src/App.css          Site styling and responsive design
src/main.jsx         React entry point
```

## GitHub workflow

The workflow in `.github/workflows/ci.yml` runs linting and a production build for pushes and pull requests targeting `main`.

Before pushing changes:

```bash
npm run check
git status
git add .
git commit -m "Describe your changes"
git push origin main
```
