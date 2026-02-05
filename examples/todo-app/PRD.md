# Product Requirements Document (PRD) — Todo App Example

**Template version:** 1.0 (documentation guide v1.0)  
**Example:** Minimal MVP for the prompts-directory repo.

## 1. Product Overview
- **Project Title**: Todo App (MVP)
- **Version**: 1.0
- **Last Updated**: 2025-02-05
- **Owner**: Example

## 2. Problem Statement
Users need a simple way to track personal tasks in one place without sign-up or complex features.

## 3. Goals & Objectives
### Business Goals
- Validate the six-doc system with a minimal, realistic example.

### User Goals
- Add, complete, and delete tasks quickly.
- See all tasks in one list.

## 4. Success Metrics
- User can add a task in under 10 seconds.
- User can mark a task done with one action.

## 5. Target Users & Personas
### Primary Persona: Individual task-tracker
- **Goals**: Quick capture, minimal friction.
- **Technical Proficiency**: Basic (browser user).

## 6. Features & Requirements
### Must-Have Features (P0)
1. **Task list**
   - Description: Single list of tasks.
   - User Story: As a user, I want to see all my tasks in one list so that I know what to do.
   - Acceptance Criteria:
     - [ ] List shows title and completion state.
     - [ ] List is ordered by creation (newest first or configurable).
   - Success Metric: List renders and updates when tasks change.

2. **Add task**
   - Description: Add a new task by title.
   - User Story: As a user, I want to add a task by typing its title so that I can capture it quickly.
   - Acceptance Criteria:
     - [ ] Input + submit (button or Enter).
     - [ ] New task appears in the list.
   - Success Metric: Task is persisted and visible.

3. **Complete / uncomplete task**
   - Description: Toggle a task as done or not done.
   - User Story: As a user, I want to mark a task done (or undo that) so that I can track progress.
   - Acceptance Criteria:
     - [ ] One action (e.g. click) toggles completed state.
     - [ ] Visual distinction for completed (e.g. strikethrough).
   - Success Metric: State persists across refresh.

4. **Delete task**
   - Description: Remove a task from the list.
   - User Story: As a user, I want to delete a task so that I can remove mistakes or completed items.
   - Acceptance Criteria:
     - [ ] Delete control per task.
     - [ ] Task removed from list and storage.
   - Success Metric: Deleted task no longer appears.

### Should-Have Features (P1)
- None for MVP.

### Nice-to-Have Features (P2)
- Edit task title inline.
- Due date (optional).

## 7. Explicitly OUT OF SCOPE
- User accounts, login, or multi-device sync.
- Categories, tags, or folders.
- Reordering (drag-and-drop or manual order).
- Sharing or collaboration.
- Mobile native app; web only for this example.
- Backend (this example can be client-only with localStorage).

## 8. User Scenarios
### Scenario: Add and complete a task
- **Context**: User opens the app.
- **Steps**: 1) Type "Buy milk", submit. 2) See "Buy milk" in list. 3) Click to mark done. 4) See it strikethrough.
- **Expected Outcome**: Task is completed and state persists.
- **Edge Cases**: Empty title → validation message; duplicate titles allowed.

## 9. Dependencies & Constraints
- **Technical**: Browser with localStorage; no backend required for this example.
- **Business**: Example only; no SLA.

## 10. Timeline & Milestones
- **MVP**: Example complete when all P0 features work in one flow.

## 11. Risks & Assumptions
- **Assumption**: Single-user, single-browser is acceptable for the example.

## 12. Non-Functional Requirements
- **Performance**: List should render without noticeable delay for up to 500 tasks.
- **Accessibility**: Keyboard usable; labels for inputs and buttons.

## 13. References & Resources
- prompts-directory [documentation guide](../documentation%20guide.md) and [SUPER_PROMPT](../SUPER_PROMPT.md).
