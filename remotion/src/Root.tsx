import { Composition } from "remotion";
import { DashboardOverview } from "./compositions/DashboardOverview";
import { CreatingCourse } from "./compositions/CreatingCourse";
import { MarketingHero } from "./compositions/MarketingHero";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MarketingHero"
        component={MarketingHero}
        width={1280}
        height={720}
        fps={30}
        durationInFrames={1020} // 34 seconds
      />
      <Composition
        id="DashboardOverview"
        component={DashboardOverview}
        width={1280}
        height={720}
        fps={30}
        durationInFrames={3030} // 101 seconds
      />
      <Composition
        id="CreatingCourse"
        component={CreatingCourse}
        width={1280}
        height={720}
        fps={30}
        durationInFrames={2340} // 78 seconds
      />
    </>
  );
};
