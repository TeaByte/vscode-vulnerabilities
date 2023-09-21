import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import ModeToggle from "@/components/theme/toggle";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 flex flex-col w-full gap-1 pt-1 bg-background">
      <div className="flex items-center justify-between px-5 py-1">
        <Link href="/">
          <div className="flex items-center font-bold text-primary gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={35}
              height={35}
              className="hidden dark:block"
            />
            Vulnerabilities
          </div>
        </Link>
        <div className="flex items-center justify-center gap-3">
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </nav>
  );
}