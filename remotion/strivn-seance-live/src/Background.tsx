import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "./brand";

// Persistent brand backdrop: deep navy radial + a slow drifting blue glow +
// the signature bottom gradient bar.
export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(120% 70% at 80% 0%, ${COLORS.bgTop} 0%, ${COLORS.bgMid} 45%, ${COLORS.bgDeep} 100%)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(45,127,249,0.16) 0%, rgba(45,127,249,0) 70%)`,
          left: interpolate(frame, [0, 780], [-350, 550]),
          top: interpolate(frame, [0, 780], [1150, -250]),
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 12,
          background: `linear-gradient(90deg, ${COLORS.accent} 0%, ${COLORS.accentSoft} 50%, ${COLORS.accentLight} 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};
