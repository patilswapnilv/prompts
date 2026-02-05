# Frontend Guidelines — Todo App Example

**Template version:** 1.0  
**Example:** Minimal tokens and components for the todo-app.

## 1. Design Principles
- Clarity: One primary action per row (toggle, delete).
- Consistency: Same pattern for every task row.
- Accessibility: Keyboard operable; visible focus; labels.

## 2. Design Tokens (minimal)
- **Primary action**: e.g. blue (#2563eb).
- **Text**: Dark gray (#111827); muted for secondary.
- **Success**: Green for completed (#10b981).
- **Destructive**: Red for delete (#ef4444).

## 3. Components
- **Task list**: List of task rows; empty state when no tasks.
- **Task row**: Checkbox (or clickable area), title, delete button. Completed: strikethrough + checked.
- **Add task**: Text input + button (or Enter). Placeholder: “What needs to be done?”

## 4. Accessibility
- Labels for input and buttons (or aria-label).
- Focus order: Add input → list (tab through tasks) → delete buttons.
- No reliance on color alone (e.g. strikethrough + state for completed).

## 5. References
- PRD §12 (Non-Functional: a11y). APP_FLOW for flows.
