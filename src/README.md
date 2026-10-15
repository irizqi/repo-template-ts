# TanStack React Monorepo

Monorepo npm workspaces dengan Turbo untuk aplikasi React dan shared packages.

## Struktur

- `apps/core` panel admin (`/diggie/*`), port 3002.
- `apps/client` aplikasi client (katalog, akun, login SSO), port 3000.
- `packages/route` shared layout dan route shell TanStack Router.
- `packages/api` shared data fetching memakai TanStack Query.
- `packages/ui` shared UI primitives ala shadcn/ui.
- `packages/shared` komponen dan lib yang dipakai admin dan client.
- `tools/eslint-config` shared ESLint flat config.
- `tools/typescript-config` shared TypeScript config.

## Commands

```sh
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```
