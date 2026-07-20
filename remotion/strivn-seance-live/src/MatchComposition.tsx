import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Background } from "./Background";
import { MatchHook } from "./scenes/match/MatchHook";
import { MatchScore } from "./scenes/match/MatchScore";
import { MatchCounters } from "./scenes/match/MatchCounters";
import { MatchSubs } from "./scenes/match/MatchSubs";
import { MatchStats } from "./scenes/match/MatchStats";
import { Outro } from "./scenes/Outro";

// Strivn — « Match en direct » motion-design ad (9:16, 27 s @ 30 fps).
export const MatchLiveAd: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence name="Background">
        <Background />
      </Sequence>
      <Sequence name="1 · Hook" durationInFrames={105}>
        <MatchHook />
      </Sequence>
      <Sequence name="2 · Le score" from={105} durationInFrames={135}>
        <MatchScore />
      </Sequence>
      <Sequence name="3 · Stats qui décident" from={240} durationInFrames={165}>
        <MatchCounters />
      </Sequence>
      <Sequence name="4 · Décision" from={405} durationInFrames={135}>
        <MatchSubs />
      </Sequence>
      <Sequence name="5 · Stats plateforme" from={540} durationInFrames={135}>
        <MatchStats />
      </Sequence>
      <Sequence name="6 · Outro" from={675} durationInFrames={135}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
