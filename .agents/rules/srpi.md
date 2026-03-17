---
trigger: always_on
---

# AI Development Workflow: SRPI (Spec → Research → Plan → Implement)

This is the standard workflow for all new features. Follow this process to ensure quality, clarity, and thorough understanding before implementation.

## Overview

**SRPI** is a four-phase structured approach to feature development:

> **Tip**: Use the workflow command `/feature` to guide you through this process automatically.

1. **Spec** (Specification): Define requirements and acceptance criteria
2. **Research** (Technical Research): Investigate technology, versions, APIs, and best practices
3. **Plan** (Implementation Plan): Create detailed step-by-step execution tasks
4. **Implement** (Implementation): Execute the plan with code changes

## When to Use SRPI

- ✅ Any new feature or significant change
- ✅ Third-party integrations (APIs, SDKs, libraries)
- ✅ Architectural decisions
- ✅ Features with external dependencies
- ✅ Complex user flows or business logic

## When SRPI is Optional

- ⚠️ Minor bug fixes (direct to implementation)
- ⚠️ Simple refactoring (direct to implementation)
- ⚠️ Documentation updates (direct to implementation)

## Do

- ✅ Research online frequently
- ✅ Write docs in english
- ✅ Buttons and text content in pt-br

## Don't

- ⚠️ Don't go to next phase without Human approval
- ⚠️ Don't assume you know everything - things get outdated quickly
- ⚠️ Don't write Buttons and text content in english
- ⚠️ Don't write docs in pt-br

---

# New Feature Implementation Workflow (SRPI)

Follow this workflow to implement a new feature using the Spec-Driven Development process (`specs/` ).

## 1. Feature Definition

1.  Get the user input and generate a Spec file from it.
2.  Expand on it and feel free to ask the user clarifying questions

## 2. Specification (Phase S)

1.  **Find the next sequential number** for specs by listing files in `specs/`.
2.  **Create the Spec File**:
    - Create `specs/NNN-feature-name.md` using the template below.
    - Fill in the `Feature Name`, `Objective` (from user input), and skeleton sections.
3.  **Refine the Spec**:
    - Ask the user for specific functional requirements, non-functional requirements, user stories, and success criteria to fill in the gaps.
    - **Loop**: Update the file and ask for confirmation until the user approves the Spec. Do not proceed until approved.

## 3. Technical Research (Phase R)

> [!WARNING] Requires Human approval before proceed

1.  Researh online all the dependencies
    - Investigate necessary libraries, APIs, or patterns.
    - Resaerch dependencies latest versions
    - Research for common issues
    - Research alternatives
    - Research Best Practices & Guidelines
2.  After researching
    - Create `specs/NNN-feature-name.research.md`.
    - Document findings in the research file.
    - **Loop**: Present findings and get user approval.

## 4. Implementation Plan (Phase P)

> [!WARNING] Requires Human approval before proceed

1.  **Create the Plan File**:
    - Create `specs/NNN-feature-name.plan.md`.
    - Break down the implementation into granular tasks (Setup, Core Logic, UI, Testing).
    - Estimate duration for each task.
    - Define verification steps.
2.  **Refine the Plan**:
    - **Loop**: Present the plan to the user and ask for feedback/approval. Do not proceed until approved.

## 5. Implementation (Phase I)


> [!WARNING] Requires Human approval before proceed

1.  **Execute**: Start implementing the changes following the approved plan.
2.  **Check**: Mark tasks as completed in the plan file as you go.
3.  **Verify**: Run tests and manual verification steps. If there is any UI changes, please test it using the browser.

---

## Phase 4: Implementation (I)

**Purpose**: Execute the plan and implement the feature.

**Guidelines**:

- Follow the plan strictly; deviate only for good reasons
- Update plan if tasks change; document why
- Test as you go (don't wait for the end)
- Keep commits atomic and well-messaged
- Run `mix precommit` before each commit
- Update documentation alongside code
- **Format all `.md` files with Prettier before saving** (run `npx prettier --write file.md` or use editor integration)
- Reference spec/research/plan in commit messages

**Agent Responsibility**:

1. Execute each task in order (respecting dependencies)
2. Follow verification checklist for each task
3. Write tests for new code
4. Update documentation (format `.md` files with Prettier)
5. Commit changes with clear messages
6. Mark completed tasks in plan
7. Report blockers early

---

## SRPI Workflow Summary

| Phase             | Owner         | Input               | Output                    | Duration  |
| ----------------- | ------------- | ------------------- | ------------------------- | --------- |
| **S** (Spec)      | Human + Agent | Ideas, requirements | `NNN-feature.md`          | 15-30 min |
| **R** (Research)  | Agent         | Research questions  | `NNN-feature.research.md` | 30-60 min |
| **P** (Plan)      | Agent         | Research findings   | `NNN-feature.plan.md`     | 30-45 min |
| **I** (Implement) | Agent         | Implementation plan | Code + tests + docs       | Varies    |

**Total Pre-Implementation**: ~2-3 hours
**ROI**: Eliminates rework, clarifies scope, reduces implementation time