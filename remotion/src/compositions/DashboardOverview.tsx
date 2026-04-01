import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  Loop,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
} from "remotion";

// ── Easing helper (ease-out cubic — no bounce) ─────────────────────────────
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

// ── Reusable Components ─────────────────────────────────────────────────────

const Highlight: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
}> = ({ x, y, width, height, color = "rgba(16, 185, 129, 0.4)" }) => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame * 0.12) * 0.12 + 0.88;
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
        boxShadow: `0 0 ${18 * pulse}px ${color}`,
        opacity: pulse,
        pointerEvents: "none",
      }}
    />
  );
};

const Arrow: React.FC<{
  calloutX: number;
  calloutY: number;
  calloutAlign?: "left" | "right";
  toX: number;
  toY: number;
}> = ({ calloutX, calloutY, calloutAlign, toX, toY }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const opacity = interpolate(frame, [0, 12], [0, 0.7], {
    extrapolateRight: "clamp",
  });

  // Estimate callout box bounds to find arrow start
  const boxW = 300;
  const boxH = 42;
  const left = calloutAlign === "right" ? calloutX - boxW : calloutX;
  const centerX = left + boxW / 2;
  const centerY = calloutY + boxH / 2;
  const dx = toX - centerX;
  const dy = toY - centerY;

  let fromX: number, fromY: number;
  if (Math.abs(dy) > Math.abs(dx)) {
    fromX = centerX;
    fromY = dy < 0 ? calloutY : calloutY + boxH;
  } else {
    fromX = dx > 0 ? left + boxW : left;
    fromY = centerY;
  }

  const curX = fromX + (toX - fromX) * progress;
  const curY = fromY + (toY - fromY) * progress;
  const angle = Math.atan2(toY - fromY, toX - fromX);
  const headLen = 12;

  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1280,
        height: 720,
        pointerEvents: "none",
      }}
    >
      <line
        x1={fromX}
        y1={fromY}
        x2={curX}
        y2={curY}
        stroke="#10b981"
        strokeWidth="2"
        strokeDasharray="6 4"
        opacity={opacity}
      />
      {progress > 0.85 && (
        <polygon
          points={`${toX},${toY} ${toX - headLen * Math.cos(angle - Math.PI / 6)},${toY - headLen * Math.sin(angle - Math.PI / 6)} ${toX - headLen * Math.cos(angle + Math.PI / 6)},${toY - headLen * Math.sin(angle + Math.PI / 6)}`}
          fill="#10b981"
          opacity={opacity}
        />
      )}
    </svg>
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
  // Gentle 0.3s ease-out fade + subtle scale — no bounce
  const scale = interpolate(frame, [0, 9], [0.92, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const opacity = interpolate(frame, [0, 9], [0, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
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
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const titleScale = interpolate(frame, [0, 15], [0.9, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #1e3a5f 0%, #0f2439 50%, #1a3352 100%)",
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
          opacity: titleOpacity,
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
    pointTo?: { x: number; y: number };
  }>;
  zoom?: { x: number; y: number; scale: number };
}> = ({ src, highlights = [], callouts = [], zoom }) => {
  const frame = useCurrentFrame();

  const imgOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const zoomScale = zoom
    ? interpolate(frame, [0, 25], [1, zoom.scale], {
        extrapolateRight: "clamp",
        easing: easeOut,
      })
    : 1;

  const zoomX = zoom
    ? interpolate(frame, [0, 25], [0, -zoom.x * (zoom.scale - 1)], {
        extrapolateRight: "clamp",
        easing: easeOut,
      })
    : 0;

  const zoomY = zoom
    ? interpolate(frame, [0, 25], [0, -zoom.y * (zoom.scale - 1)], {
        extrapolateRight: "clamp",
        easing: easeOut,
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
          <Sequence key={i} from={20 + i * 20}>
            <Highlight x={h.x} y={h.y} width={h.w} height={h.h} />
          </Sequence>
        ))}
      </div>
      {/* Callouts: 1.5s initial delay, 3s between each */}
      {callouts.map((c, i) => (
        <Sequence key={i} from={45 + i * 90}>
          <Callout text={c.text} x={c.x} y={c.y} align={c.align} />
          {c.pointTo && (
            <Arrow
              calloutX={c.x}
              calloutY={c.y}
              calloutAlign={c.align}
              toX={c.pointTo.x}
              toY={c.pointTo.y}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// ── Main Composition ────────────────────────────────────────────────────────
// Timing: 45 + (N-1)*90 + 90 = slide duration
// N=1→150f(5s)  N=2→240f(8s)  N=3→330f(11s)

export const DashboardOverview: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill>
      {/* Background music — loops to fill video duration */}
      <Loop durationInFrames={durationInFrames}>
        <Audio
          src={staticFile("music/gentle-caribbean-helpdesk-loop.mp3")}
          volume={0.15}
        />
      </Loop>

      {/* 0-4s: Title slide */}
      <Sequence from={0} durationInFrames={120}>
        <TitleSlide
          title="PIXOPHARM Admin Guide"
          subtitle="Dashboard Overview — Know Your Console"
        />
      </Sequence>

      {/* 4-15s: Dashboard page with highlights (3 callouts = 11s) */}
      <Sequence from={120} durationInFrames={330}>
        <ScreenshotSlide
          src="screenshots/03-admin-dashboard.png"
          highlights={[
            { x: 0, y: 0, w: 230, h: 760 },
            { x: 270, y: 150, w: 995, h: 130 },
            { x: 270, y: 310, w: 560, h: 245 },
          ]}
          callouts={[
            {
              text: "Sidebar — navigate between all 6 pages",
              x: 240,
              y: 400,
              pointTo: { x: 115, y: 380 },
            },
            {
              text: "At-a-glance stats: courses, students, enrollments",
              x: 680,
              y: 90,
              align: "right",
              pointTo: { x: 767, y: 215 },
            },
            {
              text: "Quick Actions — jump straight to common tasks",
              x: 240,
              y: 560,
              pointTo: { x: 550, y: 430 },
            },
          ]}
        />
      </Sequence>

      {/* 15-26s: Courses list (3 callouts = 11s) */}
      <Sequence from={450} durationInFrames={330}>
        <ScreenshotSlide
          src="screenshots/04-admin-courses.png"
          highlights={[
            { x: 1270, y: 65, w: 200, h: 50 },
            { x: 1270, y: 138, w: 200, h: 50 },
            { x: 1370, y: 138, w: 110, h: 50 },
          ]}
          callouts={[
            {
              text: "Click '+ New Course' to create a course from scratch",
              x: 900,
              y: 20,
              pointTo: { x: 1370, y: 90 },
            },
            {
              text: "Change status: Draft → Published → Archived",
              x: 880,
              y: 160,
              pointTo: { x: 1370, y: 163 },
            },
            {
              text: "Preview (eye), Edit (pen), Delete (bin)",
              x: 900,
              y: 240,
              pointTo: { x: 1425, y: 163 },
            },
          ]}
        />
      </Sequence>

      {/* 26-37s: Course expanded showing modules (3 callouts = 11s) */}
      <Sequence from={780} durationInFrames={330}>
        <ScreenshotSlide
          src="screenshots/05-admin-course-expanded.png"
          callouts={[
            {
              text: "Click the arrow to expand a course and see its modules",
              x: 240,
              y: 500,
              pointTo: { x: 295, y: 175 },
            },
            {
              text: "Each module shows lesson count and quiz question count",
              x: 580,
              y: 100,
              pointTo: { x: 500, y: 280 },
            },
            {
              text: "Use '+ Add Module' to add new modules to this course",
              x: 900,
              y: 55,
            },
          ]}
        />
      </Sequence>

      {/* 37-45s: Module expanded showing lessons + quizzes (2 callouts = 8s) */}
      <Sequence from={1110} durationInFrames={240}>
        <ScreenshotSlide
          src="screenshots/06-admin-module-expanded.png"
          zoom={{ x: 400, y: 200, scale: 1.3 }}
          callouts={[
            {
              text: "Lessons listed with title, duration, and content preview",
              x: 50,
              y: 480,
              pointTo: { x: 400, y: 350 },
            },
            {
              text: "Quiz questions show text, difficulty, and correct answer",
              x: 50,
              y: 560,
              pointTo: { x: 400, y: 450 },
            },
          ]}
        />
      </Sequence>

      {/* 45-53s: New Course dialog (2 callouts = 8s) */}
      <Sequence from={1350} durationInFrames={240}>
        <ScreenshotSlide
          src="screenshots/11-admin-new-course-dialog.png"
          callouts={[
            {
              text: "Fill in title, slug, description, level, duration, and icon",
              x: 30,
              y: 600,
              pointTo: { x: 500, y: 300 },
            },
            {
              text: "Select prerequisites from existing courses",
              x: 480,
              y: 600,
              pointTo: { x: 500, y: 480 },
            },
          ]}
        />
      </Sequence>

      {/* 53-58s: Students page (1 callout = 5s) */}
      <Sequence from={1590} durationInFrames={150}>
        <ScreenshotSlide
          src="screenshots/07-admin-students.png"
          callouts={[
            {
              text: "Track all registered students — search, sort, and export to CSV",
              x: 300,
              y: 500,
            },
          ]}
        />
      </Sequence>

      {/* 58-63s: Analytics page (1 callout = 5s) */}
      <Sequence from={1740} durationInFrames={150}>
        <ScreenshotSlide
          src="screenshots/08-admin-analytics.png"
          callouts={[
            {
              text: "Monitor enrollments, completion rates, quiz scores, and course popularity",
              x: 300,
              y: 500,
            },
          ]}
        />
      </Sequence>

      {/* 63-68s: Help & Guide page (1 callout = 5s) */}
      <Sequence from={1890} durationInFrames={150}>
        <ScreenshotSlide
          src="screenshots/10-admin-help.png"
          callouts={[
            {
              text: "Need help? Click 'Help & Guide' for step-by-step instructions",
              x: 300,
              y: 500,
            },
          ]}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
