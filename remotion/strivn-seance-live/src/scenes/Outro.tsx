import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../brand";

// Scene 6 — outro: logo, app-coming pill, big domain, free plan line.
export const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT,
        padding: 90,
        opacity: interpolate(frame, [0, 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <Img
        src={staticFile("strivn-logo.png")}
        style={{
          width: 420,
          scale: String(
            interpolate(frame, [0, 18], [0.7, 1], {
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            })
          ),
        }}
      />

      <Interactive.Div
        name="App pill"
        style={{
          marginTop: 90,
          borderRadius: 999,
          border: `2px solid rgba(79,148,251,0.4)`,
          background: "rgba(45,127,249,0.14)",
          color: COLORS.inkSub,
          fontSize: 42,
          fontWeight: 700,
          padding: "24px 46px",
          textAlign: "center",
          maxWidth: 760,
          lineHeight: 1.35,
          opacity: interpolate(frame, [14, 28], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
          translate: interpolate(frame, [14, 28], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        📲 <b style={{ color: COLORS.ink }}>L'app coach arrive</b> — en validation sur les
        stores
      </Interactive.Div>

      <Interactive.Div
        name="Domain"
        style={{
          marginTop: 70,
          fontSize: 140,
          fontWeight: 900,
          letterSpacing: -3,
          background: `linear-gradient(90deg, ${COLORS.accentSoft}, ${COLORS.accentLight})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          opacity: interpolate(frame, [30, 44], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
          scale: String(
            interpolate(frame, [30, 48], [1.15, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            })
          ),
        }}
      >
        strivn.net
      </Interactive.Div>

      <Interactive.Div
        name="Free line"
        style={{
          marginTop: 50,
          color: COLORS.inkSub,
          fontSize: 48,
          fontWeight: 500,
          opacity: interpolate(frame, [48, 62], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        🚀 Gratuit pour une équipe
      </Interactive.Div>
    </AbsoluteFill>
  );
};
