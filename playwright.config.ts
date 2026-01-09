import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { open: 'never' }]], // Important: 'never' opens
  use: {
    trace: 'on-first-retry', // Saves space! Only saves traces when tests fail.
  },
});