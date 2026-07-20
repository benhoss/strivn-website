import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../../brand";

// Real football counter palette (MatchEventCatalog): tracked one tap per side.
const COUNTERS = [
  { label: "Tirs cadrés", us: 7, them: 3 },
  { label: "Corners", us: 5, them: 2 },
  { label: "Fautes", us: 8, them: 12 },
];

const count = (frame: number, start: number, target: number) =>
  Math.round(
    target *
      interpolate(frame, [start, start + 26], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0, 0, 0.2, 1),
      })
  );

// Match ad — scene 3: the secondary stats that actually win games.
export const MatchCounters: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT,
        padding: 90,
        opacity: interpolate(frame, [0, 10, 155, 165], [0, 1, 1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <Interactive.Div
        name="Counters headline"
        style={{
          color: COLORS.ink,
          fontSize: 92,
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
        Les stats
        <br />
        qui décident
      </Interactive.Div>

      <div style={{ marginTop: 100, display: "flex", flexDirection: "column", gap: 40, width: 880 }}>
        <div
          style={{
            display: "flex",
            padding: "0 48px",
            color: COLORS.inkDim,
            fontSize: 32,
            fontWeight: 800,
            letterSpacing: 4,
            opacity: interpolate(frame, [12, 24], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <span style={{ width: 150, color: COLORS.accentLight }}>NOUS</span>
          <span style={{ flex: 1, textAlign: "center" }} />
          <span style={{ width: 150, textAlign: "right" }}>EUX</span>
        </div>
        {COUNTERS.map((c, i) => (
          <div
            key={c.label}
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 28,
              border: "2px solid rgba(255,255,255,0.10)",
              background: COLORS.card,
              padding: "40px 48px",
              opacity: interpolate(frame, [16 + i * 10, 28 + i * 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(...EASE_OUT),
              }),
              translate: interpolate(
                frame,
                [16 + i * 10, 28 + i * 10],
                ["0px 70px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(...EASE_OUT),
                }
              ),
            }}
          >
            <span
              style={{
                width: 150,
                color: COLORS.accentLight,
                fontSize: 76,
                fontWeight: 900,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {count(frame, 24 + i * 10, c.us)}
            </span>
            <span
              style={{
                flex: 1,
                textAlign: "center",
                color: COLORS.ink,
                fontSize: 46,
                fontWeight: 700,
              }}
            >
              {c.label}
            </span>
            <span
              style={{
                width: 150,
                textAlign: "right",
                color: COLORS.inkSub,
                fontSize: 76,
                fontWeight: 900,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {count(frame, 24 + i * 10, c.them)}
            </span>
          </div>
        ))}
      </div>

      <Interactive.Div
        name="Counters caption"
        style={{
          marginTop: 80,
          color: COLORS.inkSub,
          fontSize: 46,
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.4,
          opacity: interpolate(frame, [70, 84], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Un tap nous, un tap eux —
        <br />
        <b style={{ color: COLORS.ink }}>sans quitter le match des yeux</b>.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
