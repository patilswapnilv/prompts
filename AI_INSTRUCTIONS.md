# AI Instructions — Six-Doc System (Claude / ChatGPT / other tools)

This file summarizes the prompts-directory system for use with **any** AI (Claude, ChatGPT, etc.). Paste it (or the repo’s SUPER_PROMPT.md) into your project instructions or context so the AI follows the same workflow.

---

## The six documents

| Document | When to use |
|----------|--------------|
| **PRD.md** | Always first; defines scope and success. |
| **APP_FLOW.md** | Before any UI or navigation work. |
| **TECH_STACK.md** | Before setup or adding dependencies. |
| **FRONTEND_GUIDELINES.md** | Before implementing UI/components. |
| **BACKEND_STRUCTURE.md** | Before API or DB work. |
| **IMPLEMENTATION_PLAN.md** | Before each implementation step; follow step order. |

---

## Read order

1. **PRD** → **APP_FLOW** → **TECH_STACK** (in that order).
2. Then **FRONTEND_GUIDELINES** and **BACKEND_STRUCTURE** as needed for the task.
3. **IMPLEMENTATION_PLAN** last when building; follow its step order.

When context is limited, load by section—e.g. **PRD §5–7** (features and OUT OF SCOPE), **APP_FLOW §2** (core flows), **BACKEND_STRUCTURE §4** (API). Load PRD + APP_FLOW first.

---

## Rules

- **No scope beyond the PRD** — Respect "OUT OF SCOPE" (PRD §7). Do not add features that are listed there.
- No new routes/screens without APP_FLOW.
- No new dependencies without TECH_STACK.
- No UI that violates FRONTEND_GUIDELINES.
- No API or schema changes without BACKEND_STRUCTURE.
- If anything is ambiguous, ask; do not guess.

---

## Definition of done

A step is done when: (1) code matches the referenced doc sections, (2) the step’s success criteria are met, and (3) no OUT OF SCOPE work was added. When code and docs disagree, the docs win—update the docs or revert the code.

---

## Bootstrap (new project)

Generate or fill all six docs using the repo’s **documentation guide** (templates and sample prompts) **before** writing code. Order: PRD → APP_FLOW → TECH_STACK → FRONTEND_GUIDELINES → BACKEND_STRUCTURE → IMPLEMENTATION_PLAN.

For the full instruction set and section references, use **SUPER_PROMPT.md** from the prompts-directory repo.
