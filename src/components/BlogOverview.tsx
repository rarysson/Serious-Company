import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fetchStory, fetchStoryStartsWith } from "@/utils/fetchStory";

interface BlogPost {
  id: string;
  name: string;
  slug: string;
  content: {
    body: Record<string, unknown>[];
  };
}

interface BlogPostProps {
  blok: SbBlokData;
}

export default async function BlogOverview({ blok }: BlogPostProps) {
  const { story: yourBrand } = await fetchStory("published", [
    "blog",
    "your-brand",
  ]);
  const { story: beyondClicks } = await fetchStory("published", [
    "blog",
    "beyond-clicks",
  ]);
  const { story: beyondTheBuild } = await fetchStory("published", [
    "blog",
    "beyond-the-build",
  ]);
  const { story: designThatConverts } = await fetchStory("published", [
    "blog",
    "design-that-converts",
  ]);
  const { story: seamlessTechStacks } = await fetchStory("published", [
    "blog",
    "seamless-tech-stacks",
  ]);
  const { story: thePowerOfFreshStarts } = await fetchStory("published", [
    "blog",
    "the-power-of-fresh-starts",
  ]);

  const blogPosts = [
    yourBrand,
    beyondClicks,
    beyondTheBuild,
    designThatConverts,
    seamlessTechStacks,
    thePowerOfFreshStarts,
  ] as unknown as BlogPost[];

  return (
    <section
      {...storyblokEditable(blok)}
      className="py-12 md:py-24 lg:py-32 bg-slate-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 text-black">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Latest Articles
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our most recent insights and expert analysis on business
              trends and strategies.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={
                    (
                      post.content.body.find((x) => x.image)!.image as {
                        filename: string;
                      }
                    ).filename
                  }
                  width={400}
                  height={200}
                  alt="cover"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-black">
                <CardTitle className="line-clamp-2">{post.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-black">
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
