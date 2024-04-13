import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/../public/SpaceX-Logo.svg";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex items-center justify-center max-sm:flex-col">
      <Image src={logo} width={275} height={300} alt="SpaceX logo" />
      <div className="flex gap-2 max-sm:mt-5 sm:ml-4">
        <Button asChild>
          <Link href="/failed">Failed</Link>
        </Button>
        <Button asChild>
          <Link href="/succeeded">Succeeded</Link>
        </Button>
      </div>
    </div>
  );
}
