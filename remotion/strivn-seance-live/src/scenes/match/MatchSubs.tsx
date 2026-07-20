import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../../brand";

const MINUTES = [
  { name: "Kylian Moreau", min: 64 },
  { name: "Hugo Petit", min: 48 },
  { name: "Léo Fontaine", min: 16 },
];

// Match ad — scene 3: substitutions + auto minutes.
export const MatchSubs: React.FC = () => {
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
        name="Subs headline"
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
        Décidez
        <br />
        au bon moment
      </Interactive.Div>

      <div style={{ marginTop: 90, display: "flex", flexDirection: "column", gap: 34, width: 860 }}>
        <Interactive.Div
          name="Sub out row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
            borderRadius: 28,
            border: "2px solid rgba(229,72,77,0.45)",
            background: "rgba(229,72,77,0.10)",
            padding: "36px 44px",
            opacity: interpolate(frame, [16, 28], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            }),
            translate: interpolate(frame, [16, 28], ["-120px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            }),
          }}
        >
          <span style={{ color: COLORS.red, fontSize: 52, fontWeight: 900 }}>▼</span>
          <span style={{ color: COLORS.inkSub, fontSize: 38, fontWeight: 700, width: 190 }}>Sortant</span>
          <span style={{ color: COLORS.ink, fontSize: 46, fontWeight: 800 }}>Hugo Petit</span>
        </Interactive.Div>

        <Interactive.Div
          name="Sub in row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
            borderRadius: 28,
            border: "2px solid rgba(52,211,153,0.45)",
            background: "rgba(52,211,153,0.10)",
            padding: "36px 44px",
            opacity: interpolate(frame, [30, 42], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            }),
            translate: interpolate(frame, [30, 42], ["120px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            }),
          }}
        >
          <span style={{ color: COLORS.green, fontSize: 52, fontWeight: 900 }}>▲</span>
          <span style={{ color: COLORS.inkSub, fontSize: 38, fontWeight: 700, width: 190 }}>Entrant</span>
          <span style={{ color: COLORS.ink, fontSize: 46, fontWeight: 800 }}>Léo Fontaine</span>
        </Interactive.Div>

        <Interactive.Div
          name="Minutes card"
          style={{
            borderRadius: 28,
            border: "2px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.04)",
            padding: "38px 44px",
            opacity: interpolate(frame, [52, 64], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            }),
            translate: interpolate(frame, [52, 64], ["0px 60px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            }),
          }}
        >
          <div
            style={{
              color: COLORS.accentLight,
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: 4,
              marginBottom: 26,
            }}
          >
            MINUTES JOUÉES
          </div>
          {MINUTES.map((m, i) => (
            <div
              key={m.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 0",
                opacity: interpolate(frame, [60 + i * 6, 70 + i * 6], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <span style={{ color: COLORS.ink, fontSize: 40, fontWeight: 600 }}>{m.name}</span>
              <span
                style={{
                  color: COLORS.inkSub,
                  fontSize: 40,
                  fontWeight: 800,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {Math.round(
                  m.min *
                    interpolate(frame, [60 + i * 6, 85 + i * 6], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: Easing.bezier(0, 0, 0.2, 1),
                    })
                )}{" "}
                min
              </span>
            </div>
          ))}
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Subs caption"
        style={{
          marginTop: 70,
          color: COLORS.inkSub,
          fontSize: 44,
          fontWeight: 500,
          textAlign: "center",
          opacity: interpolate(frame, [90, 102], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Temps de jeu en direct — <b style={{ color: COLORS.ink }}>qui doit souffler, qui doit entrer</b>.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
