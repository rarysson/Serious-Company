import {
	SbBlokData,
	storyblokEditable,
	StoryblokServerComponent,
} from "@storyblok/react/rsc";

interface SbPageData extends SbBlokData {
	body: SbBlokData[];
}

interface PageProps {
	blok: SbPageData;
}

export default function Page({ blok }: PageProps) {
	return (
		<main {...storyblokEditable(blok)}>
			{blok.body.map((nestedBlok) => (
				<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</main>
	);
};
