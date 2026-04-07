// ============================================================================
// PIXOPHARM LMS — Course Metadata Sync
// Syncs the restructured course catalog (courses.ts) to Supabase.
// - Updates existing courses (same slug) with new title, description, level, order
// - Inserts new courses that don't exist yet
// - Does NOT delete courses (to preserve student enrollment history)
// Run: SUPABASE_SECRET_KEY=sb_secret_... npx tsx scripts/sync-course-metadata.ts
// ============================================================================

const SUPABASE_URL = process.env.SUPABASE_URL ?? "https://hqyewiroiswmhfghkzhz.supabase.co";
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY;

if (!SUPABASE_SECRET_KEY) {
  console.error("Error: SUPABASE_SECRET_KEY environment variable is required");
  console.error("Usage: SUPABASE_SECRET_KEY=sb_secret_... npx tsx scripts/sync-course-metadata.ts");
  process.exit(1);
}

const headers = {
  apikey: SUPABASE_SECRET_KEY,
  Authorization: `Bearer ${SUPABASE_SECRET_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

async function supabaseGet(table: string, params = "") {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, { headers });
  if (!res.ok) throw new Error(`GET ${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function supabaseUpsert(table: string, rows: any[]) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: { ...headers, Prefer: "return=minimal,resolution=merge-duplicates" },
    body: JSON.stringify(rows),
  });
  if (!res.ok) throw new Error(`UPSERT ${table}: ${res.status} ${await res.text()}`);
}

async function supabasePatch(table: string, filter: string, data: any) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${filter}`, {
    method: "PATCH",
    headers: { ...headers, Prefer: "return=minimal" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`PATCH ${table}: ${res.status} ${await res.text()}`);
}

// Import the course catalog
import { courses } from "../src/data/courses";

async function main() {
  console.log("=== PIXOPHARM Course Metadata Sync ===\n");
  console.log(`Syncing ${courses.length} courses to Supabase...\n`);

  // 1. Fetch existing courses from Supabase
  const existing: any[] = await supabaseGet("courses", "select=id,slug,title,skill_level,order");
  const existingBySlug = new Map<string, any>();
  for (const c of existing) {
    existingBySlug.set(c.slug, c);
  }
  console.log(`Found ${existing.length} existing courses in Supabase`);

  let updated = 0;
  let inserted = 0;
  let skipped = 0;

  for (const course of courses) {
    const existing = existingBySlug.get(course.slug);

    const payload = {
      // For new courses, use the string ID as slug (Supabase will generate UUID)
      slug: course.slug,
      title: course.title,
      description: course.description,
      skill_level: course.skillLevel,
      duration_weeks: course.durationWeeks,
      icon: course.icon,
      color: course.color,
      prerequisites: course.prerequisites,
      what_youll_learn: course.whatYoullLearn,
      order: course.order,
      status: "published",
      updated_at: new Date().toISOString(),
    };

    if (existing) {
      // Update existing course
      await supabasePatch("courses", `slug=eq.${course.slug}`, payload);
      console.log(`  ✓ Updated: ${course.title} (${course.skillLevel}, order=${course.order})`);
      updated++;
    } else {
      // Insert new course
      await supabaseUpsert("courses", [{ ...payload, created_at: new Date().toISOString() }]);
      console.log(`  + Inserted: ${course.title} (${course.skillLevel}, order=${course.order})`);
      inserted++;
    }
  }

  // Mark old courses not in new catalog as archived
  const newSlugs = new Set(courses.map((c) => c.slug));
  const toArchive = existing.filter((c) => !newSlugs.has(c.slug));

  if (toArchive.length > 0) {
    console.log(`\nArchiving ${toArchive.length} course(s) no longer in catalog:`);
    for (const c of toArchive) {
      await supabasePatch("courses", `slug=eq.${c.slug}`, { status: "archived", updated_at: new Date().toISOString() });
      console.log(`  🗂  Archived: ${c.title} (slug: ${c.slug})`);
    }
  }

  console.log(`\n✅ Sync complete: ${updated} updated, ${inserted} inserted, ${toArchive.length} archived`);

  // 2. For each new course, create placeholder modules in Supabase if they don't exist
  console.log("\n=== Syncing Module Titles ===\n");

  // Re-fetch all courses now (includes newly inserted)
  const allCourses: any[] = await supabaseGet("courses", "select=id,slug&order=order");
  const courseSlugToId = new Map<string, string>();
  for (const c of allCourses) {
    courseSlugToId.set(c.slug, c.id);
  }

  // Fetch existing modules
  const allModules: any[] = await supabaseGet("modules", "select=id,course_id,order_index,title&order=course_id,order_index");
  const moduleKey = (courseId: string, orderIndex: number) => `${courseId}:${orderIndex}`;
  const existingModules = new Map<string, any>();
  for (const m of allModules) {
    existingModules.set(moduleKey(m.course_id, m.order_index), m);
  }

  let modulesUpdated = 0;
  let modulesInserted = 0;

  for (const course of courses) {
    const courseId = courseSlugToId.get(course.slug);
    if (!courseId) {
      console.warn(`  SKIP modules: no Supabase ID for slug "${course.slug}"`);
      continue;
    }

    for (let i = 0; i < course.modules.length; i++) {
      const moduleTitle = course.modules[i];
      const orderIndex = i + 1;
      const key = moduleKey(courseId, orderIndex);
      const existing = existingModules.get(key);

      if (existing) {
        // Update title if changed
        if (existing.title !== moduleTitle) {
          await supabasePatch("modules", `id=eq.${existing.id}`, {
            title: moduleTitle,
            updated_at: new Date().toISOString(),
          });
          console.log(`  ✓ Updated module: ${moduleTitle}`);
          modulesUpdated++;
        }
      } else {
        // Insert placeholder module (no lessons yet)
        await supabaseUpsert("modules", [{
          course_id: courseId,
          title: moduleTitle,
          description: `Module ${orderIndex}: ${moduleTitle}`,
          order_index: orderIndex,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }]);
        console.log(`  + Inserted module: ${moduleTitle}`);
        modulesInserted++;
      }
    }
  }

  console.log(`\n✅ Module sync complete: ${modulesUpdated} updated, ${modulesInserted} inserted`);
  console.log("\n=== All done! ===");
}

main().catch((err) => {
  console.error("\n❌ Sync failed:", err.message);
  process.exit(1);
});
