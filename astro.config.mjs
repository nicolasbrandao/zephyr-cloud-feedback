// @ts-check
import { defineConfig } from 'astro/config';
import { withZephyr } from "zephyr-astro-integration";

// https://astro.build/config
export default defineConfig({
  integrations: [withZephyr()],
});
