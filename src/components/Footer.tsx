import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import Image from "next/image";

interface LinkButton {
  text: string;
  link: string;
  background_color: string;
  text_color: string;
}

interface SbFooterData extends SbBlokData {
  logo: {
    filename: string;
    alt: string;
  };
  description: string;
  company_links: LinkButton[];
  support_links: LinkButton[];
  connect_links: LinkButton[];
}

interface FooterProps {
  blok: SbFooterData;
}

export default function Footer({ blok }: FooterProps) {
  return (
    <footer {...storyblokEditable(blok)} className="border-t bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={blok.logo.filename}
                width="80"
                height="24"
                alt={blok.logo.alt}
              />
            </Link>
            <p className="text-sm text-slate-600">{blok.description}</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-black">Company</h4>
            <ul className="space-y-2 text-sm">
              {blok.company_links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.link}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-black">Support</h4>
            <ul className="space-y-2 text-sm">
              {blok.support_links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.link}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-black">Connect</h4>
            <ul className="space-y-2 text-sm">
              {blok.connect_links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.link}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-t-black/10 py-6 text-center text-sm text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
