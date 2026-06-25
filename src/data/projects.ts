export interface Project {
	slug: string;
	title: string;
	description: string;
	longDescription?: string;
	href: string;
	stats?: string;
	tags: string[];
	image?: string;
	accent?: string; // HSL triplet used by the home showcase, e.g. "286 84% 66%"
	mock?: "gallery" | "audio" | "lattice" | "community"; // live animation in the showcase browser
	highlights?: string[]; // short feature lines shown in the showcase
	featured?: boolean;
	status?: 'active' | 'beta' | 'development' | 'concept';
	year?: number;
}

export interface ProjectTier {
	title: string;
	description: string;
	projects: Project[];
}


// Tier 1: Active Revenue Engines
export const tier1Projects: Project[] = [
	{
		slug: "opmun",
		accent: "218 85% 62%",
		mock: "lattice",
		highlights: [
			"A logic-first grammar, with no exceptions",
			"Strips away centuries of redundancy",
			"A neutral layer for global collaboration",
		],
		title: "Opmun",
		description: "Opmun is an engineered global language designed to eliminate the structural redundancies and logical irregularities inherent in natural speech.",
		longDescription: "Opmun is an engineered global language designed to eliminate the structural redundancies and logical irregularities inherent in natural speech. By synthesizing **OP** (Optimal and Open) frameworks with a **MUN** (World and Community) focus, it provides a high-efficiency linguistic foundation that strips away historical clutter to prioritize pure, logical human collaboration.\n\nThe project aims to create a universal communication layer that transcends cultural and linguistic barriers, enabling more efficient global collaboration.",
		href: "https://opmun.com",
		stats: "Strategic Vision",
		tags: ["Linguistics", "Social Architecture", "Global"],
		featured: true,
		status: "concept",
		year: 2024,
	},
	{
		slug: "aigallery",
		accent: "286 84% 66%",
		mock: "gallery",
		highlights: [
			"Frictionless, free image synthesis",
			"A curated library of prompts and ideas",
			"A growing community of creators",
		],
		title: "AIGallery",
		description: "A generative AI platform that democratizes visual creation by providing frictionless, free-to-use image synthesis.",
		longDescription: "AIGallery is a generative AI platform that democratizes visual creation by providing frictionless, free-to-use image synthesis. By integrating a vast ecosystem of curated prompts and creative ideas, it serves as both a generation engine and a strategic hub for visual ideation.\n\nOver time it has grown into a go-to platform for artists, designers, and creators exploring the possibilities of AI-generated art, supported by an organic and growing community.",
		href: "https://aigallery.app",
		stats: "Live & growing",
		tags: ["Generative AI", "Computer Vision", "Creative Tools"],
		featured: true,
		status: "active",
		year: 2023,
	},
	{
		slug: "veganforreal",
		accent: "150 58% 46%",
		mock: "community",
		highlights: [
			"Discover plant-based spots nearby",
			"Curated, reliable recipes",
			"An authentic lifestyle marketplace",
		],
		title: "VeganForReal",
		description: "The premier full-stack ecosystem for the plant-based community.",
		longDescription: "VeganForReal is the premier full-stack ecosystem for the plant-based community. Integrating restaurant discovery, curated recipes, and an authentic lifestyle marketplace.\n\nOur mission is to make plant-based living accessible, enjoyable, and connected, building a community that supports sustainable choices without compromise.",
		href: "https://veganforreal.com",
		stats: "Active Development",
		tags: ["Full-Stack", "Community", "Lifestyle"],
		featured: true,
		status: "development",
		year: 2024,
	},
	{
		slug: "vocalloom",
		accent: "32 92% 56%",
		mock: "audio",
		highlights: [
			"Neural audio and voice synthesis",
			"AI and human creativity, together",
			"A media network and label",
		],
		title: "VocalLoom",
		description: "AI-driven media network and music label leveraging neural audio synthesis.",
		longDescription: "VocalLoom is an AI-driven media network and music label. Leveraging neural audio synthesis to automate and enhance creative music production.\n\nWe're building the future of music creation where AI and human creativity work together to produce unique, emotionally resonant content at scale.",
		href: "https://vocalloom.com",
		stats: "Beta Phase",
		tags: ["AI Audio", "Media", "Production"],
		featured: true,
		status: "beta",
		year: 2024,
	},
];

// Tier 2: Content & IP Projects — retired from the studio view
export const tier2Projects: Project[] = [];

// Tier 3: Labs & Incubator (Consolidated)
export const tier3Projects: Project[] = [
	{
		slug: "hungp-com",
		title: "HungP.com",
		description: "The central hub and personal operating system for everything I build.",
		longDescription: "HungP.com is the central hub and personal operating system for everything I build. Built with Astro and modern web technologies, it's part portfolio, part command center for all my projects.\n\nThis is the site you're on right now, constantly evolving as the projects grow.",
		href: "https://github.com/hung-p/hungp.com",
		tags: ["Astro", "Portfolio"],
		status: "active",
		year: 2024,
	},
	{
		slug: "niche-solutions",
		title: "Niche Solutions",
		description: "A collection of experimental tools including Mossmap, Nomstay, and StudyRails.",
		longDescription: "Niche Solutions is a collection of experimental tools including Mossmap, Nomstay, and StudyRails. These are smaller-scale projects that explore specific problem spaces and serve as testing grounds for new ideas.\n\nSome may grow into full products, others remain useful utilities, and all contribute to learning and innovation.",
		href: "#",
		tags: ["Incubator", "Experiments"],
		status: "development",
		year: 2024,
	},
];

export const allTiers: ProjectTier[] = [
	{
		title: "In active development",
		description: "The projects I'm putting the most into right now",
		projects: tier1Projects,
	},
	{
		title: "Experiments",
		description: "Smaller ideas and early tools",
		projects: tier3Projects,
	},
];

export const allProjects: Project[] = [...tier1Projects, ...tier2Projects, ...tier3Projects];

export function getProjectBySlug(slug: string): Project | undefined {
	return allProjects.find(p => p.slug === slug);
}

export const techStack = {
	frontend: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS"],
	backend: ["Node.js", "Next.js", "Python", "FastAPI", "PostgreSQL"],
	ai_ml: ["PyTorch", "TensorFlow", "OpenCV", "Hugging Face", "LangChain"],
	tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
};