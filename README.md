# Developer's Digest

Developer's Digest is an in-progress, agent-built developer news product. The goal is to turn fast-moving AI, cloud, infrastructure, and software-platform news into concise engineering signals: what changed, why it matters to developers, and what teams may need to watch next.

This repository is being shaped as a spec-driven, agentic coding project. We are using clear project instructions, scoped agents, and tight build/lint/smoke-test loops to keep momentum high while preserving implementation quality.

## What We Are Building

Developer's Digest is planned as a focused briefing experience for software teams:

- A public frontend with curated developer news, daily briefings, pricing, and newsletter signup.
- A backend API for subscriptions, unsubscribes, subscriber administration, and integration hooks.
- Turso-backed persistence through Drizzle ORM.
- Zapier webhook support for pushing subscriber events into external automations.
- A codebase structure that keeps UI and backend concerns separate enough for specialized agents to work safely.

This is still in progress. The current product surface is intentionally small: landing pages, a subscription flow, and backend subscriber routes. The architecture is now set up so new features can be added through narrower specs.

## Current Architecture

This is a pnpm monorepo with two application packages:

```text
developer-digest/
├── frontend/   # Next.js App Router UI, port 3000
├── backend/    # Hono API, Drizzle ORM, Turso, port 4000
├── .codex/     # Agent configuration and role definitions
├── AGENTS.md   # Repository operating instructions for agents
└── package.json
```

### Frontend

`frontend/` contains the UI only:

- Next.js App Router pages in `frontend/src/app`
- Components in `frontend/src/components`
- Local shadcn/ui primitives in `frontend/src/components/ui`
- Client API helpers in `frontend/src/lib/api.ts`

The frontend calls the backend through `NEXT_PUBLIC_API_URL`, which defaults to `http://localhost:4000` in development.

### Backend

`backend/` contains the API and database code:

- Hono server entrypoint in `backend/src/index.ts`
- Routes in `backend/src/routes`
- Drizzle/Turso client and schema in `backend/src/db`
- Drizzle config in `backend/drizzle.config.ts`

Current backend routes:

- `POST /subscribe`
- `POST /unsubscribe`
- `GET /subscribers`

## Agentic Development Workflow

This repo is designed to make agentic coding more reliable by keeping work scoped and verifiable.

We use:

- **Specs**: concrete instructions in issues, prompts, and `AGENTS.md`.
- **Subagents**: role-specific agents for frontend, backend, and research work.
- **Loops**: implement, run checks, inspect failures, tighten the implementation, repeat.
- **Boundaries**: frontend agents stay in `frontend/`, backend agents stay in `backend/`, and research agents do external lookup.

The intent is not to let agents make broad, unreviewed changes. The intent is to give each agent a constrained surface area and objective verification gates, so the project can move quickly without mixing UI, API, database, and research concerns.

## Local Development

Install dependencies:

```bash
pnpm install
```

Start both apps:

```bash
pnpm dev
```

This starts:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000`

Run checks:

```bash
pnpm lint
pnpm build
```

## Environment

Frontend:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Backend:

```env
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
ADMIN_SECRET=digest-admin-secret
ZAPIER_WEBHOOK_URL=
```

`ZAPIER_WEBHOOK_URL` is optional. When set, subscriber and unsubscribe events are sent to Zapier.

## Status

In progress. The current foundation is ready for the next specs: admin workflows, newsletter content operations, richer subscriber lifecycle handling, production deployment, and stronger automated test coverage.
