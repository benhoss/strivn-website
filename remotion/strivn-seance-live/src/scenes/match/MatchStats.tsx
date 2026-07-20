import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../../brand";

const ROWS = [
  { name: "Kylian Moreau", buts: 2, passes: 1, min: 64 },
  { name: "Lucas Martin", buts: 0, passes: 1, min: 71 },
  { name: "Hugo Petit", buts: 0, passes: 0, min: 48 },
];

const count = (frame: number, start: number, target: number) =>
  Math.round(
    target *
      interpolate(frame, [start, start + 22], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0, 0, 0.2, 1),
      })
  );

// Match ad — scene 5: every event lands in the platform's season stats.
export const MatchStats: React.FC = () => {
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
        name="Stats headline"
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
        Toutes les stats
        <br />
        dans la plateforme
      </Interactive.Div>

      <Interactive.Div
        name="Stats table"
        style={{
          marginTop: 100,
          width: 880,
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
        <div
          style={{
            display: "flex",
            color: COLORS.accentLight,
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: 4,
            paddingBottom: 24,
            borderBottom: "1.5px solid rgba(255,255,255,0.10)",
          }}
        >
          <span style={{ flex: 1 }}>STATS JOUEURS</span>
          <span style={{ width: 130, textAlign: "center" }}>⚽</span>
          <span style={{ width: 130, textAlign: "center" }}>🎯</span>
          <span style={{ width: 150, textAlign: "right" }}>MIN</span>
        </div>
        {ROWS.map((r, i) => (
          <div
            key={r.name}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "26px 0",
              borderBottom: i < ROWS.length - 1 ? "1.5px solid rgba(255,255,255,0.06)" : "none",
              opacity: interpolate(frame, [28 + i * 8, 40 + i * 8], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [28 + i * 8, 40 + i * 8], ["60px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(...EASE_OUT),
              }),
            }}
          >
            <span style={{ flex: 1, color: COLORS.ink, fontSize: 42, fontWeight: 700 }}>
              {r.name}
            </span>
            <span
              style={{
                width: 130,
                textAlign: "center",
                color: r.buts > 0 ? COLORS.green : COLORS.inkDim,
                fontSize: 44,
                fontWeight: 800,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {count(frame, 34 + i * 8, r.buts)}
            </span>
            <span
              style={{
                width: 130,
                textAlign: "center",
                color: r.passes > 0 ? COLORS.accentLight : COLORS.inkDim,
                fontSize: 44,
                fontWeight: 800,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {count(frame, 34 + i * 8, r.passes)}
            </span>
            <span
              style={{
                width: 150,
                textAlign: "right",
                color: COLORS.inkSub,
                fontSize: 44,
                fontWeight: 800,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {count(frame, 34 + i * 8, r.min)}
            </span>
          </div>
        ))}
      </Interactive.Div>

      <Interactive.Div
        name="Stats caption"
        style={{
          marginTop: 70,
          color: COLORS.inkSub,
          fontSize: 46,
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.4,
          opacity: interpolate(frame, [80, 94], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Tirs, corners, buts, minutes, cartons —
        <br />
        <b style={{ color: COLORS.ink }}>suivis toute la saison</b>.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
