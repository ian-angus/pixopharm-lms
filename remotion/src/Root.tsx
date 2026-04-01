import { Composition } from "remotion";
import { DashboardOverview } from "./compositions/DashboardOverview";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DashboardOverview"
        component={DashboardOverview}
        width={1280}
        height={720}
        fps={30}
        durationInFrames={30 * 30} // 30 seconds
      />
    </>
  );
};
