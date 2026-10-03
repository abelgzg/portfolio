# Abel Gezu — Portfolio

Single-page portfolio site: application security testing, backend and AI / LLM engineering work.

Built with React 19, Vite 8 and Tailwind CSS 4. No router, no runtime data fetching — all
content is static and lives in `src/App.jsx` as plain data arrays above the components.

## Running locally

```bash
npm install
npm run dev      # dev server
npm run build    # production bundle into dist/
npm run preview  # serve the built output
npm run lint     # oxlint
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/App.jsx` | Content data (experience, projects, skills, case study) and all sections |
| `src/index.css` | Tailwind import plus base background and smooth scrolling |
| `public/` | Profile photo, CTF certificate image, downloadable CV |

## Deploying

Deploys to Vercel as a static site. The framework preset is **Vite**, build command
`npm run build`, output directory `dist`. Every push to `main` redeploys.
