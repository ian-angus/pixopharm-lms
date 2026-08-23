import { chromium } from "@playwright/test";
import fs from "fs";
const env = Object.fromEntries(fs.readFileSync(".env.local","utf8").trim().split("\n").map(l=>l.split("=")));
const SHOTS = "/private/tmp/claude-501/-Users-ianthomson-Projects-pixopharm/319378bc-3cd3-43a1-ba66-b733053f8e57/scratchpad";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, baseURL: "http://localhost:5173" });
page.on("pageerror", (e) => console.log("PAGEERR", String(e).slice(0,120)));

// 1. Gate: unauthenticated /admin shows login
await page.goto("/admin/intake-forms");
await page.waitForSelector("text=Pixopharm Consulting Admin", { timeout: 20000 });
console.log("GATE: login form shown");
await page.fill("#adm-email", env.E2E_ADMIN_EMAIL);
await page.fill("#adm-password", env.E2E_ADMIN_PASSWORD);
await page.click('button[type="submit"]');
await page.waitForSelector("text=Intake Form", { timeout: 30000 });
console.log("GATE: signed in, intake builder reached");
await page.waitForTimeout(2500);
await page.screenshot({ path: `${SHOTS}/admin-intake-builder.png` });

// 2. Edit a question label and save
const body = await page.locator("body").innerText();
console.log("BUILDER shows template:", body.includes("Pharmacist Consultation Intake Form"));
// find first question label input — builder structure unknown; look for inputs with existing question text
const labelInput = page.locator('input').filter({ hasNot: page.locator('[type="date"]') }).first();
console.log("has Save button:", await page.getByRole("button", { name: /save/i }).count());
await browser.close();
