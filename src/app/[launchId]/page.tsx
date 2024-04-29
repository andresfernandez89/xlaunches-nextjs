import { getLaunchById } from "@/lib/api";
import { LaunchCardTypes } from "@/types/LaunchProps";
import LaunchCardId from "../components/launchCardId/launchCardId";

export default async function LaunchById({
  params,
}: {
  params: { launchId: Pick<LaunchCardTypes, "id"> };
}) {
  const { name, flight_number, success, date_utc, links } = await getLaunchById(
    params.launchId,
  );
  return (
    <>
      <section className="my-10">
        <LaunchCardId
          name={name}
          flightNumber={flight_number}
          status={success}
          image={links.patch.small}
          date={date_utc}
        />
      </section>
    </>
  );
}
