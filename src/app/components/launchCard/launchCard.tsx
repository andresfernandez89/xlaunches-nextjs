import logoDefault from "@/../public/default-img-launch.webp";
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
import Link from "next/link";
export default function LaunchCard({
  id,
  flightNumber,
  status,
  name,
  date,
  image,
}: Omit<LaunchCardTypes, "wikipedia">) {
  const dateFormatted = date.substring(0, 10);
  return (
    <Link href={id}>
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
          {image ? (
            <Image
              className={"m-auto h-full"}
              src={image}
              width={140}
              height={140}
              alt={`${name} launch`}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Image
              className={"m-auto h-full"}
              src={logoDefault}
              width={140}
              height={140}
              alt={`${name} launch`}
              style={{ objectFit: "cover" }}
            />
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
