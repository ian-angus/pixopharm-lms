// ============================================================================
// Playwright config — Pixopharm LMS Phase 5 E2E suite.
//
// SAFETY: these tests run against the PRODUCTION Supabase database.
// Every test-created entity is prefixed "ZZ E2E " and removed in cleanup.
//
// Scripts:
//   pnpm test:e2e     — full suite EXCEPT @ai-tagged tests (default)
//   pnpm test:e2e:ai  — only the @ai tests (cost real Claude API money)
// ============================================================================

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  // Single worker: tests share one admin account and one production DB.
  workers: 1,
  fullyParallel: false,
  retries: 0,
  // DB-driven pages can be slow; AI tests raise this themselves.
  timeout: 120_000,
  expect: { timeout: 15_000 },
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:5199",
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "pnpm dev --port 5199",
    url: "http://localhost:5199",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
