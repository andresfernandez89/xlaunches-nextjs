import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/SpaceX-Logo.svg";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Image src={logo} width={500} height={500} alt="SpaceX logo" />
      <h2 className="mt-20 text-center text-lg text-red-600">Not Found</h2>
      <p className="text-center text-lg text-red-600">
        Could not find requested resource
      </p>
      <Button variant="outline" asChild>
        <Link className="mt-6 text-center text-xl font-bold" href="/">
          Return Home
        </Link>
      </Button>
    </div>
  );
}
