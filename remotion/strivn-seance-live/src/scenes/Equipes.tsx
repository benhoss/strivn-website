import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../brand";

const ROUGE = ["Hugo Petit", "Nathan Dupont", "Thomas Dubois", "Léo Fontaine"];
const BLEU = ["Arthur Leroy", "Lucas Martin", "Maxime Bernard", "Kylian Moreau"];

const TeamCard: React.FC<{
  name: string;
  color: string;
  bg: string;
  border: string;
  players: string[];
  frame: number;
  delay: number;
}> = ({ name, color, bg, border, players, frame, delay }) => (
  <div
    style={{
      borderRadius: 30,
      border: `2px solid ${border}`,
      background: bg,
      padding: "40px 44px",
      opacity: interpolate(frame, [delay, delay + 12], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(...EASE_OUT),
      }),
      translate: interpolate(frame, [delay, delay + 12], ["0px 90px", "0px 0px"], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(...EASE_OUT),
      }),
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <div style={{ width: 34, height: 34, borderRadius: "50%", background: color }} />
      <span style={{ color: COLORS.ink, fontSize: 50, fontWeight: 800 }}>{name}</span>
      <span style={{ marginLeft: "auto", color: COLORS.inkDim, fontSize: 40, fontWeight: 700 }}>4</span>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 18, marginTop: 30 }}>
      {players.map((p, i) => (
        <span
          key={p}
          style={{
            borderRadius: 999,
            border: "1.5px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.05)",
            color: COLORS.inkSub,
            fontSize: 33,
            fontWeight: 600,
            padding: "14px 28px",
            opacity: interpolate(frame, [delay + 8 + i * 5, delay + 16 + i * 5], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: String(
              interpolate(frame, [delay + 8 + i * 5, delay + 16 + i * 5], [0.6, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(...EASE_OUT),
              })
            ),
          }}
        >
          {p}
        </span>
      ))}
    </div>
  </div>
);

// Scene 4 — team composition: two chasuble cards fill with player chips.
export const Equipes: React.FC = () => {
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
        name="Equipes headline"
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
        Composez vos équipes
        <br />
        en un geste
      </Interactive.Div>

      <div style={{ marginTop: 90, display: "flex", flexDirection: "column", gap: 44, width: 880 }}>
        <TeamCard
          name="Rouge"
          color={COLORS.red}
          bg="rgba(229,72,77,0.12)"
          border="rgba(229,72,77,0.45)"
          players={ROUGE}
          frame={frame}
          delay={14}
        />
        <TeamCard
          name="Bleu"
          color={COLORS.accent}
          bg="rgba(45,127,249,0.12)"
          border="rgba(45,127,249,0.5)"
          players={BLEU}
          frame={frame}
          delay={30}
        />
      </div>

      <Interactive.Div
        name="Equipes caption"
        style={{
          marginTop: 80,
          color: COLORS.inkSub,
          fontSize: 44,
          fontWeight: 500,
          textAlign: "center",
          opacity: interpolate(frame, [70, 84], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Répartition automatique en <b style={{ color: COLORS.ink }}>2, 3 ou 4 équipes</b>.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
