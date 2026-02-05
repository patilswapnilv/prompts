# Application Flow — Todo App Example

**Template version:** 1.0  
**Example:** Minimal flows for the todo-app MVP.

## 1. Entry Points
### Primary Entry Points
- **Direct URL**: User opens `/` or `index.html`; sees the main task list (or empty state).
- **Landing Page**: Same as main app; no separate marketing page in this example.

### Secondary Entry Points
- None (single-page example).

## 2. Core User Flows

### Flow 1: View task list
**Goal**: See all tasks.  
**Entry Point**: App load.  
**Frequency**: Every visit.

#### Happy Path
1. **Page: Main view**
   - Elements: Task list (or “No tasks yet”), Add-task input, Submit button.
   - User Action: None (page load).
   - Result: List shows existing tasks from storage, or empty state.

#### Edge Cases
- Empty list: Show “No tasks yet” and prompt to add one.
- Many tasks: List scrolls; order per PRD (e.g. newest first).

---

### Flow 2: Add a task
**Goal**: Add a new task by title.  
**Entry Point**: Main view.  
**Frequency**: Often.

#### Happy Path
1. **Page: Main view**
   - Elements: Text input (e.g. “What needs to be done?”), Add button or Enter.
   - User Action: Type title, press Enter or click Add.
   - Validation: Non-empty title (trimmed).
   - Trigger: Form submit or button click.

2. **System Action**: Create task (e.g. id, title, completed: false, created_at). Persist (e.g. localStorage).

3. **Page: Main view (updated)**
   - New task appears in list.
   - Input cleared.

#### Error States
- **Empty title**: Inline message “Enter a title”; do not add.
- **Very long title**: Optional max length; show error if exceeded.

---

### Flow 3: Complete / uncomplete a task
**Goal**: Toggle task completed state.  
**Entry Point**: Main view, from list row.  
**Frequency**: Often.

#### Happy Path
1. **Page: Main view**
   - Elements: Per task: title, checkbox or clickable row, delete control.
   - User Action: Click checkbox or row to toggle completed.
   - Trigger: Single click.

2. **System Action**: Update task.completed; persist.

3. **Page: Main view (updated)**
   - Task shows completed state (e.g. strikethrough, checked).

#### Edge Cases
- Double-click: Toggle once (idempotent).

---

### Flow 4: Delete a task
**Goal**: Remove a task.  
**Entry Point**: Main view, from list row.  
**Frequency**: Less often.

#### Happy Path
1. **Page: Main view**
   - Elements: Delete button or icon per task.
   - User Action: Click delete.
   - Trigger: Click.

2. **System Action**: Remove task from storage.

3. **Page: Main view (updated)**
   - Task no longer in list.

#### Edge Cases
- Optional: Confirm dialog for delete (per PRD/design choice).

## 3. Global States
- **Loading**: Optional; for this example, sync storage may make it unnecessary.
- **Empty**: No tasks → show empty state and add-task CTA.
- **Error**: Storage unavailable → show message (e.g. “Cannot save tasks”).

## 4. Navigation
- Single page; no routes. All flows happen on the same view.

## 5. References
- PRD §6 (Features), §7 (OUT OF SCOPE). TECH_STACK and FRONTEND_GUIDELINES for stack and UI rules.
