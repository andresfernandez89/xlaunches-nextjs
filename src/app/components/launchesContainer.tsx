import { getAllLaunches } from "@/lib/api";
import LaunchCard from "./launchCard";

export default async function LaunchesContainer() {
  const data = await getAllLaunches();
  return (
    <section className="my-10 grid grid-cols-cards gap-4">
      <LaunchCard />
      <LaunchCard />
      <LaunchCard />
    </section>
  );
}
