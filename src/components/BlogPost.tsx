import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SbBlogPostData extends SbBlokData {
  title: string;
  text: string;
  image: {
    filename: string;
  };
}

interface BlogPostProps {
  blok: SbBlogPostData;
}

export default function BlogPost({ blok }: BlogPostProps) {
  return (
    <article
      {...storyblokEditable(blok)}
      className="py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {blok.title}
            </h1>
          </div>

          <div className="aspect-video overflow-hidden rounded-xl">
            <Image
              src={blok.image.filename}
              width="800"
              height="400"
              alt="blog image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-4 prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-ul:mb-4 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-slate-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-600">
            {render(blok.text)}
          </div>

          <div className="flex justify-between items-center pt-8 border-t">
            <Button asChild className="bg-white text-black">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
