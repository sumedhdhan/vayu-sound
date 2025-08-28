"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PickupCarousel() {
  const pickups = [
    {
      id: "single",
      width: 220,
      height: 120,
      bodyHeight: 50,
      bodyY: 20,
      maskId: "mask-single",
      clipId: "clip-single",
      svg: (
        <>
          <defs>
            <mask id="mask-single">
              <rect width="220" height="120" fill="white" />
              {[30, 62, 94, 126, 158, 190].map((cx) => (
                <circle key={cx} cx={cx} cy="45" r="6" fill="black" />
              ))}
            </mask>

            <clipPath id="clip-single">
              <rect x="10" y="20" width="200" height="50" rx="30" />
            </clipPath>

            <linearGradient id="metal-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#23272a" />
              <stop offset="40%" stopColor="#343a40" />
              <stop offset="60%" stopColor="#222326" />
              <stop offset="100%" stopColor="#111113" />
            </linearGradient>

            <linearGradient id="shimmer-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.32)" />
              <stop offset="65%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          <rect
            x="10"
            y="20"
            width="200"
            height="50"
            rx="30"
            fill="url(#metal-gradient)"
            mask="url(#mask-single)"
          />
          {/* Polepieces for single coil */}
          {[30, 62, 94, 126, 158, 190].map((cx) => (
            <circle key={cx} cx={cx} cy="45" r="6" fill="#7a7a7a" />
          ))}
        </>
      ),
      shimmerFill: "url(#shimmer-gradient)",
    },
    {
      id: "humbucker",
      width: 220,
      height: 120,
      bodyHeight: 40,
      bodyY: 20,
      maskId: "mask-humbucker",
      clipId: "clip-humbucker",
      svg: (
        <>
          <defs>
            <mask id="mask-humbucker">
              <rect width="220" height="120" fill="white" />
              {[30, 62, 94, 126, 158, 190].map((cx) => (
                <circle key={"t" + cx} cx={cx} cy="40" r="6" fill="black" />
              ))}
              {[30, 62, 94, 126, 158, 190].map((cx) => (
                <circle key={"b" + cx} cx={cx} cy="80" r="6" fill="black" />
              ))}
            </mask>

            <clipPath id="clip-humbucker">
              <rect x="10" y="20" width="200" height="40" rx="20" />
              <rect x="10" y="60" width="200" height="40" rx="20" />
            </clipPath>

            <linearGradient id="metal-humbucker" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#23272a" />
              <stop offset="40%" stopColor="#343a40" />
              <stop offset="60%" stopColor="#222326" />
              <stop offset="100%" stopColor="#111113" />
            </linearGradient>

            <linearGradient id="shimmer-humbucker" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.32)" />
              <stop offset="65%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          <rect
            x="10"
            y="20"
            width="200"
            height="40"
            rx="20"
            fill="url(#metal-humbucker)"
            mask="url(#mask-humbucker)"
          />
          {/* Polepieces for humbucker top row */}
          {[30, 62, 94, 126, 158, 190].map((cx) => (
            <circle key={"t" + cx} cx={cx} cy="40" r="6" fill="#7a7a7a" />
          ))}
          <rect
            x="10"
            y="60"
            width="200"
            height="40"
            rx="20"
            fill="url(#metal-humbucker)"
            mask="url(#mask-humbucker)"
          />
          {/* Polepieces for humbucker bottom row */}
          {[30, 62, 94, 126, 158, 190].map((cx) => (
            <circle key={"b" + cx} cx={cx} cy="80" r="6" fill="#7a7a7a" />
          ))}
        </>
      ),
      shimmerFill: "url(#shimmer-humbucker)",
    },
    {
      id: "covered",
      width: 220,
      height: 120,
      bodyHeight: 90,
      bodyY: 20,
      maskId: "mask-covered",
      clipId: "clip-covered",
      svg: (
        <>
          <defs>
            <mask id="mask-covered">
              <rect width="220" height="120" fill="white" />
              {[30, 62, 94, 126, 158, 190].map((cx) => (
                <circle key={cx} cx={cx} cy="80" r="6" fill="black" />
              ))}
            </mask>

            <clipPath id="clip-covered">
              <rect x="10" y="20" width="200" height="90" rx="20" />
            </clipPath>

            <linearGradient id="metal-covered" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8c753a" />
              <stop offset="20%" stopColor="#6e5927" />
              <stop offset="50%" stopColor="#4d3c1a" />
              <stop offset="80%" stopColor="#6e5927" />
              <stop offset="100%" stopColor="#8c753a" />
            </linearGradient>

            <linearGradient id="shimmer-covered" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.32)" />
              <stop offset="65%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          <rect
            x="10"
            y="20"
            width="200"
            height="90"
            rx="20"
            fill="url(#metal-covered)"
            mask="url(#mask-covered)"
          />
          {/* Polepieces for covered pickup */}
          {[30, 62, 94, 126, 158, 190].map((cx) => (
            <circle key={cx} cx={cx} cy="80" r="6" fill="#7a7a7a" />
          ))}
        </>
      ),
      shimmerFill: "url(#shimmer-covered)",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleShimmerComplete = () => {
    setIndex((prev) => (prev + 1) % pickups.length);
  };

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pickups[index].id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${pickups[index].width} ${pickups[index].height}`}
            width={pickups[index].width}
            height={pickups[index].height}
          >
            {pickups[index].svg}

            {/* Shimmer overlay */}
            <g clipPath={`url(#${pickups[index].clipId})`}>
              {pickups[index].id === "humbucker" ? (
                <>
                  <motion.rect
                    x={-80}
                    y={20}
                    width={80}
                    height={40}
                    fill="url(#shimmer-humbucker)"
                    initial={{ x: -80 }}
                    animate={{ x: 295 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    onAnimationComplete={handleShimmerComplete}
                  />
                  <motion.rect
                    x={-80}
                    y={60}
                    width={80}
                    height={40}
                    fill="url(#shimmer-humbucker)"
                    initial={{ x: -80 }}
                    animate={{ x: 300 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </>
              ) : (
                <motion.rect
                  x={-80}
                  y={pickups[index].bodyY}
                  width={80}
                  height={pickups[index].bodyHeight}
                  fill={pickups[index].shimmerFill}
                  initial={{ x: -80 }}
                  animate={{ x: 300 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  onAnimationComplete={handleShimmerComplete}
                />
              )}
            </g>
          </svg>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
