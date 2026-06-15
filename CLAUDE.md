# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common commands

Package manager is **pnpm** (workspaces). Node 20.

- `pnpm install` — install at repo root (the workspace covers every component package)
- `pnpm start` / `pnpm storybook` — run Storybook dev server on port 6006
- `pnpm build` — recursive build across all component workspaces (`pnpm -r run build`, which runs `tsc` per package)
- `pnpm build-storybook` — produce the static Storybook site (`STORYBOOK_BUILD=true` is set so the previewHead injects the GH Pages base href)
- `pnpm deploy-storybook` — build + publish `storybook-static/` to GH Pages
- Tests run per-component package via Jest. From the repo root: `pnpm -r run test`, or `cd src/components/Button && pnpm test`. To run a single test file: `cd src/components/Button && npx jest src/Button.test.tsx`. To filter by name: append `-t "renders Button with label"`.

Docker dev (see [DOCKER_SETUP.md](DOCKER_SETUP.md)): `docker-compose up --build` mounts the repo and exposes Storybook on 6006.

## Architecture

**Monorepo of single-file React components.** `pnpm-workspace.yaml` declares every directory under `src/components/*` as its own package. Each component package is published-shaped on disk even though only the root produces a publishable bundle:

```
src/components/<Name>/
  index.ts            # re-exports default + Props type from src/<Name>.tsx
  package.json        # @saux/<name>, declares deps on other @saux/* packages
  src/
    <Name>.tsx
    <Name>.css
    <Name>.stories.tsx
    <Name>.test.tsx   # not every component has one yet
```

**Cross-component imports go through the workspace alias, not relative paths.** For example, `Button.tsx` imports `useTheme` from `@saux/theme`, not from `../../Theme/...`. When adding a new component that depends on another, add the dep to its `package.json` (e.g. `"@saux/theme": "^1.0.1"`) and import by package name. The one place this is not yet consistent is `Button.test.tsx`, which still uses a relative path to `ThemeProvider` — match the surrounding file when editing, but prefer the alias for new code.

**`_GenericComponent` is the scaffold.** When creating a new component, copy that directory, rename, and wire it into the barrels (`src/components/index.ts` and, if it should be in the published bundle, `src/index.tsx`). The leading underscore keeps it out of alphabetical listings; do not export it.

**Two different `index` files, two different roles:**
- `src/index.tsx` is the **rollup entry** for the published library bundle. It is currently incomplete — it only re-exports a subset of components and contains a `StyleGuide` demo as the default export. The published library shape is defined by `rollup.config.js` (CJS + ESM + `.d.ts` rollup via `rollup-plugin-dts`).
- `src/components/index.ts` is the **canonical barrel** Storybook and consumers should import from. It re-exports every component and its `Props` type. Keep this file in sync when adding/removing components.

**Theming is a Context + CSS custom properties bridge.** `ThemeProvider` ([src/components/Theme/src/ThemeProvider.tsx](src/components/Theme/src/ThemeProvider.tsx)) holds `light`/`dark`/`highContrast` state, exposes `useTheme()`, and on every theme change writes each token to `document.documentElement` as a `--kebab-case` CSS variable. Components style themselves via those variables in their `.css` files; **do not hardcode colors** — add a token to the `Theme` interface and both `lightTheme`/`darkTheme`, then reference `var(--token-name)` in CSS. Storybook wraps every story in `ThemeProvider` via `.storybook/preview.tsx` and drives dark mode through `storybook-dark-mode`'s `useDarkMode()`.

**Storybook is the dev surface.** Stories live next to components and are picked up by `.storybook/main.ts` from `src/components/**/*.stories.@(js|jsx|ts|tsx)` plus `src/stories/**`. Autodocs is on (`docs.autodocs: true`), `react-docgen-typescript` extracts prop tables from TS types, and `@storybook/addon-a11y` runs axe on stories. The `@` alias resolves to `src/` in both `vite.config.ts` and the Storybook Vite config.

## Conventions

- React 19, TypeScript strict mode, `jsx: react-jsx`. Components are `React.FC<Props>` with an exported `Props` interface named `<Name>Props`.
- Tests use `@testing-library/react` + `@testing-library/jest-dom`. Anything that calls `useTheme()` must be rendered inside `<ThemeProvider>` (see the `renderWithTheme` helper in [src/components/Button/src/Button.test.tsx](src/components/Button/src/Button.test.tsx)).
- `*.stories.tsx` files are excluded from the TS build (`tsconfig.json`).
- The root `package.json` is private/proprietary; per-component `package.json`s use the `@saux/<name>` scope.
