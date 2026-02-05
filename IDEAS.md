# Ideas to Improve Prompts Directory

Suggestions to make this repo more useful, discoverable, and contributor-friendly on GitHub and beyond.

---

## ✅ Implemented (as of 2025-02-05)

- **Quick-start in README** — 30-second snippet with six filenames + meta-prompt; link to example.
- **Example project** — `examples/todo-app/` with all six docs filled for a minimal todo MVP.
- **Glossary** — `GLOSSARY.md` with PRD, APP_FLOW, OUT OF SCOPE, P0/P1/P2, six-doc system, §.
- **Validation script** — `scripts/validate.js` and `scripts/validate.sh` (six files + PRD §7 OUT OF SCOPE).
- **CONTRIBUTING.md** — How to suggest improvements; link to IDEAS.md; validation and PR template.
- **Cursor rule snippet** — `CURSOR_RULE.md` for copy-paste into `.cursor/rules`.
- **AI_INSTRUCTIONS.md** — Summary for Claude / ChatGPT and other non-Cursor AI tools.
- **CHANGELOG.md** — Version notes and “What changed / How to migrate” for AI and humans.
- **PR template** — `.github/PULL_REQUEST_TEMPLATE.md` (which docs changed, PRD §7 check, validation).
- **GitHub description & topics** — `GITHUB_SETUP.md` with suggested repo description and 5–7 topics.
- **OUT OF SCOPE checklist** — In documentation guide: checklist for PRD §7 before finalizing.
- **Definition of done** — In README §5 and in IMPLEMENTATION_PLAN / SUPER_PROMPT context; “docs win” note.
- **Versioned doc templates** — Guide and CHANGELOG reference v1.0; CHANGELOG tracks changes.

---

## Documentation & onboarding

- **Quick-start in README** — ✅ Done.
- **Example project** — ✅ Done (`examples/todo-app/`).
- **Versioned doc templates** — ✅ Done (CHANGELOG.md + version in guide).
- **Glossary** — ✅ Done (`GLOSSARY.md`).

---

## Tooling & automation

- **Validation script** — ✅ Done (`scripts/validate.js`, `scripts/validate.sh`). Run in CI or pre-commit.
- **Schema / frontmatter** — Optional YAML frontmatter in each doc (e.g. `version: 1.0`, `app: my-app`) for tooling and future automation.
- **Link checker** — Ensure cross-references (e.g. “PRD §7”, “BACKEND_STRUCTURE §4”) stay valid as sections are renamed or reordered.
- **“Generate from PRD” helper** — A single prompt or script that, given a PRD, suggests section headings for APP_FLOW, TECH_STACK, etc., to speed up bootstrapping.

---

## Community & GitHub

- **CONTRIBUTING.md** — ✅ Done.
- **Good first issues** — Label issues like “Add example for [stack]” or “Translate templates to [language]” to attract contributors.
- **Topics & description** — ✅ Done (`GITHUB_SETUP.md` with suggested description and topics).
- **Discussions** — Use GitHub Discussions for “How did you use this?” and “Show your six docs” so the repo becomes a place for patterns and examples.
- **Awesome list** — A short “Projects built with prompts-directory” or “Similar approaches” section in README or a separate `AWESOME.md`.

---

## AI & editor integration

- **Cursor Rules snippet** — ✅ Done (`CURSOR_RULE.md`).
- **Claude / ChatGPT project instructions** — ✅ Done (`AI_INSTRUCTIONS.md`).
- **Section references** — Already in SUPER_PROMPT and the guide (PRD §6, APP_FLOW §2, etc.).
- **Changelog for AI** — ✅ Done (`CHANGELOG.md` with “What changed / How to migrate”).

---

## Content & templates

- **OUT OF SCOPE checklist** — ✅ Done (in documentation guide, “Checklist for PRD §7 OUT OF SCOPE”).
- **More stacks** — Extend the documentation guide with optional one-pagers or prompts for other stacks (e.g. WordPress/PHP, Django, Laravel) while keeping the six-doc model.
- **i18n** — Translation-friendly templates or a note that key terms (PRD, APP_FLOW, OUT OF SCOPE) should stay in English for AI compatibility, with translations for explanations.
- **Accessibility & performance** — Explicit sections in FRONTEND_GUIDELINES and IMPLEMENTATION_PLAN templates for a11y and perf success criteria (e.g. WCAG 2.1 AA, LCP).

---

## Verification & quality

- **Definition of done** — ✅ Done (README §5, IMPLEMENTATION_PLAN, SUPER_PROMPT).
- **PR template** — ✅ Done (`.github/PULL_REQUEST_TEMPLATE.md`).
- **Docs vs code parity** — ✅ Done (README §5 “When code and docs disagree, the docs win”).

---

## Quick wins to do first

1. ~~Add the **short GitHub description** (from README) to the repo About and 5–7 **topics**.~~ → See `GITHUB_SETUP.md`.
2. ~~Add **CONTRIBUTING.md** with “how to suggest improvements” and link to IDEAS.md.~~ ✅ Done.
3. ~~Add one **example** (even a minimal PRD + APP_FLOW) in an `examples/` folder.~~ ✅ Done (`examples/todo-app/`).
4. ~~Add a **Cursor rule snippet** in README or a dedicated file for copy-paste.~~ ✅ Done (`CURSOR_RULE.md`).
5. ~~Add **validation** (e.g. “six files exist, PRD has §7”) as a script or GitHub Action.~~ ✅ Done (`scripts/validate.js`, `scripts/validate.sh`).

---

*If you use one of these ideas, consider opening a PR or an issue to share it back.*
