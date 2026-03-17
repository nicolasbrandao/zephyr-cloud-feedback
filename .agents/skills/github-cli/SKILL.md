---
name: github-cli
description: Instructions for using the GitHub CLI (gh) to manage Pull Requests, Issues and other resources directly from the terminal
---

# GitHub CLI Instructions

GitHub CLI (`gh`) is a powerful tool to manage your GitHub workflow from the command line. Use it to create, manage, and view Pull Requests and Issues without leaving the terminal.

## Core Philosophy
- **Prefer the CLI**: Whenever possible, use `gh` commands instead of switching to the browser.
- **Automation**: Use `gh` in scripts or compound commands to automate workflows.

## Pull Requests

### Creating a Pull Request
Create a PR for the current branch. Always provide a meaningful title and body.
**IMPORTANT:** Always assign the PR to yourself using `--assignee "@me"`.

```bash
gh pr create --title "feat: Add new user profile component" --body "Description of the changes..." --assignee "@me"
```
*Tip: If you omit title/body, it will open an interactive editor, which might be tricky in headless environments. Prefer passing flags.*

### Listing Pull Requests
See open PRs to understand the current state of work.
```bash
gh pr list
```

### Viewing PR Details
Read the description and comments of a PR.
```bash
gh pr view <pr_number>
```

### CI/CD Checks
Check if the build is passing.
```bash
gh pr checks <pr_number>
```
*Use `--watch` to wait for checks to complete.*

### Merging
Merge a PR when approved.
```bash
gh pr merge <pr_number> --squash --delete-branch
```

## Issues

### Creating Issues
Quickly log bugs or features.
```bash
gh issue create --title "bug: Login fails on mobile" --body "Steps to reproduce..."
```

### Listing Issues
```bash
gh issue list
```

## Repositories

### Cloning
```bash
gh repo clone <owner>/<repo>
```

### Viewing
```bash
gh repo view
```

## Authentication
If the agent encounters authentication errors:
```bash
gh auth login
```
*Note: The environment should typically be pre-authenticated.*
