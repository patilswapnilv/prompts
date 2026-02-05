# Cursor Rule — Prompts-Directory Six-Doc System

**Copy this into your project’s `.cursor/rules` (e.g. as `prompts-directory.mdc`) or use as a project rule so Cursor follows the six-doc workflow.**

---

When working in this project, follow the **prompts-directory** six-document system:

1. **Source of truth**: The six docs (PRD, APP_FLOW, TECH_STACK, FRONTEND_GUIDELINES, BACKEND_STRUCTURE, IMPLEMENTATION_PLAN) are the contract. Do not add features, routes, dependencies, or UI that contradict them.

2. **Load order**: For each task, load the relevant docs (or sections). Prefer: **PRD + APP_FLOW first**, then TECH_STACK and the doc(s) for the current work (e.g. FRONTEND_GUIDELINES for UI, BACKEND_STRUCTURE for API/DB). Use **IMPLEMENTATION_PLAN** for the current step only when building.

3. **Section references**: When context is limited, load by section—e.g. PRD §5–7 (personas, features, OUT OF SCOPE), APP_FLOW §2 (core flows), BACKEND_STRUCTURE §4 (API).

4. **Hard rules**:
   - No scope beyond the PRD; respect **PRD §7 OUT OF SCOPE**.
   - No new routes/screens without APP_FLOW; no new dependencies without TECH_STACK; no UI that breaks FRONTEND_GUIDELINES; no API/schema changes without BACKEND_STRUCTURE.
   - If something is missing or ambiguous in the docs, ask; do not guess.

5. **Definition of done**: A step is done when the code matches the referenced doc sections, success criteria for that step are met, and no OUT OF SCOPE work was added.

Use **SUPER_PROMPT.md** (from the prompts-directory repo or this project) for the full instruction set and doc list.
