import { Composition } from "remotion";
import { DashboardOverview } from "./compositions/DashboardOverview";
import { CreatingCourse } from "./compositions/CreatingCourse";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DashboardOverview"
        component={DashboardOverview}
        width={1280}
        height={720}
        fps={30}
        durationInFrames={1710} // 57 seconds
      />
      <Composition
        id="CreatingCourse"
        component={CreatingCourse}
        width={1280}
        height={720}
        fps={30}
        durationInFrames={1260} // 42 seconds
      />
    </>
  );
};
