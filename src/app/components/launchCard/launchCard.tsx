import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type LaunchCardTypes } from "@/types/LaunchProps";
export default function LaunchCard({
  flightNumber,
  status,
  name,
  date,
  image,
}: LaunchCardTypes) {
  const dateFormatted = date.substring(0, 10);
  return (
    <Card>
      <CardHeader>
        <Badge className="pointer-events-none w-fit text-sm">
          #{flightNumber}
        </Badge>
        <Badge
          className={`pointer-events-none w-fit text-xs font-light text-white ${status ? "bg-green-700" : "bg-red-800"}`}
        >
          {status ? "Successful" : "Failed"}
        </Badge>
        <CardTitle className="text-md">{name}</CardTitle>
        <CardDescription>{dateFormatted}</CardDescription>
      </CardHeader>
      <CardContent className="h-auto">
        {image && (
          <Image
            className={"m-auto h-full"}
            src={image}
            width={140}
            height={140}
            alt={"foto"}
          />
        )}
      </CardContent>
    </Card>
  );
}
