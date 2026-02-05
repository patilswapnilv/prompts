# Changelog

When the doc system or templates change, we add a short note here so humans and AI can adapt. Format: version / date, then “What changed” and “How to migrate” (if needed).

---

## [Unreleased]

(Add items here before a release.)

---

## 1.0 — 2025-02-05

**What changed**

- Initial six-doc system: PRD, APP_FLOW, TECH_STACK, FRONTEND_GUIDELINES, BACKEND_STRUCTURE, IMPLEMENTATION_PLAN.
- Documentation guide with structure templates and sample AI prompts for each doc.
- SUPER_PROMPT: doc list, read order, hard rules, section references (§).
- PRD §7 “Explicitly OUT OF SCOPE” is required; other docs reference it.
- Added: CONTRIBUTING.md, GLOSSARY.md, CURSOR_RULE.md, AI_INSTRUCTIONS.md, validation script, examples/todo-app, PR template, IDEAS.md.

**How to migrate**

- N/A (first version). If you fork: ensure your PRD has a section “7. Explicitly OUT OF SCOPE” and run `node scripts/validate.js` (or `./scripts/validate.sh`) to confirm.

---

*When you change the doc system (e.g. new required sections, renumbered sections), add a “What changed” and “How to migrate” note above so AI and contributors can update their workflows.*
