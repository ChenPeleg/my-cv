# my-cv

**Live site:** https://chenpeleg.github.io/my-cv

A personal CV / résumé website built with React, TypeScript, Vite, and Tailwind CSS.
CV content is driven by a single [`cv.yaml`](./cv.yaml) file — edit it to update your name, title, contact details, skills, experience, and education.

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router v7](https://reactrouter.com/)

## Getting started

```bash
npm install
npm run dev
```

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local dev server (regenerates `src/generated/cvData.ts` from `cv.yaml` first) |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check without emitting |
| `npm run test` | Run tests with Vitest |

## Customizing your CV

Open `cv.yaml` and fill in your own details.  
The app will pick them up automatically on the next `npm run dev` or `npm run build`.
