import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../../brand";

const MOMENTS = [
  { icon: "⚽", label: "But", border: "rgba(52,211,153,0.45)", bg: "rgba(52,211,153,0.10)" },
  { icon: "🟨", label: "Carton jaune", border: "rgba(245,166,35,0.5)", bg: "rgba(245,166,35,0.10)" },
  { icon: "🟥", label: "Carton rouge", border: "rgba(229,72,77,0.5)", bg: "rgba(229,72,77,0.10)" },
  { icon: "🚑", label: "Blessure", border: "rgba(255,255,255,0.18)", bg: "rgba(255,255,255,0.05)" },
];

// Match ad — scene 4: every match moment, one gesture each.
export const MatchMoments: React.FC = () => {
  const frame = useCurrentFrame();

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
        name="Moments headline"
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
        Chaque moment
        <br />
        du match
      </Interactive.Div>

      <div style={{ marginTop: 100, display: "flex", flexDirection: "column", gap: 36, width: 780 }}>
        {MOMENTS.map((m, i) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 36,
              borderRadius: 28,
              border: `2px solid ${m.border}`,
              background: m.bg,
              padding: "38px 48px",
              opacity: interpolate(frame, [14 + i * 10, 26 + i * 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(...EASE_OUT),
              }),
              scale: String(
                interpolate(frame, [14 + i * 10, 28 + i * 10], [0.75, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(...EASE_OUT),
                })
              ),
            }}
          >
            <span style={{ fontSize: 64 }}>{m.icon}</span>
            <span style={{ color: COLORS.ink, fontSize: 52, fontWeight: 800 }}>{m.label}</span>
            <span
              style={{
                marginLeft: "auto",
                color: COLORS.inkDim,
                fontSize: 36,
                fontWeight: 700,
              }}
            >
              1 tap
            </span>
          </div>
        ))}
      </div>

      <Interactive.Div
        name="Moments caption"
        style={{
          marginTop: 80,
          color: COLORS.inkSub,
          fontSize: 44,
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.4,
          opacity: interpolate(frame, [70, 84], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Tout est capté, rien n'est perdu —
        <br />
        corrigez, puis <b style={{ color: COLORS.ink }}>« Valider le match »</b>.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
