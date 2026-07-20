import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../brand";

const ROWS = [
  { icon: "⚽", label: "Buts en opposition", value: 7 },
  { icon: "🎽", label: "Oppositions jouées", value: 12 },
];

const count = (frame: number, start: number, target: number) =>
  Math.round(
    target *
      interpolate(frame, [start, start + 24], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0, 0, 0.2, 1),
      })
  );

// Séance ad — scene 6: opposition stats are recorded, and players see them.
export const SessionStats: React.FC = () => {
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
        name="Session stats headline"
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
        Et vos joueurs
        <br />
        les voient
      </Interactive.Div>

      <Interactive.Div
        name="Player portal card"
        style={{
          marginTop: 100,
          width: 820,
          borderRadius: 30,
          border: "2px solid rgba(255,255,255,0.12)",
          background: COLORS.card,
          padding: "44px 48px",
          opacity: interpolate(frame, [14, 28], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
          translate: interpolate(frame, [14, 28], ["0px 70px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: "50%",
              background: "rgba(45,127,249,0.2)",
              border: "2px solid rgba(79,148,251,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: COLORS.accentLight,
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            KM
          </div>
          <div>
            <div style={{ color: COLORS.ink, fontSize: 44, fontWeight: 800 }}>Kylian Moreau</div>
            <div
              style={{
                color: COLORS.accentLight,
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: 3,
                marginTop: 6,
              }}
            >
              TES STATS D'ENTRAÎNEMENT
            </div>
          </div>
        </div>
        {ROWS.map((r, i) => (
          <div
            key={r.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              padding: "30px 0",
              borderTop: i === 0 ? "1.5px solid rgba(255,255,255,0.10)" : "1.5px solid rgba(255,255,255,0.06)",
              marginTop: i === 0 ? 36 : 0,
              opacity: interpolate(frame, [34 + i * 10, 46 + i * 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [34 + i * 10, 46 + i * 10], ["60px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(...EASE_OUT),
              }),
            }}
          >
            <span style={{ fontSize: 52 }}>{r.icon}</span>
            <span style={{ flex: 1, color: COLORS.ink, fontSize: 44, fontWeight: 600 }}>
              {r.label}
            </span>
            <span
              style={{
                color: COLORS.accentLight,
                fontSize: 66,
                fontWeight: 900,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {count(frame, 40 + i * 10, r.value)}
            </span>
          </div>
        ))}
      </Interactive.Div>

      <Interactive.Div
        name="Session stats caption"
        style={{
          marginTop: 74,
          color: COLORS.inkSub,
          fontSize: 46,
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.4,
          opacity: interpolate(frame, [72, 86], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Chaque but d'opposition est <b style={{ color: COLORS.ink }}>comptabilisé</b> —
        <br />
        visible dans <b style={{ color: COLORS.ink }}>leur portail</b>.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
