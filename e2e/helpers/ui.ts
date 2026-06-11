// UI helpers: sign-in flow and admin navigation shared by the specs.
import { expect, type Locator, type Page } from "@playwright/test";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "./env";

/** Sign in through the navbar auth dialog as the maintenance admin. */
export async function signIn(page: Page): Promise<void> {
  await page.goto("/");
  await page.getByRole("button", { name: "Sign In", exact: true }).first().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByText("Sign In to PIXOPHARM")).toBeVisible();
  await dialog.getByLabel("Email").fill(ADMIN_EMAIL);
  await dialog.getByLabel("Password").fill(ADMIN_PASSWORD);
  await dialog.getByRole("button", { name: "Sign In", exact: true }).click();
  await expect(dialog).toBeHidden({ timeout: 20_000 });
  await expect(page.getByRole("button", { name: "My Journey" }).first()).toBeVisible({ timeout: 20_000 });
}

/** From the signed-in homepage, open Admin → Curriculum organizer. */
export async function gotoAdminCurriculum(page: Page): Promise<void> {
  await expect(page.getByRole("button", { name: "Admin", exact: true })).toBeVisible({ timeout: 20_000 });
  await page.getByRole("button", { name: "Admin", exact: true }).click();
  await expect(page.getByText("Admin Console")).toBeVisible({ timeout: 20_000 });
  await page.getByRole("button", { name: "Curriculum", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Curriculum Organizer" })).toBeVisible({ timeout: 30_000 });
  // Board is loaded once the Unsorted column renders.
  await expect(page.getByText("Unsorted", { exact: true }).first()).toBeVisible({ timeout: 30_000 });
}

/** Locator for a curriculum board column (domain column or "Unsorted"). */
export function curriculumColumn(page: Page, name: string): Locator {
  return page
    .locator("div.w-72")
    .filter({ has: page.locator("p", { hasText: name }) })
    .first();
}

/** Locator for a course card (left-accent bordered card) inside a column. */
export function courseCard(column: Locator, title: string): Locator {
  return column.locator("div.border-l-4").filter({ hasText: title }).first();
}

/** Expand a course card's module list if collapsed. */
export async function expandCourseModules(card: Locator): Promise<void> {
  const show = card.locator('button[title="Show modules"]');
  if (await show.count()) {
    await show.click();
  }
  await expect(card.locator('button[title="Hide modules"]')).toBeVisible();
}
