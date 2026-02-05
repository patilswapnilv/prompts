# Super Prompt — How to Use This Repo

You are building an app using the **prompts-directory** system. This repo defines six documents that are the **single source of truth**. Do not invent features, flows, or tech choices that contradict them.

---

## 1. Document List and When to Use

| Document | When to use |
|----------|-------------|
| **PRD.md** | Always first; defines scope and success. |
| **APP_FLOW.md** | Before any UI or navigation work. |
| **TECH_STACK.md** | Before setup or adding dependencies. |
| **FRONTEND_GUIDELINES.md** | Before implementing UI/components. |
| **BACKEND_STRUCTURE.md** | Before API or DB work. |
| **IMPLEMENTATION_PLAN.md** | Before each implementation step; follow step order. |

---

## 2. Document Dependency and Read Order

Recommended order when loading context:

1. **PRD** → **APP_FLOW** → **TECH_STACK** (sequential).
2. **FRONTEND_GUIDELINES** and **BACKEND_STRUCTURE** (can be read in parallel).
3. **IMPLEMENTATION_PLAN** last when building (follow its step order).

**Context-window guidance:** When the full set is too large, load by section—e.g. PRD §5–7 (features and OUT OF SCOPE), APP_FLOW §2 for the current feature’s flows, BACKEND_STRUCTURE §4 for the current API, FRONTEND_GUIDELINES §2 and §4 for tokens and components. Load PRD + APP_FLOW first; then add TECH_STACK and the doc(s) relevant to the task; use IMPLEMENTATION_PLAN for the current step only.

---

## 3. Workflow

- **New projects:** Generate or fill all six docs using the [documentation guide](documentation%20guide.md) (templates and sample prompts) **before** writing code.
- **Existing docs:** Read the relevant doc(s)—or sections—for the current task, then implement **only** what is specified.
- **After implementation:** Confirm completion against the success criteria in IMPLEMENTATION_PLAN and PRD.

---

## 4. Hard Rules

- **No scope beyond PRD** — Respect "OUT OF SCOPE" (PRD is the single source of truth for scope).
- **No new routes/screens** without APP_FLOW.
- **No new dependencies** without TECH_STACK.
- **No UI** that violates FRONTEND_GUIDELINES.
- **No API or schema changes** without BACKEND_STRUCTURE.
- **If anything is ambiguous, ask; do not guess.**

---

## 5. Example Invocation

> I have [app idea]. Use the prompts-directory in this repo: first ensure all six docs exist and are filled from the guide; then implement following IMPLEMENTATION_PLAN.md step by step.

---

## 6. Pre-Implementation Checklist

Before writing code, confirm:

- [ ] PRD has no [TBD]; OUT OF SCOPE is explicit (PRD §7).
- [ ] APP_FLOW has all core flows for the current feature.
- [ ] TECH_STACK has exact versions and required env vars.
- [ ] BACKEND_STRUCTURE has all endpoints and schema for the current phase.
- [ ] IMPLEMENTATION_PLAN has the current step’s success criteria and references to the other docs.

---

## Cursor / IDE

When working in this project, follow SUPER_PROMPT.md and the six-document system. Load the relevant docs (or sections) for each task and do not deviate from their specifications.
