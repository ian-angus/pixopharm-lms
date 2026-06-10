// ============================================================================
// PIXOPHARM LMS — Student Journey Page (Phase 3)
// Renders the approved "Your Learning Journey" design (curriculum-student-view
// .html prototype) from live Supabase data: domain stages in order_index order,
// each stage's published courses in per-domain order, real stats chips, and
// the Clinical Therapeutics electives as a separate optional track.
// ============================================================================

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { fetchDomains, type Domain } from "@/lib/admin-api";

interface JourneyCourse {
  id: string;
  title: string;
  slug: string;
  domain_id: string | null;
  order: number;
  moduleCount: number;
  lessonCount: number;
}

const TEAL = "hsl(174,62%,32%)";
const TEAL_DARK = "hsl(174,62%,26%)";
const GOLD = "#b8893a";

function isElectiveDomain(d: Domain): boolean {
  return d.name.toLowerCase().includes("elective");
}

export default function JourneyPage({
  onExit,
  onStartCourse,
}: {
  onExit: () => void;
  onStartCourse: (courseSlug: string) => void;
}) {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [courses, setCourses] = useState<JourneyCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [doms, coursesRes, modulesRes, lessonsRes] = await Promise.all([
          fetchDomains(),
          supabase
            .from("courses")
            .select("id,title,slug,domain_id,order,status")
            .eq("status", "published"),
          supabase.from("modules").select("id,course_id"),
          supabase.from("lessons").select("id,module_id"),
        ]);
        if (coursesRes.error) throw new Error(coursesRes.error.message);
        if (modulesRes.error) throw new Error(modulesRes.error.message);
        if (lessonsRes.error) throw new Error(lessonsRes.error.message);

        // module id -> course id, then lesson counts per course
        const moduleCourse = new Map<string, string>();
        const moduleCounts = new Map<string, number>();
        (modulesRes.data ?? []).forEach((m) => {
          moduleCourse.set(m.id, m.course_id);
          moduleCounts.set(m.course_id, (moduleCounts.get(m.course_id) ?? 0) + 1);
        });
        const lessonCounts = new Map<string, number>();
        (lessonsRes.data ?? []).forEach((l) => {
          const courseId = moduleCourse.get(l.module_id);
          if (courseId) lessonCounts.set(courseId, (lessonCounts.get(courseId) ?? 0) + 1);
        });

        if (cancelled) return;
        setDomains(doms);
        setCourses(
          (coursesRes.data ?? []).map((c) => ({
            id: c.id,
            title: c.title,
            slug: c.slug,
            domain_id: c.domain_id,
            order: c.order ?? 0,
            moduleCount: moduleCounts.get(c.id) ?? 0,
            lessonCount: lessonCounts.get(c.id) ?? 0,
          }))
        );
        setLoading(false);
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const { coreStages, electives, stats } = useMemo(() => {
    const byDomain = new Map<string, JourneyCourse[]>();
    courses.forEach((c) => {
      if (!c.domain_id) return;
      const arr = byDomain.get(c.domain_id) ?? [];
      arr.push(c);
      byDomain.set(c.domain_id, arr);
    });
    byDomain.forEach((arr) => arr.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title)));

    const ordered = [...domains].sort((a, b) => a.order_index - b.order_index);
    const coreStages = ordered
      .filter((d) => !isElectiveDomain(d))
      .map((d) => ({ domain: d, courses: byDomain.get(d.id) ?? [] }))
      .filter((s) => s.courses.length > 0);
    const electives = ordered
      .filter(isElectiveDomain)
      .map((d) => ({ domain: d, courses: byDomain.get(d.id) ?? [] }))
      .filter((s) => s.courses.length > 0);

    const coreCourses = coreStages.flatMap((s) => s.courses);
    const totalModules = coreCourses.reduce((a, c) => a + c.moduleCount, 0);
    const totalLessons = coreCourses.reduce((a, c) => a + c.lessonCount, 0);
    const hours = Math.max(1, Math.round((totalLessons * 15) / 60));
    const stats: [string | number, string][] = [
      [coreStages.length, "Stages"],
      [coreCourses.length, "Courses"],
      [totalModules, "Modules"],
      [totalLessons, "Lessons"],
      [`~${hours}h`, "of content"],
    ];
    return { coreStages, electives, stats };
  }, [domains, courses]);

  return (
    <div
      className="min-h-screen bg-[#f4f1e8] pb-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 85% -5%, rgba(13,139,126,.10), transparent 45%), radial-gradient(circle at 5% 10%, rgba(192,122,44,.07), transparent 40%)",
      }}
    >
      {/* Top bar */}
      <div className="h-14 bg-white/80 backdrop-blur-sm border-b border-[#e0d9c8] flex items-center px-4 gap-3 sticky top-0 z-20">
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-[hsl(174,62%,32%)] transition-colors"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to PIXOPHARM
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-5 relative">
        {/* Hero */}
        <div className="text-center pt-14 pb-6">
          <span
            className="inline-flex items-center gap-2 text-[11.5px] font-extrabold tracking-[0.14em] uppercase rounded-full px-3.5 py-1.5"
            style={{ color: TEAL_DARK, background: "rgba(13,139,126,.10)" }}
          >
            ⚗ Pixopharm Academy
          </span>
          <h1 className="mt-4 mb-2 text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-[hsl(213,50%,16%)]">
            Your path to becoming a<br />
            <em className="not-italic" style={{ color: TEAL_DARK }}>
              Caribbean Pharmacy Technician
            </em>
          </h1>
          <p className="text-[#4a564f] max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            One comprehensive programme, mapped step by step. Follow it in order — each stage builds on the last.
          </p>

          {/* Stats chips */}
          {!loading && !error && (
            <div className="flex flex-wrap gap-3 justify-center mt-7">
              {stats.map(([n, k]) => (
                <div
                  key={k}
                  className="bg-[#fffdf8] border border-[#e0d9c8] rounded-2xl px-4 py-2.5 text-center min-w-[92px] shadow-sm"
                >
                  <div className="text-2xl font-bold text-[hsl(213,50%,16%)] leading-none tabular-nums">{n}</div>
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-wider text-[#4a564f] mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {k}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {loading && (
          <p className="text-center text-slate-500 py-16" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Loading your journey...
          </p>
        )}
        {error && (
          <div className="text-center py-16">
            <p className="text-red-600 font-medium mb-2">Could not load the curriculum</p>
            <p className="text-slate-500 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Start flag */}
            <div className="text-center mt-6 mb-3">
              <span
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-white px-5 py-2.5 rounded-full shadow-lg"
                style={{ background: `linear-gradient(140deg, ${TEAL}, ${TEAL_DARK})` }}
              >
                ▶ Start here
              </span>
            </div>

            {/* Journey timeline */}
            <div className="relative pl-12 mt-2">
              <div
                className="absolute left-[19px] top-4 bottom-8 w-[3px] rounded"
                style={{ background: `linear-gradient(${TEAL}, ${GOLD})` }}
              />
              {coreStages.map(({ domain, courses: stageCourses }, i) => {
                const mods = stageCourses.reduce((a, c) => a + c.moduleCount, 0);
                const les = stageCourses.reduce((a, c) => a + c.lessonCount, 0);
                return (
                  <div key={domain.id} className="relative mb-7">
                    {/* Stage node */}
                    <div
                      className="absolute -left-12 top-0.5 w-10 h-10 rounded-xl grid place-items-center text-lg text-white shadow-md border-[3px] border-[#f4f1e8]"
                      style={{ background: domain.color ?? TEAL }}
                    >
                      {domain.icon ?? "📘"}
                      <span className="absolute -right-1.5 -bottom-1.5 w-5 h-5 rounded-full bg-[hsl(213,50%,16%)] text-white text-[11px] font-extrabold grid place-items-center border-2 border-[#f4f1e8]">
                        {i + 1}
                      </span>
                    </div>
                    {/* Stage panel */}
                    <div className="bg-[#fffdf8] border border-[#e0d9c8] rounded-2xl shadow-sm overflow-hidden">
                      <div className="px-4 py-3.5 flex items-center gap-3 border-b border-[#e0d9c8]">
                        <h2 className="flex-1 text-lg font-bold tracking-tight text-[hsl(213,50%,16%)]">{domain.name}</h2>
                        <span
                          className="text-[11.5px] font-bold text-[#4a564f] whitespace-nowrap tabular-nums"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {stageCourses.length} course{stageCourses.length !== 1 ? "s" : ""} · {mods} modules · {les} lessons
                        </span>
                      </div>
                      <ul>
                        {stageCourses.map((c, ci) => {
                          const comingSoon = c.lessonCount === 0;
                          return (
                            <li key={c.id} className="border-b border-[#f0ece0] last:border-b-0">
                              <button
                                onClick={() => !comingSoon && onStartCourse(c.slug)}
                                disabled={comingSoon}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                                  comingSoon ? "cursor-default" : "hover:bg-[hsl(174,45%,96%)]"
                                }`}
                              >
                                <span className="w-6 h-6 rounded-md bg-[#f4f1e8] text-[#4a564f] text-[11px] font-extrabold grid place-items-center shrink-0 tabular-nums">
                                  {ci + 1}
                                </span>
                                <span
                                  className={`flex-1 min-w-0 text-sm font-semibold ${comingSoon ? "text-[#4a564f]" : "text-[hsl(213,50%,16%)]"}`}
                                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                  {c.title}
                                </span>
                                {comingSoon && (
                                  <span className="text-[9px] font-extrabold uppercase tracking-wide text-[#c07a2c] bg-[#c07a2c]/[0.13] px-1.5 py-0.5 rounded shrink-0">
                                    Coming soon
                                  </span>
                                )}
                                <span
                                  className="text-[11.5px] font-bold text-[#4a564f] whitespace-nowrap tabular-nums shrink-0"
                                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                  {c.moduleCount} mod{c.lessonCount > 0 ? ` · ${c.lessonCount} L` : ""}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Finish: diploma */}
            <div className="relative pl-12 mt-1">
              <div
                className="absolute left-0 top-0.5 w-10 h-10 rounded-xl grid place-items-center text-lg text-white shadow-md border-[3px] border-[#f4f1e8]"
                style={{ background: `linear-gradient(140deg, ${GOLD}, #9a6f28)` }}
              >
                🎓
                <span className="absolute -right-1.5 -bottom-1.5 w-5 h-5 rounded-full bg-[hsl(213,50%,16%)] text-white text-[11px] font-extrabold grid place-items-center border-2 border-[#f4f1e8]">
                  ★
                </span>
              </div>
              <div
                className="rounded-2xl shadow-sm overflow-hidden border"
                style={{ borderColor: GOLD, background: "linear-gradient(180deg, #fff8ea, #fffdf8)" }}
              >
                <div className="px-4 py-3.5 border-b border-[#e0d9c8]">
                  <h2 className="text-lg font-bold tracking-tight text-[#7a5615]">Diploma Awarded</h2>
                </div>
                <p className="text-[13px] text-[#4a564f] px-4 py-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Complete every stage and the capstone to earn your Caribbean Pharmacy Technician Diploma — and sit the
                  certification exam with confidence.
                </p>
              </div>
            </div>

            {/* Optional electives */}
            {electives.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-center text-[hsl(213,50%,16%)] mb-1">Optional Electives</h2>
                <p
                  className="text-center text-[#4a564f] text-[13px] mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Specialist, Caribbean-focused clinical topics you can take alongside your diploma.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {electives.flatMap(({ domain, courses: electiveCourses }) =>
                    electiveCourses.map((c) => {
                      const comingSoon = c.lessonCount === 0;
                      return (
                        <button
                          key={c.id}
                          onClick={() => !comingSoon && onStartCourse(c.slug)}
                          disabled={comingSoon}
                          className={`text-left bg-[#fffdf8] border border-[#e0d9c8] rounded-2xl p-4 shadow-sm transition-shadow ${
                            comingSoon ? "cursor-default opacity-80" : "hover:shadow-md"
                          }`}
                          style={{ borderTop: `4px solid ${domain.color ?? "#a8497e"}` }}
                        >
                          <h3 className="text-sm font-bold leading-snug text-[hsl(213,50%,16%)]">{c.title}</h3>
                          <div
                            className="text-[11.5px] font-bold text-[#4a564f] mt-2 tabular-nums"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {c.moduleCount} modules · {c.lessonCount} lessons
                            {comingSoon && <span className="ml-2 text-[#c07a2c] uppercase text-[9px]">Coming soon</span>}
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            <footer
              className="text-center text-[#9a9384] text-xs mt-12"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Pixopharm Academy · Caribbean Pharmacy Technician Diploma
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
