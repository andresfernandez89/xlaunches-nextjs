import { Suspense } from "react";
import LaunchesContainer from "./components/launchesContainer/launchesContainer";
import Navbar from "./components/navbar/navbar";
import Loading from "./loading";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="m-auto my-4 max-w-6xl px-4">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <LaunchesContainer />
      </Suspense>
    </main>
  );
}
