# Prompts Directory

**Documentation-first, AI-friendly system** for building apps. This repo does not ship code or a framework—it defines **six canonical documents** that form your project’s knowledge base and act as the single source of truth. You (or an AI) write or generate these docs first, then build strictly from them. That reduces guesswork, limits scope creep, and gives you a clear way to verify the build matches the spec.

## Quick start (30 seconds)

In your project, create these six files (or clone this repo and replace their contents):

```
PRD.md
APP_FLOW.md
TECH_STACK.md
FRONTEND_GUIDELINES.md
BACKEND_STRUCTURE.md
IMPLEMENTATION_PLAN.md
```

Then paste this **meta-prompt** into your AI (one-shot bootstrap):

> Using the prompts-directory [documentation guide](documentation%20guide.md), generate all six documents for [your app idea]. Output PRD first, then APP_FLOW, TECH_STACK, FRONTEND_GUIDELINES, BACKEND_STRUCTURE, IMPLEMENTATION_PLAN. Use the structure and sample prompts from the guide for each.

Refine the generated docs, then build from them with [SUPER_PROMPT.md](SUPER_PROMPT.md). See [examples/todo-app](examples/todo-app) for a minimal filled example.

## What This Repo Is

Six documents, one contract:

| Document | Purpose |
|----------|---------|
| **PRD.md** | What to build, for whom, success criteria, and what is explicitly out of scope |
| **APP_FLOW.md** | Every page, user path, decision point, and error state |
| **TECH_STACK.md** | Exact dependencies, versions, env vars, and scripts |
| **FRONTEND_GUIDELINES.md** | Design tokens, components, and accessibility |
| **BACKEND_STRUCTURE.md** | Schema, API contracts, auth, and validation |
| **IMPLEMENTATION_PLAN.md** | Ordered build steps with success criteria |

When you or an AI codes against these docs, there’s less ambiguity and fewer invented features—you can point to “PRD §6” or “APP_FLOW §2” instead of long back-and-forth.

## When to Use It

Use this repo when:

- **Starting a new app** and you want a clear spec before writing (or generating) code.
- **Using AI to build or extend an app** and you want one place that defines scope, flows, stack, and implementation order.
- **Keeping a build on-spec**—the six docs are the contract; reference them in prompts or reviews.
- **Onboarding**—new devs or AI sessions can read the same docs and know what exists and what’s allowed.

Skip it for throwaway scripts or one-off experiments; it’s most useful for **real products or MVPs** where scope and consistency matter.

## How to Use It

### 1. New project (bootstrap)

- Open **[documentation guide.md](documentation%20guide.md)**.
- For each of the six documents, use the **structure template** and **sample AI prompt** in the guide to generate or fill that doc. Order: PRD → APP_FLOW → TECH_STACK → FRONTEND_GUIDELINES → BACKEND_STRUCTURE → IMPLEMENTATION_PLAN.
- Shortcut: use the **“generate all six”** meta-prompt below and have the AI output all six in one go, then refine.

### 2. Building or changing the app (with AI)

- Give the AI **[SUPER_PROMPT.md](SUPER_PROMPT.md)** (or its contents) as context so it follows the six-doc system.
- For the current task, load the **relevant docs** (e.g. for a new screen: PRD + APP_FLOW + FRONTEND_GUIDELINES; for an API: PRD + BACKEND_STRUCTURE).
- Implement **only** what those docs say; follow **IMPLEMENTATION_PLAN.md** step order when applicable.
- After each step, confirm against the success criteria in IMPLEMENTATION_PLAN and PRD.

### 3. Rules to keep builds consistent

- No features or scope beyond what’s in the PRD (honor “OUT OF SCOPE”).
- No new routes/screens without APP_FLOW; no new dependencies without TECH_STACK; no UI that breaks FRONTEND_GUIDELINES; no API/schema changes without BACKEND_STRUCTURE.
- If something is missing or ambiguous in the docs, **ask** (or update the doc); don’t guess.

### 4. In your editor (e.g. Cursor)

- Add a rule or project instruction: *“When working in this project, follow SUPER_PROMPT.md and the six-document system from the prompts-directory repo.”*
- Copy-paste ready: use **[CURSOR_RULE.md](CURSOR_RULE.md)** into your project's `.cursor/rules` so every session follows the six-doc workflow.

### 5. Definition of done

A step is **done** when: (1) the code matches the referenced doc sections, (2) the step's success criteria are checked, and (3) no work from PRD §7 OUT OF SCOPE was added. When code and docs disagree, the docs win—update the docs or revert the code.

## Key Files

- **[documentation guide.md](documentation%20guide.md)** — Full guide with structure templates and sample AI prompts for generating each document.
- **[SUPER_PROMPT.md](SUPER_PROMPT.md)** — Single instruction set: when to use which doc, workflow, and hard rules. Use this (or inject it as context) when building with AI.
- **[CURSOR_RULE.md](CURSOR_RULE.md)** — Copy-paste rule for Cursor so the six-doc system is applied in every session.
- **[GLOSSARY.md](GLOSSARY.md)** — Short definitions: PRD, APP_FLOW, OUT OF SCOPE, P0/P1/P2, six-doc system, § references.
- **[examples/todo-app](examples/todo-app)** — Minimal example with all six docs filled for a todo MVP.
- **[IDEAS.md](IDEAS.md)** — Ideas to improve the repo (tooling, examples, GitHub setup, AI integration). Good for contributors and roadmap.
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — How to suggest improvements and contribute.
- **[GITHUB_SETUP.md](GITHUB_SETUP.md)** — Suggested repo description and topics for GitHub About.

## Validation

From the repo root (or from a project that has the six docs):

```bash
node scripts/validate.js
# or: ./scripts/validate.sh
```

Checks: all six files exist; PRD has §7 OUT OF SCOPE. Optional: run in CI or pre-commit.

## Meta Prompts

**Generate all six documents (one-shot bootstrap):**

> Using the prompts-directory [documentation guide](documentation%20guide.md), generate all six documents for [app idea]. Output PRD first, then APP_FLOW, TECH_STACK, FRONTEND_GUIDELINES, BACKEND_STRUCTURE, IMPLEMENTATION_PLAN. Use the structure and sample prompts from the guide for each.
