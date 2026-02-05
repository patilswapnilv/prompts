# Implementation Plan — Todo App Example

**Template version:** 1.0  
**Example:** Minimal build sequence for the todo-app MVP.

## Overview
- **Project**: Todo App (examples/todo-app).
- **Approach**: Build in order; each step verifies success criteria. No work outside PRD §7 OUT OF SCOPE.

## Phase 1: Setup
### Step 1.1: Project scaffold
- Create HTML (or SPA entry), CSS, and JS (or framework) structure.
- **Success criteria**: Page loads; no console errors.  
- **Reference**: TECH_STACK.md.

## Phase 2: Data & list
### Step 2.1: Data layer
- Define task shape (id, title, completed, created_at).
- Implement read/write to localStorage (key per TECH_STACK / BACKEND_STRUCTURE).
- **Success criteria**: Can save and load array of tasks.  
- **Reference**: BACKEND_STRUCTURE.md §2.

### Step 2.2: Render list
- Render task list from data; show empty state when no tasks.
- **Success criteria**: List matches APP_FLOW §2 Flow 1.  
- **Reference**: APP_FLOW.md, FRONTEND_GUIDELINES.md §3.

## Phase 3: Core actions
### Step 3.1: Add task
- Add-task input + submit (Enter or button). Validate non-empty title; append task; persist; re-render.
- **Success criteria**: Matches PRD §6 “Add task” and APP_FLOW Flow 2.  
- **Reference**: PRD §6, APP_FLOW §2.

### Step 3.2: Complete / uncomplete
- Toggle `completed` on click (checkbox or row); persist; re-render with strikethrough/checked.
- **Success criteria**: Matches PRD §6 “Complete / uncomplete” and APP_FLOW Flow 3.  
- **Reference**: PRD §6, APP_FLOW §2.

### Step 3.3: Delete task
- Delete control per task; remove from data; persist; re-render.
- **Success criteria**: Matches PRD §6 “Delete task” and APP_FLOW Flow 4.  
- **Reference**: PRD §6, APP_FLOW §2.

## Phase 4: Polish
### Step 4.1: Accessibility and UX
- Keyboard support; focus management; labels/aria; error message for empty add.
- **Success criteria**: PRD §12 (a11y); FRONTEND_GUIDELINES §4.  
- **Reference**: FRONTEND_GUIDELINES.md §4.

## Definition of done (per step)
- Code matches the referenced doc sections.
- Success criteria for the step are checked.
- No OUT OF SCOPE work added (PRD §7).

## References
- PRD §7 OUT OF SCOPE. SUPER_PROMPT for workflow.
