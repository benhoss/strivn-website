import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../../brand";

// Match ad — scene 1: match-day badge, then the title punches in.
export const MatchHook: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.25 * Math.sin(frame / 5);

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT,
        padding: 90,
        opacity: interpolate(frame, [90, 105], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <Interactive.Div
        name="Matchday badge"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 22,
          borderRadius: 999,
          border: `2px solid rgba(79,148,251,0.4)`,
          background: "rgba(45,127,249,0.14)",
          padding: "22px 46px",
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
          translate: interpolate(frame, [0, 12], ["0px 40px", "0px 0px"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: COLORS.red,
            scale: String(pulse),
          }}
        />
        <span
          style={{
            color: COLORS.accentLight,
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: 8,
          }}
        >
          JOUR DE MATCH
        </span>
      </Interactive.Div>

      <Interactive.Div
        name="Match hook title"
        style={{
          marginTop: 70,
          textAlign: "center",
          color: COLORS.ink,
          fontSize: 128,
          lineHeight: 1.04,
          fontWeight: 900,
          letterSpacing: -3,
          opacity: interpolate(frame, [14, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
          scale: String(
            interpolate(frame, [14, 34], [1.25, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            })
          ),
        }}
      >
        Les stats du match,
        <br />
        <span style={{ color: COLORS.accentLight }}>en direct</span>
      </Interactive.Div>

      <Interactive.Div
        name="Match hook subtitle"
        style={{
          marginTop: 60,
          color: COLORS.inkSub,
          fontSize: 52,
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.35,
          maxWidth: 820,
          opacity: interpolate(frame, [40, 55], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
          translate: interpolate(frame, [40, 55], ["0px 30px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        Pour décider au bon moment, au bord du terrain.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
