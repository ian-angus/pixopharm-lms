import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  interpolate,
  useCurrentFrame,
  staticFile,
  spring,
  useVideoConfig,
} from "remotion";

// ─── Brand tokens ────────────────────────────────────────────────────────────
const TEAL = "#1a8a78";
const TEAL_LIGHT = "#2abfa8";
const TEAL_GLOW = "rgba(26,138,120,0.18)";
const NAVY = "#07111e";
const FONT = "'DM Sans', system-ui, sans-serif";

// ─── Easing helpers ──────────────────────────────────────────────────────────
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

// ─── Particles background ────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  x: ((i * 137.5) % 100),
  y: ((i * 97.3) % 100),
  size: 1.5 + (i % 4) * 0.8,
  speed: 0.012 + (i % 5) * 0.006,
  opacity: 0.08 + (i % 3) * 0.06,
  phase: i * 0.7,
}));

const ParticleField: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      {PARTICLES.map((p, i) => (
        <circle
          key={i}
          cx={`${p.x + Math.sin(frame * p.speed + p.phase) * 3}%`}
          cy={`${p.y + Math.cos(frame * p.speed * 0.7 + p.phase) * 4}%`}
          r={p.size}
          fill={TEAL_LIGHT}
          opacity={p.opacity}
        />
      ))}
    </svg>
  );
};

// ─── Animated pill/capsule shapes ────────────────────────────────────────────
const PILLS = [
  { x: 80,  y: 60,  rot: 35,  delay: 10, w: 52, h: 22 },
  { x: 920, y: 180, rot: -20, delay: 25, w: 44, h: 18 },
  { x: 60,  y: 480, rot: 60,  delay: 5,  w: 48, h: 20 },
  { x: 1100,y: 520, rot: -45, delay: 35, w: 56, h: 22 },
  { x: 200, y: 580, rot: 15,  delay: 18, w: 40, h: 17 },
  { x: 1050,y: 100, rot: -30, delay: 40, w: 46, h: 19 },
];

const FloatingPills: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <svg style={{ position: "absolute", inset: 0, width: 1280, height: 720, pointerEvents: "none" }}>
      {PILLS.map((p, i) => {
        const progress = interpolate(frame - p.delay, [0, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
        const drift = Math.sin(frame * 0.018 + i) * 8;
        const rotate = p.rot + Math.sin(frame * 0.012 + i) * 4;
        return (
          <g
            key={i}
            transform={`translate(${p.x},${p.y + drift}) rotate(${rotate})`}
            opacity={0.12 * progress}
          >
            <rect x={-p.w / 2} y={-p.h / 2} width={p.w} height={p.h} rx={p.h / 2} fill="none" stroke={TEAL_LIGHT} strokeWidth="1.5" />
            <line x1={0} y1={-p.h / 2} x2={0} y2={p.h / 2} stroke={TEAL_LIGHT} strokeWidth="1" opacity={0.5} />
          </g>
        );
      })}
    </svg>
  );
};

