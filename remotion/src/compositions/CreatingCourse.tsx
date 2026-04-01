import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
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
      {/* Callouts: 2s initial delay, 5s between each */}
      {callouts.map((c, i) => (
        <Sequence key={i} from={60 + i * 150}>
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
// N=1→150f(5s)  N=2→240f(8s)  N=3→330f(11s)  N=4→420f(14s)

export const CreatingCourse: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill>
      {/* Background music with 3s fade-out at end */}
      <Audio
        src={staticFile("music/gentle-caribbean-helpdesk-loop.mp3")}
        volume={(f) => {
          const fadeStart = durationInFrames - 90;
          if (f >= fadeStart) {
            return 0.15 * (1 - (f - fadeStart) / 90);
          }
          return 0.15;
        }}
      />

      {/* 0-5s: Title slide */}
      <Sequence from={0} durationInFrames={150}>
        <TitleSlide
          title="Creating Your First Course"
          subtitle="Step-by-step — from blank slate to published course"
        />
      </Sequence>

      {/* 5-17s: Courses page — highlight + New Course button (2 callouts = 12s) */}
      <Sequence from={150} durationInFrames={360}>
        <ScreenshotSlide
          src="screenshots/20-courses-page.png"
          highlights={[
            { x: 1380, y: 84, w: 140, h: 42 },
          ]}
          callouts={[
            {
              text: "Step 1: Click '+ New Course' in the top-right corner",
              x: 900,
              y: 30,
              pointTo: { x: 1450, y: 105 },
            },
            {
              text: "You can see all 13 existing courses listed here",
              x: 240,
              y: 600,
            },
          ]}
        />
      </Sequence>

      {/* 17-34s: New Course dialog — top fields (3 callouts = 17s) */}
      <Sequence from={510} durationInFrames={510}>
        <ScreenshotSlide
          src="screenshots/21-new-course-dialog-top.png"
          highlights={[
            { x: 447, y: 130, w: 620, h: 55 },
            { x: 447, y: 215, w: 620, h: 55 },
            { x: 447, y: 295, w: 620, h: 100 },
            { x: 447, y: 420, w: 290, h: 55 },
            { x: 760, y: 420, w: 305, h: 55 },
          ]}
          callouts={[
            {
              text: "Step 2: Fill in the course title — the slug auto-generates",
              x: 240,
              y: 600,
              pointTo: { x: 757, y: 157 },
            },
            {
              text: "Choose skill level and set duration in weeks",
              x: 680,
              y: 500,
              align: "right",
              pointTo: { x: 592, y: 447 },
            },
            {
              text: "Pick an icon and color theme for the course card",
              x: 240,
              y: 650,
            },
          ]}
        />
      </Sequence>

      {/* 34-56s: New Course dialog — bottom fields (4 callouts = 22s) */}
      <Sequence from={1020} durationInFrames={660}>
        <ScreenshotSlide
          src="screenshots/22-new-course-dialog-bottom.png"
          highlights={[
            { x: 447, y: 215, w: 620, h: 220 },
            { x: 447, y: 455, w: 620, h: 55 },
            { x: 447, y: 575, w: 620, h: 55 },
            { x: 940, y: 660, w: 130, h: 42 },
          ]}
          callouts={[
            {
              text: "Step 3: Select prerequisite courses (click to toggle)",
              x: 240,
              y: 140,
              pointTo: { x: 650, y: 310 },
            },
            {
              text: "Add learning outcomes — click '+ Add item' for more",
              x: 240,
              y: 520,
              pointTo: { x: 757, y: 480 },
            },
            {
              text: "New courses default to 'Draft' status — publish when ready",
              x: 240,
              y: 600,
              pointTo: { x: 757, y: 607 },
            },
            {
              text: "Step 4: Click 'Create Course' to save",
              x: 750,
              y: 650,
              align: "right",
              pointTo: { x: 1005, y: 679 },
            },
          ]}
        />
      </Sequence>

      {/* 56-73s: Expanded course showing modules (3 callouts = 17s) */}
      <Sequence from={1680} durationInFrames={510}>
        <ScreenshotSlide
          src="screenshots/23-course-expanded-modules.png"
          highlights={[
            { x: 282, y: 155, w: 1200, h: 50 },
            { x: 1390, y: 230, w: 120, h: 36 },
            { x: 282, y: 270, w: 1200, h: 460 },
          ]}
          callouts={[
            {
              text: "Your new course appears in the list — click to expand",
              x: 240,
              y: 70,
              pointTo: { x: 440, y: 175 },
            },
            {
              text: "Click '+ Add Module' to start building content",
              x: 950,
              y: 200,
              pointTo: { x: 1450, y: 248 },
            },
            {
              text: "Each module shows its lessons and quiz questions at a glance",
              x: 240,
              y: 600,
              pointTo: { x: 600, y: 400 },
            },
          ]}
        />
      </Sequence>

      {/* 73-78s: End slide */}
      <Sequence from={2190} durationInFrames={150}>
        <TitleSlide
          title="Course Created!"
          subtitle="Next: Add modules, lessons, and quiz questions"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
