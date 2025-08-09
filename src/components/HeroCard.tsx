import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface ThemedText {
  text: string;
  color: string;
}

interface LinkButton {
  text: string;
  link: string;
  background_color: string;
  text_color: string;
}

interface SbHeroCardData extends SbBlokData {
  title: ThemedText[];
  description: ThemedText[];
  background_color: string;
  primary_button: LinkButton[];
  secondary_button: LinkButton[];
  image: {
    filename: string;
    alt: string;
  };
}

interface HeroCardProps {
  blok: SbHeroCardData;
}

export default function HeroCard({ blok }: HeroCardProps) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative text-white py-24 lg:py-32"
      style={{ backgroundColor: blok.background_color }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                style={{ color: blok.title[0].color }}
              >
                {blok.title[0].text}
              </h1>
              <p
                className="max-w-[600px] md:text-xl"
                style={{ color: blok.description[0].color }}
              >
                {blok.description[0].text}
              </p>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {blok.primary_button[0] && (
                <Button
                  asChild
                  size="lg"
                  className="font-bold"
                  style={{
                    backgroundColor: blok.primary_button[0].background_color,
                    color: blok.primary_button[0].text_color,
                  }}
                >
                  <Link href={blok.primary_button[0].link}>
                    {blok.primary_button[0].text}
                  </Link>
                </Button>
              )}

              {blok.secondary_button[0] && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-bold"
                  style={{
                    backgroundColor: blok.secondary_button[0].background_color,
                    color: blok.secondary_button[0].text_color,
                  }}
                >
                  <Link href={blok.secondary_button[0].link}>
                    {blok.secondary_button[0].text}
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <Image
            src={blok.image.filename}
            width="600"
            height="400"
            alt={blok.image.alt}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
