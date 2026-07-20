import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Background } from "./Background";
import { Hook } from "./scenes/Hook";
import { Chrono } from "./scenes/Chrono";
import { Deroule } from "./scenes/Deroule";
import { Equipes } from "./scenes/Equipes";
import { Score } from "./scenes/Score";
import { SessionStats } from "./scenes/SessionStats";
import { Outro } from "./scenes/Outro";

// Strivn — « Séance en direct » motion-design ad (9:16, 27 s @ 30 fps).
export const SeanceLiveAd: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence name="Background">
        <Background />
      </Sequence>
      <Sequence name="1 · Hook" durationInFrames={105}>
        <Hook />
      </Sequence>
      <Sequence name="2 · Chrono" from={105} durationInFrames={165}>
        <Chrono />
      </Sequence>
      <Sequence name="3 · Déroulé" from={270} durationInFrames={135}>
        <Deroule />
      </Sequence>
      <Sequence name="4 · Équipes" from={405} durationInFrames={135}>
        <Equipes />
      </Sequence>
      <Sequence name="5 · Score" from={540} durationInFrames={135}>
        <Score />
      </Sequence>
      <Sequence name="6 · Stats joueurs" from={675} durationInFrames={135}>
        <SessionStats />
      </Sequence>
      <Sequence name="7 · Outro" from={810} durationInFrames={135}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
