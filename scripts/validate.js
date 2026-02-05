#!/usr/bin/env node
/**
 * Validation script for prompts-directory six-doc system.
 * Checks: (1) all six doc files exist, (2) PRD has §7 OUT OF SCOPE.
 * Usage: node scripts/validate.js [path]
 * Default path: repo root (parent of scripts/).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(path.join(__dirname, '..'));
const SIX_FILES = [
  'PRD.md',
  'APP_FLOW.md',
  'TECH_STACK.md',
  'FRONTEND_GUIDELINES.md',
  'BACKEND_STRUCTURE.md',
  'IMPLEMENTATION_PLAN.md',
];

function main() {
  const basePath = process.argv[2] ? path.resolve(process.argv[2]) : ROOT;
  let failed = false;

  // 1. All six files exist
  for (const file of SIX_FILES) {
    const full = path.join(basePath, file);
    if (!fs.existsSync(full)) {
      console.error(`Missing: ${file}`);
      failed = true;
    }
  }

  // 2. PRD has §7 OUT OF SCOPE
  const prdPath = path.join(basePath, 'PRD.md');
  if (fs.existsSync(prdPath)) {
    const content = fs.readFileSync(prdPath, 'utf8');
    const hasSection7 = /^##\s+7\.\s+/m.test(content);
    const hasOutOfScope =
      /out\s+of\s+scope/i.test(content) &&
      (content.includes('§7') || content.includes('section 7') || hasSection7);
    if (!hasSection7 || !hasOutOfScope) {
      console.error(
        'PRD.md must contain section "7. Explicitly OUT OF SCOPE" (or §7) with out-of-scope content.'
      );
      failed = true;
    }
  }

  if (failed) {
    process.exit(1);
  }
  console.log('Validation passed: six files present, PRD §7 OUT OF SCOPE present.');
}

main();
