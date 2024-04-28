import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type LaunchCardTypes } from "@/types/LaunchProps";
import Image from "next/image";
export default function LaunchCard({
  flightNumber,
  status,
  name,
  date,
  image,
}: LaunchCardTypes) {
  const dateFormatted = date.substring(0, 10);
  return (
    <Card className="grid">
      <CardHeader>
        <Badge className="pointer-events-none w-fit text-sm">
          #{flightNumber}
        </Badge>
        <Badge
          className={`pointer-events-none w-fit text-xs font-light text-white ${status ? "bg-green-700" : "bg-red-800"}`}
        >
          {status ? "Successful" : "Failed"}
        </Badge>
        <CardTitle className="text-md ... w-36 overflow-hidden text-ellipsis whitespace-nowrap sm:w-28">
          {name}
        </CardTitle>
        <CardDescription>{dateFormatted}</CardDescription>
      </CardHeader>
      <CardContent className="h-auto self-end">
        {image && (
          <Image
            className={"m-auto h-full"}
            src={image}
            width={140}
            height={140}
            alt={`${name} launch`}
            style={{ objectFit: "cover" }}
          />
        )}
      </CardContent>
    </Card>
  );
}
