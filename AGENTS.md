# Repository Guidelines

## Project Structure & Module Organization

This English-language portfolio uses React 19, TypeScript, and Vite. `src/main.tsx` mounts the application; `src/app.tsx` composes its sections. Keep page sections and navigation in `src/components/`, typed project content in `src/data/projects.ts`, and reusable hooks in `src/hooks/`. Global styles, responsive layouts, and animations live in `src/styles.css`. Static assets, including the CV, logos, and favicon, belong in `public/`. Production output is generated in `dist/`; do not edit it directly.

## Build, Test, and Development Commands

Use Node.js 22.12+ or 20.19+ and npm.

- `npm ci`: install dependencies from the committed lockfile.
- `npm run dev`: start the local Vite server on `127.0.0.1`.
- `npm run typecheck`: validate strict TypeScript types.
- `npm run build`: run TypeScript checks and generate `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run format`: format the configured source and configuration files with Prettier.
- `npm run format:check`: check formatting without modifying files.

## Coding Style & Naming Conventions

Follow the existing four-space indentation and Prettier configuration. Use TypeScript and functional React components. Name component exports in PascalCase (`SelectedWork`), hooks in camelCase with a `use` prefix (`useReveal`), and multiword source files in snake_case (`selected_work.tsx`). Keep content changes in the typed data module where applicable. Preserve strict typing and resolve unused variables and parameters. Reuse existing CSS variables and layout patterns.

## Testing Guidelines

No automated test framework, test script, or coverage threshold is currently configured. Before submitting changes, run `npm run typecheck`, `npm run format:check`, and `npm run build`. For interface changes, inspect desktop and mobile layouts, keyboard navigation, external links, and reduced-motion behavior using the local server. If adding automated tests, document the chosen runner and invocation in `README.md`.

## Commit & Pull Request Guidelines

Existing history uses short messages such as `Update Site source`; no formal commit convention is established. Prefer concise, imperative messages describing the change, such as `Fix mobile navigation focus`. Pull requests should explain the change and its purpose, list validation performed, link relevant issues, and include desktop/mobile screenshots for visual changes.

## Content & Accessibility

Keep portfolio copy in English unless translation is requested. Preserve semantic landmarks, accessible control labels, visible focus states, and `prefers-reduced-motion` support. Project illustrations should remain clearly distinguishable from client application screenshots. Do not commit credentials or private client material.
