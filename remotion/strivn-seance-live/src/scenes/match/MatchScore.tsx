import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../../brand";

const DIM_AT = 58; // the scoreboard steps back, the punchline takes over

// Match ad — scene 2: the anti-hook. You already know the score — the rest wins games.
export const MatchScore: React.FC = () => {
  const frame = useCurrentFrame();
  const dim = interpolate(frame, [DIM_AT, DIM_AT + 14], [1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...EASE_OUT),
  });

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
        name="Score headline"
        style={{
          color: COLORS.ink,
          fontSize: 88,
          fontWeight: 900,
          letterSpacing: -2,
          textAlign: "center",
          lineHeight: 1.1,
          translate: interpolate(frame, [0, 14], ["0px 40px", "0px 0px"], {
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        Le score ?
        <br />
        Vous l'avez de tête.
      </Interactive.Div>

      <Interactive.Div
        name="Scoreboard card"
        style={{
          marginTop: 100,
          width: 820,
          borderRadius: 34,
          border: "2px solid rgba(255,255,255,0.12)",
          background: COLORS.card,
          padding: "50px 50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity:
            interpolate(frame, [12, 26], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            }) * dim,
          scale: String(
            interpolate(frame, [DIM_AT, DIM_AT + 14], [1, 0.93], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            })
          ),
        }}
      >
        <div style={{ textAlign: "center", flex: 1 }}>
          <div style={{ color: COLORS.inkSub, fontSize: 38, fontWeight: 700 }}>Falcons</div>
          <div
            style={{
              color: COLORS.ink,
              fontSize: 160,
              fontWeight: 900,
              lineHeight: 1.05,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            2
          </div>
        </div>
        <div style={{ color: COLORS.inkDim, fontSize: 80, fontWeight: 800 }}>—</div>
        <div style={{ textAlign: "center", flex: 1 }}>
          <div style={{ color: COLORS.inkSub, fontSize: 38, fontWeight: 700 }}>Adversaire</div>
          <div
            style={{
              color: COLORS.ink,
              fontSize: 160,
              fontWeight: 900,
              lineHeight: 1.05,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            1
          </div>
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Score punchline"
        style={{
          marginTop: 90,
          color: COLORS.accentLight,
          fontSize: 66,
          fontWeight: 800,
          letterSpacing: -1,
          textAlign: "center",
          lineHeight: 1.2,
          maxWidth: 860,
          opacity: interpolate(frame, [DIM_AT + 8, DIM_AT + 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
          translate: interpolate(
            frame,
            [DIM_AT + 8, DIM_AT + 22],
            ["0px 40px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...EASE_OUT),
            }
          ),
        }}
      >
        Ce qui décide du match,
        <br />
        c'est le reste.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
