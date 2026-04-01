// Production debug panel — accessible via ?debug=<course-slug>
// Tests every step of the Supabase query pipeline and shows results on-screen.

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Step {
  name: string;
  status: "pending" | "running" | "ok" | "fail";
  detail?: string;
  data?: Record<string, unknown>;
  ms?: number;
}

export default function DebugPanel({ slug }: { slug: string }) {
  const [steps, setSteps] = useState<Step[]>([]);
  const [authInfo, setAuthInfo] = useState<string>("checking...");

  const update = (name: string, patch: Partial<Step>) => {
    setSteps((prev) =>
      prev.map((s) => (s.name === name ? { ...s, ...patch } : s))
    );
  };

  useEffect(() => {
    const run = async () => {
      // Auth check
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData?.session;
      setAuthInfo(
        session
          ? `Logged in as ${session.user.email} (id: ${session.user.id.slice(0, 8)}...)`
          : "Not logged in (anonymous / anon key)"
      );

      const initialSteps: Step[] = [
        { name: "1. Fetch course by slug", status: "pending" },
        { name: "2. Fetch modules", status: "pending" },
        { name: "3. Fetch lessons", status: "pending" },
        { name: "4. Fetch quiz_questions", status: "pending" },
        { name: "5. Transform to FullCourse", status: "pending" },
      ];
      setSteps(initialSteps);

      // Step 1: Fetch course
      update("1. Fetch course by slug", { status: "running" });
      let t0 = Date.now();
      const { data: course, error: cErr } = await supabase
        .from("courses")
        .select("*")
        .eq("slug", slug)
        .single();

      if (cErr) {
        setSteps((prev) =>
          prev.map((s) =>
            s.name === "1. Fetch course by slug"
              ? { ...s, status: "fail", detail: `${cErr.code}: ${cErr.message} | hint: ${cErr.hint ?? "none"} | details: ${cErr.details ?? "none"}`, ms: Date.now() - t0 }
              : { ...s, status: "fail", detail: "Blocked by step 1 failure" }
          )
        );
        return;
      }

      setSteps((prev) =>
        prev.map((s) =>
          s.name === "1. Fetch course by slug"
            ? { ...s, status: "ok", detail: `Found: "${course.title}" (id: ${course.id})`, data: { id: course.id, title: course.title, slug: course.slug, status: course.status }, ms: Date.now() - t0 }
            : s
        )
      );

      // Step 2: Fetch modules
      update("2. Fetch modules", { status: "running" });
      t0 = Date.now();
      const { data: modules, error: mErr } = await supabase
        .from("modules")
        .select("*")
        .eq("course_id", course.id)
        .order("order_index", { ascending: true });

      if (mErr) {
        setSteps((prev) =>
          prev.map((s) =>
            s.name === "2. Fetch modules"
              ? { ...s, status: "fail", detail: `${mErr.code}: ${mErr.message}`, ms: Date.now() - t0 }
              : s.status === "pending"
                ? { ...s, status: "fail", detail: "Blocked by step 2 failure" }
                : s
          )
        );
        return;
      }

      const moduleIds = (modules ?? []).map((m: any) => m.id);
      update("2. Fetch modules", {
        status: "ok",
        detail: `Found ${modules?.length ?? 0} modules (IDs: ${moduleIds.slice(0, 3).map((id: string) => id.slice(0, 8)).join(", ")}...)`,
        ms: Date.now() - t0,
      });

      // Step 3: Fetch lessons
      update("3. Fetch lessons", { status: "running" });
      t0 = Date.now();
      const { data: lessons, error: lErr } = moduleIds.length > 0
        ? await supabase
            .from("lessons")
            .select("id, module_id, title, order_index")
            .in("module_id", moduleIds)
            .order("order_index", { ascending: true })
        : { data: [], error: null };

      if (lErr) {
        update("3. Fetch lessons", {
          status: "fail",
          detail: `${lErr.code}: ${lErr.message}`,
          ms: Date.now() - t0,
        });
      } else {
        update("3. Fetch lessons", {
          status: "ok",
          detail: `Found ${lessons?.length ?? 0} lessons across ${moduleIds.length} modules`,
          ms: Date.now() - t0,
        });
      }

      // Step 4: Fetch quiz questions
      update("4. Fetch quiz_questions", { status: "running" });
      t0 = Date.now();
      const { data: quizQs, error: qErr } = moduleIds.length > 0
        ? await supabase
            .from("quiz_questions")
            .select("id, module_id, question_type")
            .in("module_id", moduleIds)
            .order("order_index", { ascending: true })
        : { data: [], error: null };

      if (qErr) {
        update("4. Fetch quiz_questions", {
          status: "fail",
          detail: `${qErr.code}: ${qErr.message}`,
          ms: Date.now() - t0,
        });
      } else {
        update("4. Fetch quiz_questions", {
          status: "ok",
          detail: `Found ${quizQs?.length ?? 0} quiz questions`,
          ms: Date.now() - t0,
        });
      }

      // Step 5: Transform
      update("5. Transform to FullCourse", { status: "running" });
      t0 = Date.now();
      try {
        const hasAllData = !lErr && !qErr && lessons && quizQs;
        if (hasAllData) {
          update("5. Transform to FullCourse", {
            status: "ok",
            detail: `Ready: ${modules?.length} modules, ${lessons.length} lessons, ${quizQs.length} quiz questions`,
            ms: Date.now() - t0,
          });
        } else {
          update("5. Transform to FullCourse", {
            status: "fail",
            detail: "Cannot transform — missing data from earlier steps",
            ms: Date.now() - t0,
          });
        }
      } catch (e) {
        update("5. Transform to FullCourse", {
          status: "fail",
          detail: `Transform error: ${e instanceof Error ? e.message : String(e)}`,
          ms: Date.now() - t0,
        });
      }
    };

    run();
  }, [slug]);

  const statusIcon = (s: Step["status"]) =>
    s === "ok" ? "✅" : s === "fail" ? "❌" : s === "running" ? "⏳" : "⬜";

  return (
    <div style={{ fontFamily: "monospace", padding: 32, maxWidth: 900, margin: "0 auto", background: "#0d1117", color: "#c9d1d9", minHeight: "100vh" }}>
      <h1 style={{ color: "#58a6ff", marginBottom: 8 }}>PIXOPHARM Debug Panel</h1>
      <p style={{ color: "#8b949e", marginBottom: 4 }}>Testing course slug: <strong style={{ color: "#f0883e" }}>{slug}</strong></p>
      <p style={{ color: "#8b949e", marginBottom: 4 }}>Supabase URL: {import.meta.env.VITE_SUPABASE_URL}</p>
      <p style={{ color: "#8b949e", marginBottom: 24 }}>Auth: <strong style={{ color: "#58a6ff" }}>{authInfo}</strong></p>

      <div style={{ border: "1px solid #30363d", borderRadius: 8, overflow: "hidden" }}>
        {steps.map((step) => (
          <div
            key={step.name}
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid #30363d",
              background: step.status === "fail" ? "#1c0f0f" : step.status === "ok" ? "#0f1c0f" : "transparent",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>
                {statusIcon(step.status)} <strong>{step.name}</strong>
              </span>
              {step.ms !== undefined && (
                <span style={{ color: "#8b949e", fontSize: 12 }}>{step.ms}ms</span>
              )}
            </div>
            {step.detail && (
              <div style={{ color: step.status === "fail" ? "#f85149" : "#7ee787", fontSize: 13, marginTop: 4, paddingLeft: 24, wordBreak: "break-all" }}>
                {step.detail}
              </div>
            )}
            {step.data && (
              <pre style={{ color: "#8b949e", fontSize: 11, marginTop: 4, paddingLeft: 24, overflow: "auto" }}>
                {JSON.stringify(step.data, null, 2)}
              </pre>
            )}
          </div>
        ))}
      </div>

      <p style={{ color: "#8b949e", marginTop: 24, fontSize: 12 }}>
        Remove ?debug= from URL to return to normal view.
      </p>
    </div>
  );
}
