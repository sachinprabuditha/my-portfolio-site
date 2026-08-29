"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

/* Proportions taken from the reference: track ≈1.85:1, thumb ≈0.88 of the
   track height, so the knob very nearly fills it. Moon sits LEFT (dark),
   sun sits RIGHT (light). */
const W = 50;
const H = 27;
const PAD = 2;
const KNOB = H - PAD * 2;
const TRAVEL = W - KNOB - PAD * 2;

const spring = { type: "spring" as const, stiffness: 350, damping: 32 };

// Fixed coordinates — never Math.random(), which would break hydration.
const STARS = [
  { x: 0.70, y: 0.24, s: 4.6 },
  { x: 0.88, y: 0.47, s: 2.6 },
  { x: 0.63, y: 0.66, s: 3.1 },
  { x: 0.81, y: 0.79, s: 2 },
  { x: 0.55, y: 0.40, s: 1.8 },
];

// Craters as fractions of the knob, mirroring the reference's layout.
const CRATERS = [
  { cx: 0.32, cy: 0.30, r: 0.155 },
  { cx: 0.63, cy: 0.27, r: 0.095 },
  { cx: 0.83, cy: 0.44, r: 0.055 },
  { cx: 0.61, cy: 0.63, r: 0.105 },
  { cx: 0.24, cy: 0.70, r: 0.085 },
  { cx: 0.42, cy: 0.87, r: 0.055 },
];

const CLOUDS = [
  { x: 0.05, y: 0.58, w: 15 },
  { x: 0.25, y: 0.48, w: 19 },
  { x: 0.02, y: 0.26, w: 10 },
];

/** Four-point sparkle, as used for the stars in the reference. */
function Sparkle({ size, style }: { size: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 0c1.1 8.3 3.7 11 12 12-8.3 1.1-10.9 3.7-12 12-1.1-8.3-3.7-10.9-12-12C8.3 10.9 10.9 8.3 12 0Z"
        fill="#fff"
      />
    </svg>
  );
}

/** Puffy cloud: three overlapping circles on a flat base. */
function Cloud({ w, style }: { w: number; style?: React.CSSProperties }) {
  return (
    <svg width={w} height={w * 0.62} viewBox="0 0 50 31" style={style} aria-hidden="true">
      <g fill="#fff">
        <circle cx="16" cy="16" r="11" />
        <circle cx="30" cy="13" r="13" />
        <circle cx="41" cy="19" r="9" />
        <rect x="14" y="19" width="29" height="12" rx="6" />
      </g>
    </svg>
  );
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server cannot know the stored theme, so the real state would hydrate
  // wrong. Placeholder is the exact same size to avoid any layout shift.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <div
        className={`rounded-full bg-slate-900/10 dark:bg-white/10 ${className}`}
        style={{ width: W, height: H }}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative shrink-0 rounded-full overflow-hidden cursor-pointer
        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2
        focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-900 ${className}`}
      style={{
        width: W,
        height: H,
        boxShadow: "0 2px 6px rgba(0,0,0,0.20)",
      }}
    >
      {/* ---- Night sky ---- */}
      <motion.span
        className="absolute inset-0"
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          background:
            "radial-gradient(120% 140% at 18% 50%, #4a3fb0 0%, #241c7a 35%, #0d0940 65%, #05031f 100%)",
        }}
      />
      {/* ---- Day sky ---- */}
      <motion.span
        className="absolute inset-0"
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.35 }}
        style={{
          background:
            "radial-gradient(120% 140% at 82% 50%, #d8f0ff 0%, #7cc4f5 32%, #3ba0e8 68%, #1c72c4 100%)",
        }}
      />

      {/* ---- Stars (night) ---- */}
      {STARS.map((st, i) => (
        <motion.span
          key={`s${i}`}
          className="absolute"
          style={{
            left: `${st.x * 100}%`,
            top: `${st.y * 100}%`,
            marginLeft: -st.s / 2,
            marginTop: -st.s / 2,
          }}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.2,
          }}
          transition={{ duration: 0.3, delay: isDark ? 0.18 + i * 0.05 : 0 }}
        >
          <Sparkle size={st.s} />
        </motion.span>
      ))}

      {/* ---- Clouds (day) ---- */}
      {CLOUDS.map((c, i) => (
        <motion.span
          key={`c${i}`}
          className="absolute"
          style={{ left: `${c.x * 100}%`, top: `${c.y * 100}%` }}
          animate={{
            opacity: isDark ? 0 : 0.92,
            x: isDark ? -10 : 0,
          }}
          transition={{ duration: 0.35, delay: isDark ? 0 : 0.12 + i * 0.05 }}
        >
          <Cloud w={c.w} />
        </motion.span>
      ))}

      {/* ---- Knob: moon (left) <-> sun (right) ----
          The two faces are separate cross-fading layers because framer-motion
          cannot tween between gradient strings — animating `background`
          directly would snap rather than transition. */}
      <motion.span
        className="absolute rounded-full"
        style={{ width: KNOB, height: KNOB, top: PAD, left: PAD }}
        animate={{ x: isDark ? 0 : TRAVEL }}
        transition={spring}
      >
        {/* Moon */}
        <motion.span
          className="absolute inset-0 rounded-full overflow-hidden"
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #ffffff 0%, #ece7fb 45%, #c9c0e8 100%)",
            boxShadow:
              "0 0 12px 4px rgba(190,180,255,0.55), 0 2px 5px rgba(0,0,0,0.35)",
          }}
        >
          <svg viewBox="0 0 1 1" className="absolute inset-0 w-full h-full">
            {CRATERS.map((cr, i) => (
              <circle
                key={i}
                cx={cr.cx}
                cy={cr.cy}
                r={cr.r}
                fill="#c5bce0"
                opacity={0.75}
              />
            ))}
          </svg>
        </motion.span>

        {/* Sun */}
        <motion.span
          className="absolute inset-0 rounded-full"
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "radial-gradient(circle at 38% 32%, #fffdf2 0%, #ffe98f 45%, #ffc93f 100%)",
            boxShadow:
              "0 0 12px 4px rgba(255,214,92,0.8), 0 2px 5px rgba(0,0,0,0.2)",
          }}
        />
      </motion.span>
    </button>
  );
}
