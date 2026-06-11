// ============================================================================
// Spec 5 — Quiz player: seed a published ZZ E2E course with one question of
// each of the 8 types (+ case vignette linked to the scenario question),
// answer every type correctly through the UI, assert instant feedback +
// explanation after each submit, the numeric tolerance edge, the case
// vignette panel, and the recorded final score. Full cleanup.
// ============================================================================

import { expect, test, type Page } from "@playwright/test";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  adminClient,
  cleanupAllE2EEntities,
  seedCourse,
  seedLesson,
  seedModule,
  seedQuizCase,
  seedQuizQuestion,
} from "./helpers/db";
import { signIn } from "./helpers/ui";

const ts = Date.now();
const COURSE_TITLE = `ZZ E2E Quiz Course ${ts}`;
// FIXED slug (not timestamped): course_progress rows cannot be deleted under
// RLS, so re-using one slug means the suite only ever touches a single row
// (blanked on cleanup) instead of accumulating one per run.
const COURSE_SLUG = "zz-e2e-quiz-player";
const MODULE_TITLE = `ZZ E2E Quiz Module ${ts}`;
const LESSON_TITLE = `ZZ E2E Quiz Lesson ${ts}`;
const CASE_TITLE = `ZZ E2E Case ${ts}`;
const CASE_VIGNETTE = `ZZ E2E vignette: Mrs Baptiste, 64, presents with stable hypertension. Run ${ts}.`;

const EXPL = (k: string) => `ZZ E2E explanation ${k} ${ts}.`;

const ORDER_ITEMS = ["ZZ Order Alpha", "ZZ Order Bravo", "ZZ Order Charlie"];
const MATCH_PAIRS = [
  { left: "ZZ Left Amox", right: "ZZ Right Antibiotic" },
  { left: "ZZ Left Metf", right: "ZZ Right Antidiabetic" },
  { left: "ZZ Left Lisi", right: "ZZ Right Antihypertensive" },
];

let db: SupabaseClient;
let moduleId: string;
let userId: string;

test.beforeAll(async () => {
  db = await adminClient();
  await cleanupAllE2EEntities(db);
  userId = (await db.auth.getUser()).data.user!.id;

  const course = await seedCourse(db, { title: COURSE_TITLE, slug: COURSE_SLUG, status: "published" });
  const mod = await seedModule(db, course.id, MODULE_TITLE);
  moduleId = mod.id;
  await seedLesson(db, moduleId, LESSON_TITLE, [{ type: "paragraph", text: "ZZ E2E lesson body." }]);
  const quizCase = await seedQuizCase(db, moduleId, CASE_TITLE, CASE_VIGNETTE);

  await seedQuizQuestion(db, moduleId, {
    question: `ZZ E2E Q-MC pick the right option (${ts}).`,
    question_type: "multiple_choice",
    options: ["ZZ Wrong one", "ZZ Correct choice", "ZZ Wrong two", "ZZ Wrong three"],
    correct_answer: 1,
    question_data: {},
    explanation: EXPL("MC"),
    order_index: 1,
  });
  await seedQuizQuestion(db, moduleId, {
    question: `ZZ E2E Q-MS select both Pick options (${ts}).`,
    question_type: "multiple_select",
    options: ["ZZ Pick me first", "ZZ Skip me first", "ZZ Pick me second", "ZZ Skip me second"],
    question_data: { correct_indices: [0, 2] },
    explanation: EXPL("MS"),
    order_index: 2,
  });
  await seedQuizQuestion(db, moduleId, {
    question: `ZZ E2E Q-ORD arrange Alpha, Bravo, Charlie (${ts}).`,
    question_type: "ordering",
    options: ORDER_ITEMS,
    question_data: { correct_order: [0, 1, 2] },
    explanation: EXPL("ORD"),
    order_index: 3,
  });
  await seedQuizQuestion(db, moduleId, {
    question: `ZZ E2E Q-MATCH match each drug to its class (${ts}).`,
    question_type: "matching",
    options: [],
    question_data: { pairs: MATCH_PAIRS },
    explanation: EXPL("MATCH"),
    order_index: 4,
  });
  await seedQuizQuestion(db, moduleId, {
    question: `ZZ E2E Q-FIB the island is ___ today (${ts}).`,
    question_type: "fill_in_blank",
    options: [],
    question_data: { acceptable_answers: ["zanzibar", "Zanzibar Island"], case_sensitive: false },
    explanation: EXPL("FIB"),
    order_index: 5,
  });
  await seedQuizQuestion(db, moduleId, {
    question: `ZZ E2E Q-TF this statement is true (${ts}).`,
    question_type: "true_false",
    options: [],
    question_data: { correct_answer: true },
    explanation: EXPL("TF"),
    order_index: 6,
  });
  await seedQuizQuestion(db, moduleId, {
    question: `ZZ E2E Q-SCEN given the case, pick the right option (${ts}).`,
    question_type: "scenario",
    options: ["ZZ Scen wrong A", "ZZ Scen wrong B", "ZZ Scen correct", "ZZ Scen wrong C"],
    correct_answer: 2,
    question_data: {},
    explanation: EXPL("SCEN"),
    order_index: 7,
    case_id: quizCase.id,
  });
  await seedQuizQuestion(db, moduleId, {
    question: `ZZ E2E Q-NUM how many mL (${ts})?`,
    question_type: "numeric",
    options: [],
    question_data: { answer: 4.5, tolerance: 0.5, unit: "mL" },
    explanation: EXPL("NUM"),
    order_index: 8,
  });
});

