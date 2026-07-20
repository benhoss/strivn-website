import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, EASE_OUT, FONT } from "../brand";

const R = 300;
const CIRC = 2 * Math.PI * R;

// Scene 2 — the block chrono: ring sweeps, clock counts, then 3·2·1 → GO.
export const Chrono: React.FC = () => {
  const frame = useCurrentFrame();

  // Clock counts from 0:00 upward while the ring sweeps.
  const seconds = Math.floor(interpolate(frame, [0, 80], [0, 12], { extrapolateRight: "clamp" }));
  const clock = `0:${String(seconds).padStart(2, "0")}`;

  // Countdown: 3 (f80), 2 (f95), 1 (f110), GO (f125+)
  const step = frame < 80 ? null : frame < 95 ? "3" : frame < 110 ? "2" : frame < 125 ? "1" : "GO";
  const stepStart = frame < 95 ? 80 : frame < 110 ? 95 : frame < 125 ? 110 : 125;

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
        name="Chrono headline"
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
        Le chrono rythme
        <br />
        vos blocs
      </Interactive.Div>

      <div style={{ position: "relative", marginTop: 90, width: 680, height: 680 }}>
        <svg width={680} height={680} style={{ rotate: "-90deg" }}>
          <circle cx={340} cy={340} r={R} stroke="rgba(255,255,255,0.10)" strokeWidth={26} fill="none" />
          <circle
            cx={340}
            cy={340}
            r={R}
            stroke={step === "GO" ? COLORS.green : COLORS.accentSoft}
            strokeWidth={26}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={CIRC}
            strokeDashoffset={interpolate(frame, [0, 125], [CIRC, CIRC * 0.25], {
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.4, 0, 0.4, 1),
            })}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {step === null ? (
            <span
              style={{
                color: COLORS.ink,
                fontSize: 170,
                fontWeight: 800,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: -4,
              }}
            >
              {clock}
            </span>
          ) : (
            <span
              style={{
                color: step === "GO" ? COLORS.green : COLORS.ink,
                fontSize: step === "GO" ? 230 : 260,
                fontWeight: 900,
                opacity: interpolate(frame - stepStart, [0, 3], [0, 1], {
                  extrapolateRight: "clamp",
                }),
                scale: String(
                  interpolate(frame - stepStart, [0, 6], [1.7, 1], {
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(...EASE_OUT),
                  })
                ),
              }}
            >
              {step === "GO" ? "GO !" : step}
            </span>
          )}
        </div>
      </div>

      <Interactive.Div
        name="Chrono caption"
        style={{
          marginTop: 80,
          color: COLORS.inkSub,
          fontSize: 48,
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.4,
          opacity: interpolate(frame, [16, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Décompte, <b style={{ color: COLORS.ink }}>son et vibration</b> —
        <br />
        même hors ligne.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
