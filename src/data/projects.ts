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
	mock?: "gallery" | "audio" | "lattice" | "community" | "portal" | "chart"; // live animation in the showcase browser
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
	{
		slug: "amudia",
		accent: "322 82% 64%",
		mock: "portal",
		highlights: [
			"Turn any real space into a magical scene",
			"Characters with names, memories, and missions",
			"A personalized entertainment universe",
		],
		title: "Amudia",
		description:
			"A personalized entertainment platform that brings tiny, living characters into the real spaces of your home.",
		longDescription:
			"Amudia is a personalized entertainment platform that brings magical characters into your real world. Capture a short video of an everyday space, a kitchen table, a flower pot, a pet corner, and Amudia turns it into a living entertainment world where a tiny character can climb a flower stem, hide behind a coffee cup, slide down a charging cable, or speak directly to your family.\n\nBut Amudia is more than one-off AI videos. The vision is characters that feel alive, with names, personalities, voices, memories, routines, and missions. A character might appear on the kitchen counter and say, 'Today I have a secret mission for the family,' then ask someone to water a plant or call a grandparent, and react, praise, and unlock a new tiny adventure once it's done.\n\nDesigned for all ages, not just children: families play together, pet owners create magical scenes, creators make viral short-form content, and elderly users gain a friendly companion. When children use it, the experience is meant to be supervised by adults. Amudia is the beginning of a personalized entertainment universe, where every home can have its own characters, memories, missions, and magical moments.",
		href: "https://amudia.com",
		stats: "In development",
		tags: ["AI Video", "Characters", "Entertainment"],
		featured: true,
		status: "development",
		year: 2025,
	},
	{
		slug: "mossmap",
		accent: "174 58% 42%",
		mock: "community",
		highlights: [
			"Find hidden trails, forests, and waterfalls",
			"Nature Scout identifies plants and wildlife",
			"Stories, sounds, and quiet places to explore",
		],
		title: "MossMap",
		description:
			"A nature discovery platform for finding hidden trails, quiet forests, waterfalls, and wild places worth exploring.",
		longDescription:
			"MossMap is a nature discovery platform that helps people find hidden trails, quiet forests, waterfalls, scenic viewpoints, and wild places worth exploring. It's built for people who want to get closer to nature, not just follow the popular tourist routes, so they can discover beautiful outdoor spots and learn about the plants, wildlife, sounds, and details around each place.\n\nA key feature is Nature Scout, a smart field guide that helps identify plants, trees, animals, mushrooms, and tracks you notice outdoors. Discoveries can be saved and tied to a specific spot, so future visitors learn from what others observed. With nature stories, practical guides, calming sounds, and personal favorites, MossMap is a peaceful space for exploration and connection with the natural world. Find what nature hides.",
		href: "https://mossmap.com",
		stats: "In development",
		tags: ["Nature", "Discovery", "Field Guide"],
		featured: true,
		status: "development",
		year: 2024,
	},
	{
		slug: "studyrails",
		accent: "200 90% 52%",
		mock: "chart",
		highlights: [
			"Compare 6,000+ U.S. colleges on real data",
			"Community professor and course ratings",
			"Smart matcher and financial calculators",
		],
		title: "StudyRails",
		description:
			"An all-in-one platform that helps students compare colleges, rate professors, and make informed academic decisions.",
		longDescription:
			"StudyRails is an all-in-one educational platform designed to help students navigate their academic journey and make informed decisions.\n\nIt brings together a College Explorer that compares 6,000+ U.S. institutions side by side on official, verified federal data (tuition, graduation rates, debt, and post-grad earnings), a community-driven database of professor and course ratings, a smart 3-step matcher that recommends colleges by budget, region, and selectivity, and built-in financial calculators for net price, loan repayment, and career return on investment.",
		href: "https://studyrails.com",
		stats: "In development",
		tags: ["Education", "Data", "Student Tools"],
		featured: true,
		status: "development",
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
		description: "A set of smaller experiments and utilities, including Nomstay.",
		longDescription: "Niche Solutions is a set of smaller experiments and utilities, including Nomstay, that explore specific problem spaces and serve as testing grounds for new ideas.\n\nSome may grow into full products, others remain useful utilities, and all contribute to learning and innovation.",
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