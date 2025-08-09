import { storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/Page";
import HeroCard from "@/components/HeroCard";
import Statement from "@/components/Statement";
import StatementCard from "@/components/StatementCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonyCard from "@/components/TestimonyCard";
import BlogPost from "@/components/BlogPost";
import BlogOverview from "@/components/BlogOverview";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  components: {
    page: Page,
    'hero-card': HeroCard,
    statement: Statement,
    'statement-card': StatementCard,
    header: Header,
    footer: Footer,
    'testimony-card': TestimonyCard,
    'blog-post': BlogPost,
    'blog-overview': BlogOverview
  },
});
