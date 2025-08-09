import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

interface LinkButton {
  text: string;
  link: string;
  background_color: string;
  text_color: string;
}

interface SbHeaderData extends SbBlokData {
  logo: {
    filename: string;
    alt: string;
  };
  links: LinkButton[];
}

interface HeaderProps {
  blok: SbHeaderData;
}

export default function Header({ blok }: HeaderProps) {
  return (
    <header
      {...storyblokEditable(blok)}
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur"
    >
      <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src={blok.logo.filename}
              width="80"
              height="24"
              alt={blok.logo.alt}
            />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {blok.links.map((link) => (
              <Link
                key={link.text}
                href={link.link}
                className="transition-colors hover:text-black/70 text-black"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu color="black" className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src={blok.logo.filename}
                    width="80"
                    height="24"
                    alt={blok.logo.alt}
                  />
                </Link>
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navigation menu
              </SheetDescription>
            </SheetHeader>
            <div className="bg-white my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {blok.links.map((link) => (
                  <Link
                    key={link.text}
                    href={link.link}
                    className="transition-colors hover:text-black/70 text-black"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Image
                src={blok.logo.filename}
                width="80"
                height="24"
                alt={blok.logo.alt}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
