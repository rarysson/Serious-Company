import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { DynamicIcon } from "lucide-react/dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Statement {
  title: string;
  description: string;
  icon: string;
}

interface LinkButton {
  text: string;
  link: string;
  background_color: string;
  text_color: string;
}

interface SbStatementCardData extends SbBlokData {
  title: string;
  description: string;
  statements: Statement[];
  cta: LinkButton[];
}

interface StatementCardProps {
  blok: SbStatementCardData;
}

export default function StatementCard({ blok }: StatementCardProps) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="py-12 md:py-24 lg:py-32 bg-white text-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {blok.title}
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {blok.description}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {blok.statements.map((statement) => (
            <div
              className="flex flex-col items-center space-y-4 text-center"
              key={statement.title}
            >
              <DynamicIcon
                name={statement.icon as never}
                color="#314158"
                size={48}
              />
              <h3 className="text-xl font-bold">{statement.title}</h3>
              <p className="text-slate-600">{statement.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {blok.cta[0] && (
            <Button
              asChild
              size="lg"
              style={{
                backgroundColor: blok.cta[0].background_color,
                color: blok.cta[0].text_color,
              }}
            >
              <Link href={blok.cta[0].link}>{blok.cta[0].text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
