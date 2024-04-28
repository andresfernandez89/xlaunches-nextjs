import { getAllLaunches } from "@/lib/api";
import { Launch } from "@/types/LaunchApi";
import LaunchCard from "../launchCard/launchCard";

export default async function LaunchesContainer() {
  const lauches = await getAllLaunches();
  return (
    <section className="my-10 grid grid-cols-cards gap-4 sm:gap-6">
      {lauches.map((launch: Launch) => (
        <LaunchCard
          key={launch.id}
          name={launch.name}
          flightNumber={launch.flight_number}
          status={launch.success}
          image={launch.links.patch.small}
          date={launch.date_utc}
          webcast={launch.links.webcast}
        />
      ))}
    </section>
  );
}