// ─── Animated Rx cross ───────────────────────────────────────────────────────
const RxSymbol: React.FC<{ x: number; y: number; size?: number; startFrame?: number }> = ({
  x, y, size = 60, startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame - startFrame, [0, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
  const pulse = 0.85 + Math.sin(frame * 0.08) * 0.15;
  const s = size * progress;
  return (
    <g transform={`translate(${x},${y})`} opacity={0.18 * progress * pulse}>
      {/* R */}
      <text fontSize={s * 0.6} fill={TEAL_LIGHT} fontFamily={FONT} fontWeight="800" x={-s * 0.2} y={s * 0.22} textAnchor="middle">Rx</text>
      {/* Circle */}
      <circle r={s * 0.55} fill="none" stroke={TEAL_LIGHT} strokeWidth="2" strokeDasharray={`${s * 3.45 * progress} ${s * 3.45}`} />
    </g>
  );
};

// ─── Word-by-word animated text ──────────────────────────────────────────────
const AnimatedWords: React.FC<{
  text: string;
  startFrame: number;
  gapFrames?: number;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
  highlightWords?: string[];
  highlightColor?: string;
}> = ({ text, startFrame, gapFrames = 5, style, wordStyle, highlightWords = [], highlightColor = TEAL_LIGHT }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.25em", ...style }}>
      {words.map((word, i) => {
        const wordFrame = frame - startFrame - i * gapFrames;
        const prog = spring({ frame: wordFrame, fps, config: { damping: 55, stiffness: 120 } });
        const opacity = interpolate(wordFrame, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity,
              transform: `translateY(${(1 - prog) * 18}px) scale(${0.85 + prog * 0.15})`,
              color: isHighlight ? highlightColor : "white",
              ...wordStyle,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

// ─── SCENE 1 — Logo Reveal (frames 0–90) ─────────────────────────────────────
const SceneLogo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoIn = spring({ frame, fps, config: { damping: 65, stiffness: 90 } });
  const taglineOpacity = interpolate(frame, [35, 58], [0, 1], { extrapolateRight: "clamp", easing: easeOut });
  const exit = interpolate(frame, [72, 90], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  // Animated ring draw
  const ringProgress = interpolate(frame, [5, 45], [0, 1], { extrapolateRight: "clamp", easing: easeOut });
  const ringCircum = 2 * Math.PI * 80;

  return (
    <AbsoluteFill style={{
      background: `radial-gradient(ellipse at 50% 60%, #0e2236 0%, ${NAVY} 70%)`,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity: exit,
    }}>
      <ParticleField />
      <FloatingPills />

      {/* Animated ring */}
      <svg style={{ position: "absolute", width: 200, height: 200 }}>
        <circle
          cx={100} cy={100} r={80}
          fill="none" stroke={TEAL} strokeWidth="1.5"
          strokeDasharray={`${ringCircum * ringProgress} ${ringCircum}`}
          strokeLinecap="round"
          opacity={0.3}
          transform="rotate(-90 100 100)"
        />
        <circle cx={100} cy={100} r={80} fill="none" stroke={TEAL_LIGHT} strokeWidth="0.5" opacity={0.1} />
      </svg>

      {/* Logo */}
      <div style={{
        transform: `scale(${logoIn}) translateY(${(1 - logoIn) * 20}px)`,
        display: "flex", alignItems: "center", gap: 18,
        background: "rgba(255,255,255,0.04)",
        border: `1.5px solid rgba(42,191,168,0.3)`,
        borderRadius: 100, padding: "14px 36px",
        zIndex: 2,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, background: TEAL,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, fontWeight: 800, color: "white", fontFamily: FONT,
          boxShadow: `0 0 20px ${TEAL}80`,
        }}>Px</div>
        <span style={{ color: "white", fontSize: 30, fontWeight: 700, fontFamily: FONT, letterSpacing: "-0.03em" }}>
          PIXOPHARM
        </span>
      </div>

      <div style={{
        opacity: taglineOpacity,
        color: "rgba(255,255,255,0.45)", fontSize: 15, fontFamily: FONT,
        letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500,
        marginTop: 16, zIndex: 2,
      }}>
        Caribbean Pharmacy Training
      </div>
    </AbsoluteFill>
  );
};

// ─── SCENE 2 — Hero Hook (frames 90–270) ─────────────────────────────────────
const SceneHero: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp", easing: easeOut });
  const exit  = interpolate(frame, [190, 210], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const badgeSlide = interpolate(frame, [5, 25], [-30, 0], { extrapolateRight: "clamp", easing: easeOut });
  const badgeOpacity = interpolate(frame, [5, 25], [0, 1], { extrapolateRight: "clamp", easing: easeOut });
  // Animated underline width
  const lineW = interpolate(frame, [55, 80], [0, 100], { extrapolateRight: "clamp", easing: easeOut });

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(150deg, ${NAVY} 0%, #0d2236 100%)`,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "0 80px", opacity: enter * exit,
    }}>
      <ParticleField />
      <FloatingPills />
      <RxSymbol x={160} y={130} size={70} startFrame={20} />
      <RxSymbol x={1100} y={560} size={55} startFrame={35} />

      {/* Badge */}
      <div style={{
        opacity: badgeOpacity,
        transform: `translateY(${badgeSlide}px)`,
        display: "inline-block",
        background: `rgba(26,138,120,0.18)`,
        border: `1px solid rgba(42,191,168,0.5)`,
        color: TEAL_LIGHT, padding: "7px 22px", borderRadius: 100,
        fontSize: 13, fontFamily: FONT, fontWeight: 700,
        letterSpacing: "0.12em", textTransform: "uppercase" as const,
        marginBottom: 24,
      }}>
        The Caribbean's First
      </div>

      {/* Animated headline words */}
      <AnimatedWords
        text="Pharmacy Technician"
        startFrame={18}
        gapFrames={6}
        style={{ fontSize: 76, fontWeight: 800, fontFamily: FONT, letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: 4 }}
        wordStyle={{ fontSize: 76, fontWeight: 800, fontFamily: FONT, letterSpacing: "-0.035em" }}
      />
      <AnimatedWords
        text="Training Platform"
        startFrame={30}
        gapFrames={8}
        highlightWords={["Training", "Platform"]}
        highlightColor={TEAL_LIGHT}
        style={{ fontSize: 76, fontWeight: 800, fontFamily: FONT, letterSpacing: "-0.035em", marginBottom: 20 }}
        wordStyle={{ fontSize: 76, fontWeight: 800, fontFamily: FONT, letterSpacing: "-0.035em" }}
      />

      {/* Animated underline */}
      <div style={{
        width: `${lineW}%`, height: 3, background: `linear-gradient(90deg, ${TEAL}, ${TEAL_LIGHT}, transparent)`,
        borderRadius: 2, marginBottom: 24,
      }} />

      <AnimatedWords
        text="27 courses built for every island's unique pharmacy regulations."
        startFrame={50}
        gapFrames={3}
        style={{ maxWidth: 620, justifyContent: "center" }}
        wordStyle={{ fontSize: 21, fontFamily: FONT, color: "rgba(255,255,255,0.55)" }}
      />

      {/* Level badges */}
      <div style={{ display: "flex", gap: 10, marginTop: 32 }}>
        {["Beginner", "Intermediate", "Advanced"].map((l, i) => {
          const bOpacity = interpolate(frame - 80 - i * 10, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          const bY = interpolate(frame - 80 - i * 10, [0, 20], [10, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          return (
            <div key={l} style={{
              padding: "7px 20px", borderRadius: 100,
              border: `1px solid rgba(255,255,255,${0.12 + i * 0.04})`,
              color: `rgba(255,255,255,${0.45 + i * 0.08})`,
              fontSize: 13, fontFamily: FONT, fontWeight: 600,
              opacity: bOpacity, transform: `translateY(${bY}px)`,
            }}>{l}</div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ─── Caribbean island data ────────────────────────────────────────────────────
const ISLANDS = [
  { name: "Cuba",        x: 120, y: 80,  delay: 0  },
  { name: "Bahamas",     x: 175, y: 42,  delay: 8  },
  { name: "Jamaica",     x: 165, y: 118, delay: 16 },
  { name: "Haiti",       x: 210, y: 85,  delay: 24 },
  { name: "Puerto Rico", x: 258, y: 90,  delay: 32 },
  { name: "Antigua",     x: 308, y: 125, delay: 40 },
  { name: "St. Lucia",   x: 315, y: 158, delay: 48 },
  { name: "Barbados",    x: 330, y: 168, delay: 56 },
  { name: "Grenada",     x: 310, y: 185, delay: 64 },
  { name: "Trinidad",    x: 315, y: 210, delay: 72 },
  { name: "Guyana",      x: 362, y: 235, delay: 80 },
];

// ─── SCENE 3 — Caribbean Map (frames 270–450) ────────────────────────────────
const SceneMap: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp", easing: easeOut });
  const exit  = interpolate(frame, [190, 210], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  // Connection lines
  const linesProgress = interpolate(frame, [85, 130], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });

  // Build connection pairs (each island connects to next)
  const connections = ISLANDS.slice(0, -1).map((a, i) => ({ x1: a.x + 30, y1: a.y + 20, x2: ISLANDS[i + 1].x + 30, y2: ISLANDS[i + 1].y + 20 }));

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(155deg, #06101c 0%, #0b1e30 100%)`,
      display: "flex", alignItems: "center",
      opacity: enter * exit,
    }}>
      <ParticleField />

      {/* Left copy */}
      <div style={{ flex: 1, padding: "0 0 0 80px", maxWidth: 500 }}>
        {/* Label */}
        {(() => {
          const op = interpolate(frame, [8, 28], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          const y = interpolate(frame, [8, 28], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          return (
            <div style={{ opacity: op, transform: `translateY(${y}px)`, color: TEAL_LIGHT, fontSize: 13, fontFamily: FONT, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
              Every island. Different rules.
            </div>
          );
        })()}

        <AnimatedWords
          text="Built for the Caribbean's unique regulations"
          startFrame={18} gapFrames={5}
          style={{ marginBottom: 20, justifyContent: "flex-start" }}
          wordStyle={{ fontSize: 44, fontWeight: 800, fontFamily: FONT, letterSpacing: "-0.025em", lineHeight: 1.2, textAlign: "left" as const }}
        />

        <AnimatedWords
          text="What's OTC in Trinidad may require a prescription in Jamaica. Pixopharm teaches them all."
          startFrame={55} gapFrames={2}
          style={{ justifyContent: "flex-start" }}
          wordStyle={{ fontSize: 16, fontFamily: FONT, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}
        />
      </div>

      {/* Right: map panel */}
      <div style={{ position: "relative", width: 530, height: 320, marginRight: 60, flexShrink: 0 }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: 20,
          background: "rgba(14,34,54,0.7)", border: "1px solid rgba(42,191,168,0.12)",
          boxShadow: `inset 0 0 60px rgba(7,17,30,0.8)`,
        }} />

        {/* Caribbean Sea label */}
        <div style={{
          position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.1)", fontSize: 10, fontFamily: FONT,
          fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase",
        }}>Caribbean Sea</div>

        {/* Connection lines SVG */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          {connections.map((c, i) => {
            const lineStart = Math.max(0, (i / connections.length) * 0.7);
            const lineEnd = lineStart + 0.3;
            const lineProg = interpolate(linesProgress, [lineStart, lineEnd], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const cx = c.x1 + (c.x2 - c.x1) * lineProg;
            const cy = c.y1 + (c.y2 - c.y1) * lineProg;
            return (
              <line key={i}
                x1={c.x1} y1={c.y1} x2={cx} y2={cy}
                stroke={TEAL_LIGHT} strokeWidth="0.8"
                strokeDasharray="3 3" opacity={0.2}
              />
            );
          })}
        </svg>

        {/* Island dots */}
        {ISLANDS.map((island) => {
          const dotFrame = frame - island.delay;
          const progress = interpolate(dotFrame, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          const pulse = Math.sin(frame * 0.13 + island.delay) * 0.3 + 0.7;
          const labelOp = interpolate(dotFrame, [15, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={island.name} style={{ position: "absolute", left: island.x + 30, top: island.y + 20 }}>
              {/* Outer ring */}
              <div style={{
                position: "absolute", width: 26 * progress, height: 26 * progress,
                borderRadius: "50%", border: `1.5px solid ${TEAL_LIGHT}`,
                opacity: 0.22 * progress * pulse,
                transform: "translate(-50%,-50%)", top: "50%", left: "50%",
              }} />
              {/* Inner ring */}
              <div style={{
                position: "absolute", width: 16 * progress, height: 16 * progress,
                borderRadius: "50%", border: `1px solid ${TEAL}`,
                opacity: 0.35 * progress,
                transform: "translate(-50%,-50%)", top: "50%", left: "50%",
              }} />
              {/* Core dot */}
              <div style={{
                position: "absolute", width: 7, height: 7, borderRadius: "50%",
                background: TEAL_LIGHT, transform: `translate(-50%,-50%) scale(${progress})`,
                top: "50%", left: "50%", boxShadow: `0 0 ${10 * pulse}px ${TEAL}`,
              }} />
              {/* Label */}
              <div style={{
                position: "absolute", left: 9, top: -9,
                color: "rgba(255,255,255,0.72)", fontSize: 9.5, fontFamily: FONT,
                fontWeight: 600, whiteSpace: "nowrap", opacity: labelOp,
                letterSpacing: "0.02em",
              }}>{island.name}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ─── Animated counter ────────────────────────────────────────────────────────
const Counter: React.FC<{ target: number; startFrame: number }> = ({ target, startFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({ frame: frame - startFrame, fps, config: { damping: 70, stiffness: 55 } });
  return <>{Math.round(target * Math.min(prog, 1))}</>;
};

// ─── SCENE 4 — Stats (frames 450–630) ────────────────────────────────────────
const SceneStats: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp", easing: easeOut });
  const exit  = interpolate(frame, [190, 210], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const stats = [
    { value: 27,  label: "Courses",        color: TEAL_LIGHT,         delay: 15 },
    { value: 213, label: "Modules",         color: "hsl(199,80%,62%)", delay: 32 },
    { value: 834, label: "Quiz Questions",  color: "hsl(262,58%,70%)", delay: 49 },
  ];

  const levels = [
    { label: "Beginner",     color: TEAL,                  delay: 80 },
    { label: "Intermediate", color: "hsl(199,80%,42%)",    delay: 95 },
    { label: "Advanced",     color: "hsl(262,55%,58%)",    delay: 110 },
  ];

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(145deg, ${NAVY} 0%, #0d2030 100%)`,
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", opacity: enter * exit,
    }}>
      <ParticleField />
      <FloatingPills />

      {/* Central glow */}
      <div style={{
        position: "absolute", width: 700, height: 400, borderRadius: "50%",
        background: `radial-gradient(ellipse, ${TEAL_GLOW} 0%, transparent 65%)`,
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      }} />

      {(() => {
        const op = interpolate(frame, [5, 20], [0, 1], { extrapolateRight: "clamp" });
        const y = interpolate(frame, [5, 20], [12, 0], { extrapolateRight: "clamp" });
        return (
          <div style={{
            opacity: op, transform: `translateY(${y}px)`,
            color: "rgba(255,255,255,0.35)", fontSize: 13, fontFamily: FONT,
            textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, marginBottom: 50,
          }}>
            A complete curriculum for Caribbean pharmacy
          </div>
        );
      })()}

      {/* Stats row */}
      <div style={{ display: "flex", gap: 72, marginBottom: 50 }}>
        {stats.map((s) => {
          const op = interpolate(frame - s.delay, [0, 22], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          const scale = interpolate(frame - s.delay, [0, 22], [0.78, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          // Progress bar fill
          const barW = interpolate(frame - s.delay - 10, [0, 35], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          return (
            <div key={s.label} style={{ textAlign: "center", opacity: op, transform: `scale(${scale})` }}>
              {/* Glow ring behind number */}
              <div style={{
                width: 110, height: 110, borderRadius: "50%",
                background: `radial-gradient(ellipse, ${s.color}22 0%, transparent 70%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 12px",
                border: `1px solid ${s.color}30`,
              }}>
                <div style={{ fontSize: 64, fontWeight: 800, color: s.color, fontFamily: FONT, lineHeight: 1, letterSpacing: "-0.04em" }}>
                  <Counter target={s.value} startFrame={s.delay} />
                </div>
              </div>
              {/* Bar */}
              <div style={{ width: 110, height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2, margin: "0 auto 8px", overflow: "hidden" }}>
                <div style={{ width: `${barW}%`, height: "100%", background: s.color, borderRadius: 2, transition: "width 0.1s" }} />
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontFamily: FONT, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600 }}>
                {s.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Level badges */}
      <div style={{ display: "flex", gap: 14 }}>
        {levels.map((lv) => {
          const op = interpolate(frame - lv.delay, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          const y = interpolate(frame - lv.delay, [0, 20], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });
          return (
            <div key={lv.label} style={{
              padding: "10px 28px", borderRadius: 100,
              border: `1px solid ${lv.color}55`, background: `${lv.color}18`,
              color: lv.color, fontSize: 14, fontFamily: FONT, fontWeight: 700,
              opacity: op, transform: `translateY(${y}px)`,
            }}>
              {lv.label}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ─── SCENE 5 — CTA (frames 630–780) ──────────────────────────────────────────
const SceneCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = interpolate(frame, [0, 22], [0, 1], { extrapolateRight: "clamp", easing: easeOut });
  const btnIn = spring({ frame: frame - 48, fps, config: { damping: 58, stiffness: 105 } });
  // Shimmer on button
  const shimmer = (frame % 60) / 60;
  const shimmerX = interpolate(shimmer, [0, 1], [-100, 200]);

  return (
    <AbsoluteFill style={{
      background: `radial-gradient(ellipse at 50% 55%, #0d2030 0%, ${NAVY} 75%)`,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity: enter,
    }}>
      <ParticleField />
      <FloatingPills />
      <RxSymbol x={200} y={150} size={75} startFrame={10} />
      <RxSymbol x={1050} y={540} size={60} startFrame={20} />

      {/* Glow */}
      <div style={{
        position: "absolute", width: 640, height: 360, borderRadius: "50%",
        background: `radial-gradient(ellipse, ${TEAL_GLOW} 0%, transparent 68%)`,
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      }} />

      <AnimatedWords
        text="Open the door to your"
        startFrame={8} gapFrames={6}
        style={{ marginBottom: 4 }}
        wordStyle={{ fontSize: 60, fontWeight: 800, fontFamily: FONT, letterSpacing: "-0.03em" }}
      />
      <AnimatedWords
        text="pharmacy career."
        startFrame={28} gapFrames={8}
        highlightWords={["pharmacy", "career."]}
        highlightColor={TEAL_LIGHT}
        style={{ marginBottom: 20 }}
        wordStyle={{ fontSize: 60, fontWeight: 800, fontFamily: FONT, letterSpacing: "-0.03em" }}
      />

      {(() => {
        const op = interpolate(frame, [35, 52], [0, 1], { extrapolateRight: "clamp" });
        const y = interpolate(frame, [35, 52], [10, 0], { extrapolateRight: "clamp", easing: easeOut });
        return (
          <div style={{ opacity: op, transform: `translateY(${y}px)`, color: "rgba(255,255,255,0.42)", fontSize: 19, fontFamily: FONT, textAlign: "center", marginBottom: 44 }}>
            Your first course is free. No card required.
          </div>
        );
      })()}

      {/* CTA button with shimmer */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
        transform: `scale(${btnIn}) translateY(${(1 - Math.min(btnIn, 1)) * 16}px)`,
        opacity: Math.min(btnIn * 1.5, 1),
      }}>
        <div style={{
          position: "relative", overflow: "hidden",
          background: TEAL, color: "white", padding: "18px 52px",
          borderRadius: 100, fontSize: 19, fontWeight: 700, fontFamily: FONT,
          boxShadow: `0 8px 32px rgba(26,138,120,0.5), 0 0 0 1px ${TEAL}80`,
        }}>
          Start Free Today
          {/* Shimmer sweep */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, width: 60,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
            left: shimmerX, pointerEvents: "none",
          }} />
        </div>
        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, fontFamily: FONT, letterSpacing: "0.04em" }}>
          pixopharm-lms.vercel.app
        </div>
      </div>

      {/* Logo watermark */}
      <div style={{ position: "absolute", bottom: 30, display: "flex", alignItems: "center", gap: 10, opacity: 0.22 }}>
        <div style={{ width: 26, height: 26, borderRadius: 7, background: TEAL, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "white", fontFamily: FONT }}>Px</div>
        <span style={{ color: "white", fontSize: 14, fontWeight: 700, fontFamily: FONT, letterSpacing: "-0.01em" }}>PIXOPHARM</span>
      </div>
    </AbsoluteFill>
  );
};

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export const MarketingHero: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: NAVY }}>
      {/* Background music */}
      <Audio
        src={staticFile("music/gentle-caribbean-helpdesk-loop.mp3")}
        volume={0.12}
        loop
      />

      {/* Voiceover */}
      <Audio src={staticFile("marketing-vo.mp3")} volume={1} />

      <Sequence from={0}   durationInFrames={90}>  <SceneLogo />  </Sequence>
      <Sequence from={90}  durationInFrames={210}> <SceneHero />  </Sequence>
      <Sequence from={300} durationInFrames={210}> <SceneMap />   </Sequence>
      <Sequence from={510} durationInFrames={210}> <SceneStats /> </Sequence>
      <Sequence from={720} durationInFrames={300}> <SceneCTA />   </Sequence>
    </AbsoluteFill>
  );
};
