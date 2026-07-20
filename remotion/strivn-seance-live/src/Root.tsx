import "./index.css";
import { Composition } from "remotion";
import { SeanceLiveAd } from "./Composition";
import { MatchLiveAd } from "./MatchComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SeanceLiveAd"
        component={SeanceLiveAd}
        durationInFrames={945}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="MatchLiveAd"
        component={MatchLiveAd}
        durationInFrames={810}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
