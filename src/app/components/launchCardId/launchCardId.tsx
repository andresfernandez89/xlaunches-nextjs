import LogoDefault from "@/../public/default-img-launch.webp";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LaunchCardTypes } from "@/types/LaunchProps";
import Image from "next/image";
export default function LaunchCardId({
  flightNumber,
  status,
  name,
  date,
  image,
}: Omit<LaunchCardTypes, "id">) {
  const dateFormatted = date.substring(0, 10);
  return (
    <Card className="sm:flex">
      <CardHeader>
        <CardTitle className="mb-4 w-auto text-3xl sm:w-28">{name}</CardTitle>
        <div className="grid max-sm:grid-cols-2">
          <div>
            <div className="flex gap-2">
              <Badge className="pointer-events-none w-fit text-sm">
                #{flightNumber}
              </Badge>
              <Badge
                className={`pointer-events-none w-fit text-xs font-light text-white ${status ? "bg-green-700" : "bg-red-800"}`}
              >
                {status ? "Successful" : "Failed"}
              </Badge>
            </div>
            <CardDescription className="my-2">{dateFormatted}</CardDescription>
          </div>
          <div className="sm:mt-5">
            {image ? (
              <Image
                className={"h-full"}
                src={image}
                width={140}
                height={140}
                alt={`${name} launch`}
                style={{ objectFit: "cover" }}
              />
            ) : (
              <Image
                className={"m-auto h-full"}
                src={LogoDefault}
                width={140}
                height={140}
                alt={`${name} launch`}
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-auto pt-2 sm:mt-[60px] sm:p-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        debitis provident placeat ad molestiae, eaque eligendi doloremque
        necessitatibus sit fuga magnam nisi vitae temporibus in quia ratione
        itaque minus neque. Veniam, labore sed. Perspiciatis similique itaque
        quia omnis enim natus, laudantium sapiente placeat tempora distinctio
        vitae repellat quod, quos dignissimos quisquam accusantium voluptates
        facilis id voluptatem? Quae vel quasi facilis? Reiciendis soluta magni
        aperiam nam maxime, numquam architecto asperiores repellendus animi
        quia, iure nesciunt ducimus! Molestias minus eos unde quidem, minima
        reiciendis vero molestiae, assumenda mollitia dolorum in tenetur atque!
      </CardContent>
    </Card>
  );
}
