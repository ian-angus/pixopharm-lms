import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
} from "remotion";

// ── Reusable Components ─────────────────────────────────────────────────────

const Highlight: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
}> = ({ x, y, width, height, color = "rgba(16, 185, 129, 0.4)" }) => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame * 0.15) * 0.15 + 0.85;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        border: `3px solid ${color}`,
        borderRadius: 8,
        boxShadow: `0 0 ${20 * pulse}px ${color}`,
        opacity: pulse,
        pointerEvents: "none",
      }}
    />
  );
};

const Callout: React.FC<{
  text: string;
  x: number;
  y: number;
  align?: "left" | "right" | "center";
  maxWidth?: number;
}> = ({ text, x, y, align = "left", maxWidth = 350 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ fps, frame, config: { damping: 15, mass: 0.5 } });
  const opacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${scale})`,
        transformOrigin: align === "right" ? "top right" : "top left",
        opacity,
        maxWidth,
        background: "rgba(15, 23, 42, 0.92)",
        color: "white",
        padding: "10px 16px",
        borderRadius: 8,
        fontSize: 18,
        fontFamily: "'DM Sans', system-ui, sans-serif",
        fontWeight: 500,
        lineHeight: 1.4,
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        borderLeft: "3px solid #10b981",
      }}
    >
      {text}
    </div>
  );
};

const TitleSlide: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleScale = spring({ fps, frame, config: { damping: 12 } });
  const subtitleOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #0f2439 50%, #1a3352 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          transform: `scale(${titleScale})`,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 12,
            background: "#10b981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          P
        </div>
        <h1
          style={{
            color: "white",
            fontSize: 48,
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 22,
            margin: 0,
            opacity: subtitleOpacity,
          }}
        >
          {subtitle}
        </p>
      </div>
    </AbsoluteFill>
  );
};

const ScreenshotSlide: React.FC<{
  src: string;
  highlights?: Array<{ x: number; y: number; w: number; h: number }>;
  callouts?: Array<{
    text: string;
    x: number;
    y: number;
    align?: "left" | "right";
  }>;
  zoom?: { x: number; y: number; scale: number };
}> = ({ src, highlights = [], callouts = [], zoom }) => {
  const frame = useCurrentFrame();

  const imgOpacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  const zoomScale = zoom
    ? interpolate(frame, [0, 20], [1, zoom.scale], {
        extrapolateRight: "clamp",
      })
    : 1;

  const zoomX = zoom
    ? interpolate(frame, [0, 20], [0, -zoom.x * (zoom.scale - 1)], {
        extrapolateRight: "clamp",
      })
    : 0;

  const zoomY = zoom
    ? interpolate(frame, [0, 20], [0, -zoom.y * (zoom.scale - 1)], {
        extrapolateRight: "clamp",
      })
    : 0;

  return (
    <AbsoluteFill style={{ background: "#0f1419" }}>
      <div
        style={{
          position: "absolute",
          width: 1280,
          height: 720,
          transform: `scale(${zoomScale}) translate(${zoomX}px, ${zoomY}px)`,
          transformOrigin: "top left",
          opacity: imgOpacity,
        }}
      >
        <Img
          src={staticFile(src)}
          style={{ width: 1280, height: 720, objectFit: "cover" }}
        />
        {highlights.map((h, i) => (
          <Sequence key={i} from={15 + i * 15}>
            <Highlight x={h.x} y={h.y} width={h.w} height={h.h} />
          </Sequence>
        ))}
      </div>
      {callouts.map((c, i) => (
        <Sequence key={i} from={30 + i * 40}>
          <Callout text={c.text} x={c.x} y={c.y} align={c.align} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// ── Main Composition ────────────────────────────────────────────────────────

export const DashboardOverview: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Background music */}
      <Audio
        src={staticFile("music/gentle-caribbean-helpdesk-loop.mp3")}
        volume={0.15}
      />

      {/* 0-4s: Title slide */}
      <Sequence from={0} durationInFrames={120}>
        <TitleSlide
          title="PIXOPHARM Admin Guide"
          subtitle="Dashboard Overview — Know Your Console"
        />
      </Sequence>

      {/* 4-12s: Dashboard page with highlights */}
      <Sequence from={120} durationInFrames={240}>
        <ScreenshotSlide
          src="screenshots/03-admin-dashboard.png"
          highlights={[
            { x: 0, y: 0, w: 230, h: 760 },         // Sidebar
            { x: 270, y: 150, w: 995, h: 130 },      // Stats cards
            { x: 270, y: 310, w: 560, h: 245 },      // Quick Actions
          ]}
          callouts={[
            { text: "Sidebar — navigate between all 6 pages", x: 240, y: 400 },
            { text: "At-a-glance stats: courses, students, enrollments", x: 680, y: 90, align: "right" },
            { text: "Quick Actions — jump straight to common tasks", x: 240, y: 560 },
          ]}
        />
      </Sequence>

      {/* 12-20s: Courses list */}
      <Sequence from={360} durationInFrames={240}>
        <ScreenshotSlide
          src="screenshots/04-admin-courses.png"
          highlights={[
            { x: 1270, y: 65, w: 200, h: 50 },       // + New Course button
            { x: 1270, y: 138, w: 200, h: 50 },       // Status dropdown
            { x: 1370, y: 138, w: 110, h: 50 },       // Action icons
          ]}
          callouts={[
            { text: "Click '+ New Course' to create a course from scratch", x: 900, y: 20 },
            { text: "Change status: Draft → Published → Archived", x: 880, y: 160 },
            { text: "Preview (eye), Edit (pen), Delete (bin)", x: 900, y: 240 },
          ]}
        />
      </Sequence>

      {/* 20-27s: Course expanded showing modules */}
      <Sequence from={600} durationInFrames={210}>
        <ScreenshotSlide
          src="screenshots/05-admin-course-expanded.png"
          callouts={[
            { text: "Click the arrow (>) to expand a course and see its modules", x: 240, y: 500 },
            { text: "Each module shows lesson count and quiz question count", x: 580, y: 100 },
            { text: "Use '+ Add Module' to add new modules to this course", x: 900, y: 55 },
          ]}
        />
      </Sequence>

      {/* 27-34s: Module expanded showing lessons + quizzes */}
      <Sequence from={810} durationInFrames={210}>
        <ScreenshotSlide
          src="screenshots/06-admin-module-expanded.png"
          zoom={{ x: 400, y: 200, scale: 1.3 }}
          callouts={[
            { text: "Lessons are listed with title, duration, and content preview", x: 50, y: 480 },
            { text: "Quiz questions show the question text, difficulty, and correct answer", x: 50, y: 560 },
          ]}
        />
      </Sequence>

      {/* 34-40s: New Course dialog */}
      <Sequence from={1020} durationInFrames={180}>
        <ScreenshotSlide
          src="screenshots/11-admin-new-course-dialog.png"
          callouts={[
            { text: "Fill in title, slug, description, level, duration, and icon", x: 30, y: 600 },
            { text: "Select prerequisites from existing courses", x: 480, y: 600 },
          ]}
        />
      </Sequence>

      {/* 40-46s: Students page */}
      <Sequence from={1200} durationInFrames={180}>
        <ScreenshotSlide
          src="screenshots/07-admin-students.png"
          callouts={[
            { text: "Track all registered students — search, sort, and export to CSV", x: 300, y: 500 },
          ]}
        />
      </Sequence>

      {/* 46-52s: Analytics page */}
      <Sequence from={1380} durationInFrames={180}>
        <ScreenshotSlide
          src="screenshots/08-admin-analytics.png"
          callouts={[
            { text: "Monitor enrollments, completion rates, quiz scores, and course popularity", x: 300, y: 500 },
          ]}
        />
      </Sequence>

      {/* 52-57s: Help & Guide page */}
      <Sequence from={1560} durationInFrames={150}>
        <ScreenshotSlide
          src="screenshots/10-admin-help.png"
          callouts={[
            { text: "Need help? Click 'Help & Guide' for step-by-step instructions on every feature", x: 300, y: 500 },
          ]}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
