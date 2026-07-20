import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../brand";

const BLOCKS = [
  { n: 1, label: "Échauffement + activation", min: "15 min" },
  { n: 2, label: "Passing — jeu en losange", min: "15 min" },
  { n: 3, label: "Jeu réduit 8v8 — pressing", min: "25 min" },
  { n: 4, label: "Retour au calme", min: "10 min" },
];

// Scene 3 — the déroulé: blocks cascade in, the active highlight sweeps down.
export const Deroule: React.FC = () => {
  const frame = useCurrentFrame();
  // Which block is highlighted: sweeps 0→3 between f55 and f115.
  const active = Math.min(
    3,
    Math.floor(interpolate(frame, [55, 115], [0, 4], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }))
  );

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT,
        padding: 90,
        opacity: interpolate(frame, [0, 10, 125, 135], [0, 1, 1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <Interactive.Div
        name="Deroule headline"
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
        Votre déroulé
        <br />
        se joue tout seul
      </Interactive.Div>

      <div style={{ marginTop: 90, display: "flex", flexDirection: "column", gap: 34, width: 860 }}>
        {BLOCKS.map((b, i) => (
          <div
            key={b.n}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 34,
              borderRadius: 28,
              border: `2px solid ${active === i ? "rgba(79,148,251,0.65)" : "rgba(255,255,255,0.10)"}`,
              background: active === i ? "rgba(45,127,249,0.16)" : "rgba(255,255,255,0.04)",
              padding: "38px 44px",
              opacity: interpolate(frame, [10 + i * 8, 22 + i * 8], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(...EASE_OUT),
              }),
              translate: interpolate(
                frame,
                [10 + i * 8, 22 + i * 8],
                ["120px 0px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(...EASE_OUT),
                }
              ),
              scale: String(active === i ? 1.04 : 1),
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: active === i ? COLORS.accent : "rgba(255,255,255,0.10)",
                color: COLORS.ink,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              {b.n}
            </div>
            <span style={{ color: COLORS.ink, fontSize: 42, fontWeight: 700, flex: 1 }}>{b.label}</span>
            <span style={{ color: COLORS.inkDim, fontSize: 36, fontWeight: 700 }}>{b.min}</span>
          </div>
        ))}
      </div>

      <Interactive.Div
        name="Deroule caption"
        style={{
          marginTop: 80,
          color: COLORS.inkSub,
          fontSize: 44,
          fontWeight: 500,
          textAlign: "center",
          opacity: interpolate(frame, [50, 64], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Continu · <b style={{ color: COLORS.ink }}>intervalles</b> ·{" "}
        <b style={{ color: COLORS.ink }}>opposition</b> · circuit
      </Interactive.Div>
    </AbsoluteFill>
  );
};
