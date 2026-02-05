# Prompts Directory

AI-first, documentation-before-code system. This repo defines **six canonical documents** that form your project's knowledge base. They are the single source of truth—use them before writing any code.

## The Six Documents

| Document | Purpose |
|----------|---------|
| **PRD.md** | What to build, for whom, success criteria, and what is explicitly out of scope |
| **APP_FLOW.md** | Every page, user path, decision point, and error state |
| **TECH_STACK.md** | Exact dependencies, versions, env vars, and scripts |
| **FRONTEND_GUIDELINES.md** | Design tokens, components, and accessibility |
| **BACKEND_STRUCTURE.md** | Schema, API contracts, auth, and validation |
| **IMPLEMENTATION_PLAN.md** | Ordered build steps with success criteria |

## Key Files

- **[documentation guide.md](documentation%20guide.md)** — Full guide with structure templates and sample AI prompts for generating each document.
- **[SUPER_PROMPT.md](SUPER_PROMPT.md)** — Single instruction set: when to use which doc, workflow, and hard rules. Use this (or inject it as context) when building with AI.

## Quick Start

1. **New project:** Run through the [documentation guide](documentation%20guide.md) once to generate or fill all six docs (use the guide's templates and sample prompts).
2. **Building:** Use [SUPER_PROMPT.md](SUPER_PROMPT.md) when working with an AI: load the relevant docs for your task and implement only what they specify.
3. Follow the doc read order and workflow in SUPER_PROMPT.md to keep builds consistent and on-spec.

## Meta prompts

**Generate all six documents (one-shot bootstrap):**

> Using the prompts-directory [documentation guide](documentation%20guide.md), generate all six documents for [app idea]. Output PRD first, then APP_FLOW, TECH_STACK, FRONTEND_GUIDELINES, BACKEND_STRUCTURE, IMPLEMENTATION_PLAN. Use the structure and sample prompts from the guide for each.
