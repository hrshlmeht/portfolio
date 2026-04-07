# Portfolio Website - Harshal Mehta

## Project
Personal portfolio website built with React + Vite, deployed to GitHub Pages.

## Commands
- `npm run dev` — start dev server (http://localhost:5173)
- `npm run build` — production build to /dist
- `npm run preview` — preview production build locally

## Architecture
- Single-page app, no router. Scroll-based navigation.
- CSS Modules for component styling. CSS variables for theming.
- Dark/light theme via `data-theme` attribute on `<html>`.
- All placeholder content lives in `src/data/content.js` — edit this file to customize.

## Key Conventions
- Component folders: PascalCase (e.g., `Hero/Hero.jsx`)
- CSS modules: `ComponentName.module.css`
- No heavy UI libraries. Only external dep: `react-icons`.
- All colors via CSS variables (never hardcode hex in component CSS).
- Mobile-first responsive design.

## Deployment
- GitHub Actions workflow at `.github/workflows/deploy.yml`
- Push to `main` triggers automatic deploy to GitHub Pages
- `vite.config.js` `base` must match the repo name: `/portfolio/`
- Enable GitHub Pages in repo settings → Source: "GitHub Actions"

## Social Links
- LinkedIn: https://www.linkedin.com/in/harshalmehtaprofile/
- DEV: https://dev.to/harshal_mehta
- GitHub: https://github.com/hrshlmeht

## Customization
1. Edit `src/data/content.js` to update all text content
2. Replace the `HM` initials placeholder in About section with a real photo
3. Update `personalInfo.email` with your real email
4. If repo name is not `portfolio`, update `base` in `vite.config.js`
