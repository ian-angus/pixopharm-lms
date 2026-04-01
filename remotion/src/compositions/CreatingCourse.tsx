import React from "react";
import {
  AbsoluteFill,
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
          <Sequence key={i} from={10 + i * 5}>
            <Highlight x={h.x} y={h.y} width={h.w} height={h.h} />
          </Sequence>
        ))}
      </div>
      {callouts.map((c, i) => (
        <Sequence key={i} from={15 + i * 10}>
          <Callout text={c.text} x={c.x} y={c.y} align={c.align} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// ── Main Composition ────────────────────────────────────────────────────────

export const CreatingCourse: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* 0-3s: Title slide */}
      <Sequence from={0} durationInFrames={90}>
        <TitleSlide
          title="Creating Your First Course"
          subtitle="Step-by-step — from blank slate to published course"
        />
      </Sequence>

      {/* 3-7s: Courses page — highlight + New Course button */}
      <Sequence from={90} durationInFrames={120}>
        <ScreenshotSlide
          src="screenshots/20-courses-page.png"
          highlights={[
            { x: 1380, y: 84, w: 140, h: 42 },      // + New Course button
          ]}
          callouts={[
            { text: "Step 1: Click '+ New Course' in the top-right corner", x: 900, y: 30 },
            { text: "You can see all 13 existing courses listed here", x: 240, y: 600 },
          ]}
        />
      </Sequence>

      {/* 7-12s: New Course dialog — top fields */}
      <Sequence from={210} durationInFrames={150}>
        <ScreenshotSlide
          src="screenshots/21-new-course-dialog-top.png"
          highlights={[
            { x: 447, y: 130, w: 620, h: 55 },       // Title field
            { x: 447, y: 215, w: 620, h: 55 },       // Slug field
            { x: 447, y: 295, w: 620, h: 100 },      // Description textarea
            { x: 447, y: 420, w: 290, h: 55 },       // Skill Level dropdown
            { x: 760, y: 420, w: 305, h: 55 },       // Duration field
          ]}
          callouts={[
            { text: "Step 2: Fill in the course title — the slug auto-generates", x: 240, y: 600 },
            { text: "Choose skill level (Beginner/Intermediate/Advanced/Regional) and set duration in weeks", x: 680, y: 500, align: "right" },
            { text: "Pick an icon and color theme for the course card", x: 240, y: 650 },
          ]}
        />
      </Sequence>

      {/* 12-17s: New Course dialog — bottom fields */}
      <Sequence from={360} durationInFrames={150}>
        <ScreenshotSlide
          src="screenshots/22-new-course-dialog-bottom.png"
          highlights={[
            { x: 447, y: 215, w: 620, h: 220 },     // Prerequisites section
            { x: 447, y: 455, w: 620, h: 55 },       // What You Will Learn
            { x: 447, y: 575, w: 620, h: 55 },       // Status dropdown
            { x: 940, y: 660, w: 130, h: 42 },       // Create Course button
          ]}
          callouts={[
            { text: "Step 3: Select prerequisite courses (click to toggle)", x: 240, y: 140 },
            { text: "Add learning outcomes — click '+ Add item' for more", x: 240, y: 520 },
            { text: "New courses default to 'Draft' status — publish when ready", x: 240, y: 600 },
            { text: "Step 4: Click 'Create Course' to save", x: 750, y: 650, align: "right" },
          ]}
        />
      </Sequence>

      {/* 17-22s: Expanded course showing modules */}
      <Sequence from={510} durationInFrames={150}>
        <ScreenshotSlide
          src="screenshots/23-course-expanded-modules.png"
          highlights={[
            { x: 282, y: 155, w: 1200, h: 50 },     // Course header row
            { x: 1390, y: 230, w: 120, h: 36 },      // + Add Module button
            { x: 282, y: 270, w: 1200, h: 460 },     // Module list area
          ]}
          callouts={[
            { text: "Your new course appears in the list — click to expand and see modules", x: 240, y: 70 },
            { text: "Click '+ Add Module' to start building content", x: 950, y: 200 },
            { text: "Each module shows its lessons and quiz questions at a glance", x: 240, y: 600 },
          ]}
        />
      </Sequence>

      {/* 22-25s: End slide */}
      <Sequence from={660} durationInFrames={90}>
        <TitleSlide
          title="Course Created!"
          subtitle="Next: Add modules, lessons, and quiz questions"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
