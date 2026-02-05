#!/usr/bin/env sh
# Validation script for prompts-directory six-doc system.
# Checks: (1) all six doc files exist, (2) PRD has §7 OUT OF SCOPE.
# Usage: ./scripts/validate.sh [path]
# Default path: repo root (parent of scripts/).

set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASE="${1:-$ROOT}"
FAILED=0

# Six required files
for f in PRD.md APP_FLOW.md TECH_STACK.md FRONTEND_GUIDELINES.md BACKEND_STRUCTURE.md IMPLEMENTATION_PLAN.md; do
  if [ ! -f "$BASE/$f" ]; then
    echo "Missing: $f"
    FAILED=1
  fi
done

# PRD must have section 7 and OUT OF SCOPE
if [ -f "$BASE/PRD.md" ]; then
  if ! grep -qE '^##\s+7\.' "$BASE/PRD.md"; then
    echo "PRD.md must contain section \"7. Explicitly OUT OF SCOPE\"."
    FAILED=1
  fi
  if ! grep -qi 'out of scope' "$BASE/PRD.md"; then
    echo "PRD.md must contain \"OUT OF SCOPE\" content."
    FAILED=1
  fi
fi

if [ $FAILED -eq 1 ]; then
  exit 1
fi
echo "Validation passed: six files present, PRD §7 OUT OF SCOPE present."