test.afterAll(async () => {
  if (!db) return; // beforeAll failed before the client existed
  try {
    await cleanupAllE2EEntities(db);
  } finally {
    await db.auth.signOut();
  }
});

// ── Per-type answer drivers (each answers the CURRENT question correctly) ───

async function answerMultipleChoice(page: Page): Promise<void> {
  await page.getByRole("button").filter({ hasText: "ZZ Correct choice" }).first().click();
}

async function answerMultipleSelect(page: Page): Promise<void> {
  await page.getByRole("button").filter({ hasText: "ZZ Pick me first" }).first().click();
  await page.getByRole("button").filter({ hasText: "ZZ Pick me second" }).first().click();
}

async function answerOrdering(page: Page): Promise<void> {
  const rows = () => page.locator("div.border-2").filter({ has: page.locator("span.flex-1") });
  const readOrder = async () => {
    const texts = await rows().locator("span.flex-1").allTextContents();
    return texts.map((t) => t.trim());
  };
  // Bubble each item into place with the ▲ button (first button in each row).
  for (let pass = 0; pass < 25; pass++) {
    const displayed = await readOrder();
    let mismatch = -1;
    for (let i = 0; i < ORDER_ITEMS.length; i++) {
      if (displayed[i] !== ORDER_ITEMS[i]) {
        mismatch = i;
        break;
      }
    }
    if (mismatch === -1) return;
    const row = rows().filter({ hasText: ORDER_ITEMS[mismatch] }).first();
    await row.locator("button").first().click(); // move up one position
  }
  throw new Error("ordering solver did not converge");
}

async function answerMatching(page: Page): Promise<void> {
  // Native <select> per pair, rendered in pair order.
  for (let i = 0; i < MATCH_PAIRS.length; i++) {
    await page.locator("select").nth(i).selectOption({ label: MATCH_PAIRS[i].right });
  }
}

async function answerFillInBlank(page: Page): Promise<void> {
  await page.getByPlaceholder("Type your answer...").fill("zanzibar");
}

async function answerTrueFalse(page: Page): Promise<void> {
  await page.getByRole("button", { name: "TRUE" }).click();
}

async function answerScenario(page: Page): Promise<void> {
  // The case vignette panel must be visible for the linked scenario question.
  await expect(page.getByText(CASE_TITLE)).toBeVisible();
  await expect(page.getByText(CASE_VIGNETTE)).toBeVisible();
  await page.getByRole("button").filter({ hasText: "ZZ Scen correct" }).first().click();
}

