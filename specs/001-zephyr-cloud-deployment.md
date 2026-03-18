# Feature Specification: Zephyr Cloud Deployment

## Feature Name

Zephyr Cloud Deployment

## Objective

Deploy the existing Astro project to Zephyr Cloud using Zephyr's default Cloud integration, as part of a technical assignment. The goal is to experience the Zephyr product firsthand, document understanding and feedback, and share a public GitHub repository with deployed application URLs.

## User Story

As a developer evaluating Zephyr Cloud, I want to deploy my Astro project to Zephyr Cloud so that I can experience the deployment workflow, understand how the platform works, and provide informed feedback.

## Functional Requirements

- **FR1**: Integrate Zephyr Cloud into the existing Astro project using the official `zephyr-astro-integration` package ([Astro docs](https://docs.zephyr-cloud.io/meta-frameworks/astro))
- **FR2**: Authenticate with Zephyr Cloud (login via browser on first build)
- **FR3**: Successfully deploy the application to Zephyr Cloud's default edge network
- **FR4**: Obtain a public preview URL for the deployed application
- **FR5**: Use this very Astro project as the feedback page — transform it into a static page that documents understanding of how Zephyr works and provides feedback on the process
- **FR6**: Ensure the GitHub repository is public and contains all work

## Non-Functional Requirements

- Deployment should use Zephyr's **default Cloud integration** (no custom cloud provider config)
- The project must be in **static site generation (SSG)** mode (Zephyr's Astro integration only supports SSG)
- Module Federation integration is **optional** (may be explored as a bonus)

## Success Criteria

- [x] Astro project builds successfully with `zephyr-astro-integration`
- [x] Application is deployed to Zephyr Cloud with a working public URL
- [x] The Astro site itself serves as the feedback document (understanding + feedback)
- [x] GitHub repository is public with all the work
- [x] Deployed application URL is accessible and functional

## Notes

- Zephyr has official Astro support via `zephyr-astro-integration` (v0.1.0+) — see [docs](https://docs.zephyr-cloud.io/meta-frameworks/astro)
- Configuration: `integrations: [withZephyr()]` in `astro.config.mjs`
- The `npx with-zephyr` codemod can also auto-detect Astro and configure it
- First build will trigger a browser-based login to Zephyr Cloud
- Only SSG mode is supported (which is Astro's default)
- Module Federation is optional and may be explored if time permits
