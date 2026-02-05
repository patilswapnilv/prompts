# Contributing to Prompts Directory

Thanks for your interest in improving this repo. Here’s how you can contribute.

## How to Suggest Improvements

- **Ideas and roadmap:** See **[IDEAS.md](IDEAS.md)** for a list of improvements (documentation, tooling, GitHub setup, AI integration). Pick something and open an issue or PR.
- **Template changes:** Propose edits to the documentation guide, SUPER_PROMPT, or the six-doc templates via a pull request. Keep the six-doc model; suggest new sections or refinements.
- **New examples:** Add a complete or minimal example under `examples/` (e.g. another app with all six docs) and open a PR.
- **Tooling:** Validation, link checkers, or “generate from PRD” helpers are welcome—see IDEAS.md for the validation and automation ideas.

## Before You Submit

- Run the validation script so the six-doc checks still pass:
  ```bash
  node scripts/validate.js
  ```
  (Or `./scripts/validate.sh` if you prefer the shell version.)
- If your change touches the doc system (templates, SUPER_PROMPT, section numbering), add a short note to **CHANGELOG.md** so others and AI can adapt.

## Pull Requests

- Use the [PR template](.github/PULL_REQUEST_TEMPLATE.md): state which of the six docs your change affects and confirm it respects PRD §7 OUT OF SCOPE where relevant.
- Keep PRs focused; prefer several small PRs over one large one.

## Questions or Discussions

- Open a [GitHub Issue](https://github.com/YOUR_ORG/prompts-directory/issues) for bugs, ideas, or questions.
- Use [GitHub Discussions](https://github.com/YOUR_ORG/prompts-directory/discussions) for “How did you use this?” or “Show your six docs” style sharing.

---

*For the full list of possible improvements, see [IDEAS.md](IDEAS.md).*
