import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../brand";

// Tap moments (scene-relative frames): team index + frame of the tap.
const TAPS = [
  { team: 0, at: 40 },
  { team: 1, at: 62 },
  { team: 0, at: 84 },
];

const scoreAt = (team: 0 | 1, frame: number) =>
  TAPS.filter((t) => t.team === team && frame >= t.at).length;

// A tap gives the zone a quick bump + an expanding ripple ring.
const bump = (frame: number, at: number) =>
  interpolate(frame, [at, at + 3, at + 10], [1, 1.09, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...EASE_OUT),
  });

const ScoreZone: React.FC<{
  name: string;
  bg: string;
  score: number;
  frame: number;
  taps: number[];
}> = ({ name, bg, score, frame, taps }) => {
  const lastTap = taps.filter((t) => frame >= t).pop();
  return (
    <div
      style={{
        position: "relative",
        flex: 1,
        borderRadius: 34,
        background: bg,
        padding: "54px 20px 60px",
        textAlign: "center",
        overflow: "hidden",
        scale: String(lastTap === undefined ? 1 : bump(frame, lastTap)),
      }}
    >
      {lastTap !== undefined && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 300,
            height: 300,
            marginLeft: -150,
            marginTop: -150,
            borderRadius: "50%",
            border: "6px solid rgba(255,255,255,0.65)",
            opacity: interpolate(frame, [lastTap, lastTap + 14], [0.8, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: String(
              interpolate(frame, [lastTap, lastTap + 14], [0.3, 1.5], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0, 0, 0.2, 1),
              })
            ),
          }}
        />
      )}
      <div style={{ color: "rgba(255,255,255,0.92)", fontSize: 46, fontWeight: 800 }}>
        {name} <span style={{ fontWeight: 600, opacity: 0.75 }}>(4)</span>
      </div>
      <div
        style={{
          color: "#ffffff",
          fontSize: 210,
          fontWeight: 900,
          lineHeight: 1.05,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {score}
      </div>
    </div>
  );
};

// Scene 5 — goal counting: tap → ripple → score bumps, undo pill appears.
export const Score: React.FC = () => {
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
        name="Score headline"
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
        Comptez les buts
        <br />
        d'un doigt
      </Interactive.Div>

      <div
        style={{
          marginTop: 100,
          display: "flex",
          gap: 40,
          width: 900,
          opacity: interpolate(frame, [12, 26], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        <ScoreZone
          name="Rouge"
          bg={COLORS.red}
          score={scoreAt(0, frame)}
          frame={frame}
          taps={TAPS.filter((t) => t.team === 0).map((t) => t.at)}
        />
        <ScoreZone
          name="Bleu"
          bg={COLORS.accent}
          score={scoreAt(1, frame)}
          frame={frame}
          taps={TAPS.filter((t) => t.team === 1).map((t) => t.at)}
        />
      </div>

      <Interactive.Div
        name="Undo pill"
        style={{
          marginTop: 60,
          borderRadius: 999,
          background: "rgba(255,255,255,0.95)",
          color: COLORS.accent,
          fontSize: 38,
          fontWeight: 800,
          padding: "22px 44px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
          opacity: interpolate(frame, [88, 98], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [88, 98], ["0px 30px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...EASE_OUT),
          }),
        }}
      >
        <span style={{ color: "#0b0f20", fontWeight: 700 }}>Rouge +1</span>
        &nbsp;&nbsp;·&nbsp;&nbsp;Annuler le point
      </Interactive.Div>

      <Interactive.Div
        name="Score caption"
        style={{
          marginTop: 70,
          color: COLORS.inkSub,
          fontSize: 44,
          fontWeight: 500,
          textAlign: "center",
          opacity: interpolate(frame, [100, 112], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Adapté à votre sport — <b style={{ color: COLORS.ink }}>basket +1/+2/+3</b>,{" "}
        <b style={{ color: COLORS.ink }}>rugby essai/transfo</b>…
      </Interactive.Div>
    </AbsoluteFill>
  );
};
