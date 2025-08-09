import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Testimony {
  name: string;
  role: string;
  text: string;
  profile: {
    filename: string;
  };
}

interface SbTestimonyCardData extends SbBlokData {
  title: string;
  description: string;
  testimonies: Testimony[];
}

interface TestimonyCardProps {
  blok: SbTestimonyCardData;
}

export default function TestimonyCard({ blok }: TestimonyCardProps) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="py-12 md:py-24 lg:py-32 bg-slate-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
              {blok.title}
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {blok.description}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {blok.testimonies.map((testimony) => (
            <Card key={testimony.name}>
              <CardHeader className="text-center text-black">
                <Image
                  src={testimony.profile.filename}
                  width="150"
                  height="150"
                  alt="role"
                  className="rounded-full overflow-hidden w-[150px] h-[150px] mx-auto object-cover"
                />
                <CardTitle>{testimony.name}</CardTitle>
                <CardDescription>{testimony.role}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-slate-600 text-center">
                  {testimony.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
