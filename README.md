# Abdelmouhaimine Roun — Portfolio

English portfolio built with React, TypeScript, and Vite.

## Develop

Requires Node.js 22.12+ (or 20.19+).

```sh
npm install
npm run dev
```

## Validate and build

```sh
npm run typecheck
npm run build
npm run preview
```

Vite generates the production site in `dist/`. The original CV and favicon are in `public/`.

## Structure

- `src/components/`: page sections and navigation.
- `src/data/projects.ts`: typed project content and contributions.
- `src/hooks/use_reveal.ts`: scroll reveal with reduced-motion support and cleanup.
- `src/styles.css`: responsive layout, visual theme, and CSS animations.
- `.openai/hosting.json`: existing private Site identity, retained during migration.

## Motion and accessibility

Entrance effects and scroll reveals run once. The architecture visual moves on hover.
Navigation supports keyboard use, a mobile menu, active section indicators, and a reading-progress bar.
`prefers-reduced-motion` disables motion and leaves all content visible.

## Next iterations

The page remains English. French translation and further sections can be added after content review.
Project images are abstract illustrations, not screenshots of client applications.
