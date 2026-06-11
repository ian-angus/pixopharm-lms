// Loads VITE_SUPABASE_* credentials from .env / .env.local (no dotenv dep).
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

function parseEnvFile(path: string): Record<string, string> {
  if (!existsSync(path)) return {};
  const out: Record<string, string> = {};
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    out[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return out;
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const env = { ...parseEnvFile(resolve(root, ".env")), ...parseEnvFile(resolve(root, ".env.local")) };

export const SUPABASE_URL = env.VITE_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = env.VITE_SUPABASE_PUBLISHABLE_KEY ?? "";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Missing VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY in .env/.env.local");
}

// Admin test account (role=admin) used for UI sign-in and DB setup/cleanup.
// Set E2E_ADMIN_EMAIL / E2E_ADMIN_PASSWORD in the environment or .env.local
// (gitignored) — never hardcode credentials in source control.
export const ADMIN_EMAIL = process.env.E2E_ADMIN_EMAIL ?? env.E2E_ADMIN_EMAIL ?? "";
export const ADMIN_PASSWORD = process.env.E2E_ADMIN_PASSWORD ?? env.E2E_ADMIN_PASSWORD ?? "";

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  throw new Error("Missing E2E_ADMIN_EMAIL / E2E_ADMIN_PASSWORD (set them in .env.local)");
}
