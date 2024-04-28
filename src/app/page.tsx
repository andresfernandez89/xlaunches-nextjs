import { Suspense } from "react";
import LaunchesContainer from "./components/launchesContainer/launchesContainer";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <LaunchesContainer />
    </Suspense>
  );
}
