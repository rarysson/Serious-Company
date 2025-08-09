import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { DynamicIcon } from "lucide-react/dynamic";

interface SbStatementData extends SbBlokData {
  title: string;
  description: string;
  icon: string;
}

interface StatementProps {
  blok: SbStatementData;
}

export default function Statement({ blok }: StatementProps) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-col items-center space-y-4 text-center"
    >
      <DynamicIcon name="camera" color="#314158" size={48} />
      <h3 className="text-xl font-bold">{blok.title}</h3>
      <p className="text-slate-600">{blok.description}</p>
    </div>
  );
}
