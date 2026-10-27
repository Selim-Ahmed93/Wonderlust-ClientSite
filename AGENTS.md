<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# WonderLust

Single Next.js App Router app (no monorepo, no backend code yet). It's a travel-brand
marketing site: `src/app/page.tsx` is still empty, brand PNGs are already in `public/images/`.
`next dev` may also append a second managed block (`nextjs-agent-feedback`) because
`experimental.agentFeedback` is on — leave that in place too.

## Commands

- `npm install` — npm + `package-lock.json`; Node >= 22 (the `cn` package requires it).
- `npm run dev` — Turbopack dev server on :3000.
- `npm run build` / `npm run start`.
- `npx tsc --noEmit` — fast typecheck; there is no npm script for it.
- `npm run lint` — bare `eslint` (v9 flat config) over the whole repo. Lint is not part
  of `build`, so a green build says nothing about lint.
- No test runner and no CI exist. Verify with `tsc --noEmit` + `lint` + `build`
  (`build` typechecks too, but only after compiling).

`npm run lint` already fails with two pre-existing `react-hooks/set-state-in-effect`
errors in generated UI code: `src/components/ui/carousel.tsx:98` and
`src/hooks/use-mobile.ts:14`. Don't treat them as your regression.

## Stack quirks

- Next 16.4.3 / React 19.3, React Compiler enabled in `next.config.ts`; don't add manual
  `useMemo`/`useCallback` just for performance.
- Tailwind v4 is wired through the `@tailwindcss/turbopack` loader in `next.config.ts`
  (every `*.css` goes through it). There is **no** `postcss.config` or `tailwind.config`.
  Design tokens live in `src/app/globals.css` (`@theme inline`, `:root`, `.dark`) — add
  colors/radii there, not in a config file.
- Fonts: Josefin Sans (`--font-sans`, body) and Playfair Display (`--font-display`,
  exposed as `font-heading`) load in `layout.tsx` via `next/font` `variable:`. `--font-mono`
  still points at the undefined `--font-geist-mono`.
- Brand cyan is the `--brand` token (`#149fbf`) in `globals.css`, exposed as `bg-brand` /
  `text-brand`; add new design colors next to it.
- shadcn is configured with the **`base-nova`** style built on Base UI
  (`@base-ui/react`), not Radix. Keep that when adding primitives:
  `npx shadcn@latest add <component>`.
- Class merging uses the `cn` npm package (drop-in clsx + tailwind-merge), imported as
  `{ cn } from "cn"` or via `@/lib/utils` (which only re-exports it). Don't add
  `clsx`/`tailwind-merge`.
- UI components are shadcn-style: plain function components (no `forwardRef`),
  `data-slot` attributes, `"use client"` only where hooks/Base UI require it.
- `LayoutProps<"/">` / `PageProps<...>` are generated globals from `.next/types`
  (see `layout.tsx`); run `npm run dev` or `npm run build` once before trusting
  `tsc` on new routes.
- `@/*` maps to `src/*`.

## Layout

- `src/app` — App Router entrypoints (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/components` — page sections (`navbar.tsx`, `banner.tsx`, `why-choose.tsx`,
  `testimonials.tsx`, `cta.tsx`); `src/components/ui` holds shadcn primitives.
- `src/hooks` — shadcn hooks (e.g. `use-mobile`).
- `public/images` — brand assets, mixed-case filenames; reference with plain strings.

Don't edit `.next/`, `node_modules/`, or `next-env.d.ts`.
