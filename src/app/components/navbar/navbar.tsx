import logo from "@/../public/SpaceX-Logo.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex items-center justify-center max-sm:flex-col">
      <Link href="/">
        <Image
          src={logo}
          width={275}
          height={150}
          alt="SpaceX logo"
          style={{
            objectFit: "cover",
            width: "275px",
            height: "150px",
          }}
          priority
        />
      </Link>
      <div className="flex gap-3 max-sm:mb-[20px] sm:ml-4">
        <Button className="hover:text-base hover:text-white" asChild>
          <Link href="/failed">Failed</Link>
        </Button>
        <Button className="hover:text-base hover:text-white" asChild>
          <Link href="/succeeded">Succeeded</Link>
        </Button>
      </div>
    </div>
  );
}
