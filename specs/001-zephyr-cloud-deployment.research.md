# Research: Zephyr Cloud Deployment for Astro

## 1. Package: `zephyr-astro-integration`

- **Latest version**: `0.1.16` (stable), also has `canary` and `next` channels
- **Minimum required**: `0.1.0+` per docs
- **Install**: `pnpm add --dev zephyr-astro-integration`
- **Config**: Add `withZephyr()` to Astro's `integrations` array in `astro.config.mjs`
- **SSG only**: Server-side rendering (SSR) and hybrid modes are NOT supported — only static output (Astro's default)
- **Source**: [Zephyr Astro Docs](https://docs.zephyr-cloud.io/meta-frameworks/astro)

### Configuration Example

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import { withZephyr } from "zephyr-astro-integration";

export default defineConfig({
  integrations: [withZephyr()],
});
```

## 2. How Zephyr Cloud Works

### Build & Deploy Flow

1. **Build**: Run `astro build` (or `npm run build`) — the Zephyr integration hooks into Vite's build process
2. **First build**: Opens a browser window for authentication via `app.zephyr-cloud.io` — credentials stored in `~/.zephyr`
3. **Asset processing**: Zephyr captures Git info, hashes assets, detects changes, uploads only new/modified assets (content-addressed storage)
4. **Immutable snapshot**: Creates an immutable deployment version with a permanent URL
5. **Edge deployment**: Assets are published to 200+ global edge locations

### Versioning

- Every build creates an **immutable version** (snapshot of all build artifacts + git context)
- Each version gets a **permanent URL** in the format: `https://{username}-{buildId}-{app-name}-{project}-{hash}.{edge-domain}`
- Build IDs are auto-incrementing per user (1, 2, 3...)
- Versions never expire — URLs are permanent and bookmarkable

### Tags & Environments

- **Tags**: Smart pointers that automatically serve the right version based on rules (e.g., branch name, commit info)
- **Tag URL format**: `https://t-{tagname}-{app-uid}-{hash}.{domain}`
- **Automatic tags**: Created on deploy (e.g., `web_main_yourname`)
- **Environments**: Production, staging, preview — with promotion workflows between them
- Custom domains can be mapped to environments

### Instant Rollbacks

- Any version can be restored instantly since all versions are immutable
- No rebuilds needed — just point a tag/environment to a different version

## 3. Authentication

- **Local development**: Browser-based login on first build → stored in `~/.zephyr`
- **CI/CD**: Use `ZE_SERVER_TOKEN` (org-level) or `ZE_SECRET_TOKEN` (personal) environment variables
- No re-login needed unless `~/.zephyr` is deleted

## 4. Codemod Alternative

- `pnpx with-zephyr` — auto-detects bundler (Astro/Vite) and configures Zephyr automatically
- Can be used instead of manual setup
- [NPM: with-zephyr](https://www.npmjs.com/package/with-zephyr)

## 5. Known Considerations

- **SSG only**: Astro SSR/hybrid modes not supported by Zephyr
- **Node.js**: Required `>=22.12.0` (already configured in our `package.json`)
- **Chrome extension**: Recommended for best DX — [Zephyr Mission Control](https://chromewebstore.google.com/detail/zephyr-mission-control/liflhldchhinbaeplljlplhnbkdidedn) — provides real-time deployment monitoring, environment switching, one-click rollbacks
- **Error codes**: Zephyr has an [Error Encyclopedia](https://docs.zephyr-cloud.io/errors) with documented build (ZE10xxx), deploy (ZE20xxx), and browser (ZE30xxx) errors

## 6. Examples & References

- **Official examples repo**: [ZephyrCloudIO/zephyr-examples](https://github.com/ZephyrCloudIO/zephyr-examples)
- **Astro Zephyr integration page**: [astro.build](https://astro.build) integration directory
- **Zephyr docs**: [docs.zephyr-cloud.io/meta-frameworks/astro](https://docs.zephyr-cloud.io/meta-frameworks/astro)

## 7. Alternatives Considered

| Approach                   | Pros                         | Cons                    |
| -------------------------- | ---------------------------- | ----------------------- |
| `zephyr-astro-integration` | Official, native Astro hooks | SSG only                |
| `vite-plugin-zephyr`       | Lower-level Vite plugin      | Not Astro-specific      |
| `npx with-zephyr` codemod  | Zero manual config           | Less control over setup |

**Chosen approach**: `zephyr-astro-integration` — it's the official, documented path for Astro projects.
