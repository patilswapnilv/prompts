# Prompts Directory

**Documentation-first, AI-friendly system** for building apps. This repo does not ship code or a framework—it defines **six canonical documents** that form your project’s knowledge base and act as the single source of truth. You (or an AI) write or generate these docs first, then build strictly from them. That reduces guesswork, limits scope creep, and gives you a clear way to verify the build matches the spec.

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
- That keeps every session aligned to the same workflow and doc order.

## Key Files

- **[documentation guide.md](documentation%20guide.md)** — Full guide with structure templates and sample AI prompts for generating each document.
- **[SUPER_PROMPT.md](SUPER_PROMPT.md)** — Single instruction set: when to use which doc, workflow, and hard rules. Use this (or inject it as context) when building with AI.

## Meta Prompts

**Generate all six documents (one-shot bootstrap):**

> Using the prompts-directory [documentation guide](documentation%20guide.md), generate all six documents for [app idea]. Output PRD first, then APP_FLOW, TECH_STACK, FRONTEND_GUIDELINES, BACKEND_STRUCTURE, IMPLEMENTATION_PLAN. Use the structure and sample prompts from the guide for each.
