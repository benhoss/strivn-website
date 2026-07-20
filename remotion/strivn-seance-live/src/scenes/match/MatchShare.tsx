import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../../brand";

// Match ad — scene 5: delegate the pen (scorer link) + families follow live.
export const MatchShare: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.3 * Math.sin(frame / 5);

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT,
        padding: 90,
        opacity: interpolate(frame, [0, 10, 140, 150], [0, 1, 1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <Interactive.Div
        name="Share headline"
        style={{
          color: COLORS.ink,
          fontSize: 88,
          fontWeight: 900,
          letterSpacing: -2,
          textAlign: "center",
          lineHeight: 1.08,
          translate: interpolate(frame, [0, 14], ["0px 40px", "0px 0px"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        Partagez le direct
      </Interactive.Div>

      <Interactive.Div
        name="Scorer link card"
        style={{
          marginTop: 100,
          width: 860,
          borderRadius: 30,
          border: "2px solid rgba(79,148,251,0.4)",
          background: "rgba(45,127,249,0.10)",
          padding: "44px 48px",
          opacity: interpolate(frame, [16, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
          translate: interpolate(frame, [16, 30], ["0px 70px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        <div style={{ color: COLORS.ink, fontSize: 52, fontWeight: 800 }}>🔗 Lien marqueur</div>
        <div style={{ color: COLORS.inkSub, fontSize: 42, fontWeight: 500, marginTop: 18, lineHeight: 1.4 }}>
          Un délégué note les événements pour vous — <b style={{ color: COLORS.ink }}>sans compte</b>.
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Live viewer card"
        style={{
          marginTop: 44,
          width: 860,
          borderRadius: 30,
          border: "2px solid rgba(255,255,255,0.12)",
          background: COLORS.card,
          padding: "44px 48px",
          opacity: interpolate(frame, [34, 48], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
          translate: interpolate(frame, [34, 48], ["0px 70px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: COLORS.red,
              scale: String(pulse),
            }}
          />
          <span style={{ color: COLORS.red, fontSize: 38, fontWeight: 900, letterSpacing: 4 }}>
            EN DIRECT
          </span>
          <span
            style={{
              marginLeft: "auto",
              color: COLORS.ink,
              fontSize: 62,
              fontWeight: 900,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            2 — 1
          </span>
        </div>
        <div style={{ color: COLORS.inkSub, fontSize: 42, fontWeight: 500, marginTop: 20, lineHeight: 1.4 }}>
          Les familles <b style={{ color: COLORS.ink }}>suivent le score en direct</b>, depuis un
          simple lien.
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
