"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useState, useEffect } from "react";

export default function OscilloscopeWave() {
  const [phase, setPhase] = useState(0);
  const [amp, setAmp] = useState(30); // amplitude
  const [pathData, setPathData] = useState("");

  // Generate initial sine wave path on mount
  useEffect(() => {
    const width = 300;
    const height = 150;
    const phase = 0;
    const amp = 30;
    const points = [];
    for (let x = 0; x <= width; x += 5) {
      const y =
        height / 2 +
        amp * Math.sin((x / width) * 4 * Math.PI + phase) +
        5 * Math.sin((x / width) * 12 * Math.PI + phase * 1.5);
      points.push([x, y]);
    }
    const d = "M " + points.map((p) => `${p[0]},${p[1]}`).join(" L ");
    setPathData(d);
  }, []);

  // Animate wave phase + amplitude
  useAnimationFrame((t) => {
    const time = t / 1000; // seconds
    const newPhase = time * 2; // speed of wave
    const newAmp = 20 + 10 * Math.sin(time * 0.7); // smoothly varying amplitude
    setPhase(newPhase);
    setAmp(newAmp);

    const width = 300;
    const height = 150;
    const points = [];
    for (let x = 0; x <= width; x += 5) {
      const y =
        height / 2 +
        newAmp * Math.sin((x / width) * 4 * Math.PI + newPhase) +
        5 * Math.sin((x / width) * 12 * Math.PI + newPhase * 1.5); // add variance
      points.push([x, y]);
    }

    const pathData = "M " + points.map((p) => `${p[0]},${p[1]}`).join(" L ");

    setPathData(pathData);
  });

  return (
    <div
      className="p-4 rounded-xl shadow-lg drop-shadow-lg w-3/4 flex items-center justify-center mx-auto mt-8"
      style={{
        background: "linear-gradient(180deg, #9A9493 0%, #635E5D 100%)",
        boxShadow: "0 0 24px 2px #222 inset, 0 0 8px 2px #fff inset",
      }}
    >
      <svg
        viewBox="0 0 300 150"
        style={{ borderRadius: "12px", background: "rgba(30,30,30,0.7)" }}
      >
        {/* Grid lines */}
        <g stroke="#888" strokeWidth="0.5">
          {/* Vertical grid lines */}
          {[...Array(7)].map((_, i) => (
            <line key={"v" + i} x1={i * 50} y1={0} x2={i * 50} y2={150} />
          ))}
          {/* Horizontal grid lines */}
          {[...Array(6)].map((_, i) => (
            <line key={"h" + i} x1={0} y1={i * 30} x2={300} y2={i * 30} />
          ))}
        </g>
        {/* Sine wave */}
        <motion.path
          stroke="#00FF66"
          strokeWidth="2"
          fill="none"
          initial={false}
          d={pathData}
          style={{ filter: "drop-shadow(0 0 2px #00FF66)" }}
        />
        {/* Subtle vignette for CRT effect */}
        <rect
          x="0"
          y="0"
          width="300"
          height="150"
          rx="12"
          fill="url(#vignette)"
          pointerEvents="none"
        />
        <defs>
          <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
            <stop offset="80%" stopColor="transparent" />
            <stop offset="100%" stopColor="#222" stopOpacity="0.35" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
