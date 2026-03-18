# Implementation Plan - Zephyr Cloud Deployment

## Summary

Deploy the existing Astro project to Zephyr Cloud using `zephyr-astro-integration`, push to public GitHub with deployment URLs, then transform the site into a feedback page documenting understanding and experiences with Zephyr Cloud.

## Proposed Changes

### Task 1: Install & Configure Zephyr Integration (~5 min)

- [ ] Install `zephyr-astro-integration` as a dev dependency
- [ ] Update `astro.config.mjs` to add `withZephyr()` to integrations array

#### [MODIFY] [astro.config.mjs](file:///home/nicolas/Desktop/nicolas/repos/zephyr-cloud-feedback/astro.config.mjs)

```js
import { defineConfig } from "astro/config";
import { withZephyr } from "zephyr-astro-integration";

export default defineConfig({
  integrations: [withZephyr()],
});
```

### Task 2: Authenticate & First Deploy (~5 min)

- [ ] Run `pnpm build` to trigger first build + Zephyr auth flow
- [ ] Complete browser-based login at `app.zephyr-cloud.io`
- [ ] Verify build succeeds and deployment URL is generated
- [ ] Note the deployment URL

> [!IMPORTANT]
> This step requires manual interaction — the first build opens a browser for authentication.

### Task 3: Git Commit & Push (~5 min)

- [ ] Update README.md with deployment URL and project description
- [ ] Commit all changes with a clear commit message
- [ ] Ensure the repo is public on GitHub

### Task 4: Build Feedback Page (~30 min)

Transform the Astro site into a polished feedback page. All text in English.

- [ ] Create new layout component for the feedback page
- [ ] Build feedback page content with sections:
  - About this project (what it is and why)
  - How Zephyr Cloud works (understanding section)
  - My deployment experience (feedback section)
  - Links to deployed app and GitHub repo
- [ ] Apply premium styling (following frontend-design skill guidelines)

#### [MODIFY] [Layout.astro](file:///home/nicolas/Desktop/nicolas/repos/zephyr-cloud-feedback/src/layouts/Layout.astro)

Update the layout with proper meta tags, fonts, and global styles.

#### [MODIFY] [index.astro](file:///home/nicolas/Desktop/nicolas/repos/zephyr-cloud-feedback/src/pages/index.astro)

Replace default Astro welcome page with feedback page content.

#### [DELETE] [Welcome.astro](file:///home/nicolas/Desktop/nicolas/repos/zephyr-cloud-feedback/src/components/Welcome.astro)

Remove the default Astro welcome component.

#### [NEW] New component files as needed for the feedback page sections

### Task 5: Final Deploy & Verify (~5 min)

- [x] Run `pnpm build` to deploy the feedback page to Zephyr Cloud
- [x] Verify the deployment URL serves the updated feedback page
- [x] Commit final changes and push
- [x] Test responsiveness and visual quality

## Verification Plan

### Manual Verification

1. **Build succeeds**: `pnpm build` completes without errors, shows Zephyr deployment URL
2. **Deployed URL works**: Visit the deployment URL — should display the site
3. **Visual quality**: Feedback page looks polished and professional
4. **Responsiveness**: Check at different viewport sizes
5. **Content in English**: All user-facing text in English
6. **GitHub repo**: Verify the repo is accessible at the public URL
