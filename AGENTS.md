# Developer's Digest — Monorepo

## Structure
- frontend/ — Next.js 15 App Router, Tailwind CSS, shadcn/ui. Port 3000.
- backend/  — Hono API server, Drizzle ORM, Turso (SQLite). Port 4000.

## Subagent usage
- UI components, pages, styling → spawn frontend_engineer (works in frontend/ only)
- API routes, DB schema, migrations → spawn hono_backend (works in backend/ only)
- Research, documentation, external info → spawn web_research_specialist

## Rules
- frontend/ never contains business logic or DB access
- backend/ never contains UI components or Next.js imports
- All cross-origin requests go through http://localhost:4000 in dev
- Run pnpm lint from the root before marking any task done
