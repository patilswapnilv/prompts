# Todo App — Example Six-Doc Set

This folder is a **minimal, complete example** of the prompts-directory six-doc system for a single-page todo app (MVP). Use it to see how all six documents look when filled for a real (but small) product.

## Documents

| Document | Purpose in this example |
|----------|-------------------------|
| **PRD.md** | Scope, P0 features, and explicit OUT OF SCOPE (no auth, no backend). |
| **APP_FLOW.md** | Four flows: view list, add task, complete/uncomplete, delete. |
| **TECH_STACK.md** | Client-only stack (e.g. React or vanilla JS + localStorage). |
| **FRONTEND_GUIDELINES.md** | Minimal tokens and components. |
| **BACKEND_STRUCTURE.md** | Data shape and localStorage; no server. |
| **IMPLEMENTATION_PLAN.md** | Ordered steps with success criteria. |

## How to use

1. **Learn the system**: Read PRD → APP_FLOW → TECH_STACK, then the rest.
2. **Bootstrap your own app**: Copy this folder, rename the app, and edit each doc to match your product.
3. **Build from docs**: Use SUPER_PROMPT and implement following IMPLEMENTATION_PLAN.md step by step.

## Relation to repo root

The templates and full guide live in the repo root: [documentation guide](../../documentation%20guide.md), [SUPER_PROMPT.md](../../SUPER_PROMPT.md). This example is a concrete instance of those templates.