async function answerNumeric(page: Page): Promise<void> {
  // Tolerance edge: stored answer 4.5 ± 0.5 — submit 5, exactly answer+tolerance.
  await page.getByPlaceholder("Enter your answer...").fill("5");
  await expect(page.getByText("mL", { exact: true })).toBeVisible();
}

test("all 8 quiz types are answerable with instant feedback and a recorded score", async ({ page }) => {
  test.setTimeout(240_000);
  await signIn(page);

  // Open the seeded course directly via the CoursePlayer preview backdoor.
  await page.goto(`/?preview=${COURSE_SLUG}`);
  await expect(page.getByRole("heading", { level: 1, name: COURSE_TITLE })).toBeVisible({ timeout: 30_000 });

  // Sidebar lesson → lesson page → "Take Module Quiz →"
  await page.getByRole("button", { name: new RegExp("ZZ E2E Quiz Lesson") }).first().click();
  await expect(page.getByText(/Lesson 1 of 1/)).toBeVisible({ timeout: 30_000 });
  await page.getByRole("button", { name: "Take Module Quiz →" }).click();
  await expect(page.getByText("Question 1 of 8")).toBeVisible({ timeout: 30_000 });

  const explanations: Record<string, string> = {
    "Q-MC": EXPL("MC"),
    "Q-MS": EXPL("MS"),
    "Q-ORD": EXPL("ORD"),
    "Q-MATCH": EXPL("MATCH"),
    "Q-FIB": EXPL("FIB"),
    "Q-TF": EXPL("TF"),
    "Q-SCEN": EXPL("SCEN"),
    "Q-NUM": EXPL("NUM"),
  };

  for (let i = 0; i < 8; i++) {
    await expect(page.getByText(`Question ${i + 1} of 8`)).toBeVisible({ timeout: 20_000 });
    const questionText = (await page.locator("h3").filter({ hasText: "ZZ E2E Q-" }).first().textContent()) ?? "";
    const marker = Object.keys(explanations).find((k) => questionText.includes(k));
    expect(marker, `unrecognised question: ${questionText}`).toBeTruthy();

    switch (marker) {
      case "Q-MC":
        await answerMultipleChoice(page);
        break;
      case "Q-MS":
        await answerMultipleSelect(page);
        break;
      case "Q-ORD":
        await answerOrdering(page);
        break;
      case "Q-MATCH":
        await answerMatching(page);
        break;
      case "Q-FIB":
        await answerFillInBlank(page);
        break;
      case "Q-TF":
        await answerTrueFalse(page);
        break;
      case "Q-SCEN":
        await answerScenario(page);
        break;
      case "Q-NUM":
        await answerNumeric(page);
        break;
    }

    // Instant feedback + explanation after every submit.
    await page.getByRole("button", { name: "Submit Answer" }).click();
    await expect(page.getByText("✓ Correct!")).toBeVisible({ timeout: 15_000 });
    await expect(page.getByText(explanations[marker!])).toBeVisible();

    await page.getByRole("button", { name: i < 7 ? "Next Question →" : "Finish Quiz" }).click();
  }

  // ── Final score screen ───────────────────────────────────────────────────
  await expect(page.getByText("Congratulations!")).toBeVisible({ timeout: 20_000 });
  await expect(page.getByText(/You scored/)).toContainText("8/8");

  // ── Score recorded in course_progress ────────────────────────────────────
  await expect
    .poll(
      async () => {
        const { data } = await db
          .from("course_progress")
          .select("quiz_scores")
          .eq("user_id", userId)
          .eq("course_id", COURSE_SLUG)
          .maybeSingle();
        const scores = (data?.quiz_scores ?? {}) as Record<string, { score: number; total: number }>;
        return scores[moduleId] ? `${scores[moduleId].score}/${scores[moduleId].total}` : "missing";
      },
      { timeout: 20_000 }
    )
    .toBe("8/8");
});
