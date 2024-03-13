import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Contact"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            />
          </SheetTrigger>
          <SheetContent className="w-[400px] bg-white py-5">
            <SheetHeader>
              <SheetDescription className="mt-20">
                <ul className="flex flex-col justify-start items-start h-full gap-8">
                  {NAV_LINKS.map((link) => (
                    <>
                      <Link
                        href={link.href}
                        key={link.key}
                        className="regular-20 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                      >
                        {link.label}
                      </Link>

                      <Separator />
                    </>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
