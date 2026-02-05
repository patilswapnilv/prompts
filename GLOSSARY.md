# Glossary

Short definitions for contributors and AI context when working with the prompts-directory system.

---

## Six-doc system

The **six-doc system** is the set of six canonical documents that form the project’s single source of truth:

1. **PRD.md** — Product Requirements Document  
2. **APP_FLOW.md** — Application flow and navigation  
3. **TECH_STACK.md** — Dependencies, versions, env, scripts  
4. **FRONTEND_GUIDELINES.md** — Design tokens, components, accessibility  
5. **BACKEND_STRUCTURE.md** — Schema, API contracts, auth, validation  
6. **IMPLEMENTATION_PLAN.md** — Ordered build steps and success criteria  

Code and AI should follow these docs; nothing is added that contradicts them. See [SUPER_PROMPT.md](SUPER_PROMPT.md) and the [documentation guide](documentation%20guide.md).

---

## PRD

**Product Requirements Document.** Defines what to build, for whom, success criteria, and—critically—what is **explicitly out of scope**. The PRD is the authority for scope; other docs reference it (e.g. “per PRD §7”) rather than redefining scope.

---

## APP_FLOW

**Application flow documentation.** Describes every page, user path, decision point, and error state. Used before any UI or navigation work so AI and devs don’t invent flows.

---

## OUT OF SCOPE

Things the product **will not** build in the current version. Stored only in the PRD, in **§7. Explicitly OUT OF SCOPE**. Other docs and IMPLEMENTATION_PLAN reference “PRD §7” to avoid scope creep. AI and implementers must not add features that fall under OUT OF SCOPE.

---

## P0 / P1 / P2

**Priority levels** used in the PRD for features:

- **P0 (Must-have)**: Required for MVP; ship without these and the product isn’t valid.
- **P1 (Should-have)**: Important but not blocking launch.
- **P2 (Nice-to-have)**: Future improvements; explicitly not in current scope.

---

## § (section reference)

Notation for pointing to a specific section in a doc, e.g. **PRD §7** = “Section 7 of the PRD” (OUT OF SCOPE), **APP_FLOW §2** = “Section 2 of APP_FLOW” (core flows). Used in SUPER_PROMPT and the guide so AI can load only the needed sections when context is limited.

---

## SUPER_PROMPT

The single instruction set ([SUPER_PROMPT.md](SUPER_PROMPT.md)) that tells AI when to use which doc, in what order, and the hard rules (no scope beyond PRD, no new routes without APP_FLOW, etc.). Give it to the AI as context when building from the six docs.
