# Backend Structure — Todo App Example

**Template version:** 1.0  
**Example:** No backend for this MVP (see PRD §7 OUT OF SCOPE).

## 1. Architecture Overview
- **Data persistence**: Client-only. localStorage key e.g. `todo-app-tasks`.
- **Format**: JSON array of `{ id, title, completed, created_at }`.

## 2. Data Model (client storage)
- **id**: string (e.g. UUID or `crypto.randomUUID()`).
- **title**: string, required, trimmed.
- **completed**: boolean, default false.
- **created_at**: ISO date string (optional).

## 3. API
- None. All operations are in-memory + localStorage read/write.

## 4. Validation
- **Add**: title non-empty after trim; optional max length.
- **Toggle**: id must exist.
- **Delete**: id must exist.

## 5. References
- PRD §7 OUT OF SCOPE. TECH_STACK §3. When adding a real backend, expand this doc per the main BACKEND_STRUCTURE template.
