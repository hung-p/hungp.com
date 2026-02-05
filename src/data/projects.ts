export interface Project {
	slug: string;
	title: string;
	description: string;
	longDescription?: string;
	href: string;
	stats?: string;
	tags: string[];
	image?: string;
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
		title: "AIGallery",
		description: "A generative AI platform that democratizes visual creation by providing frictionless, free-to-use image synthesis.",
		longDescription: "AIGallery is a generative AI platform that democratizes visual creation by providing frictionless, free-to-use image synthesis. By integrating a vast ecosystem of curated prompts and creative ideas, it serves as both a generation engine and a strategic hub for visual ideation.\n\nCurrently supporting an organic community of over 65,000 monthly active users, AIGallery has become a go-to platform for artists, designers, and creators looking to explore the possibilities of AI-generated art.",
		href: "https://aigallery.app",
		stats: "65k+ MAU",
		tags: ["Generative AI", "Computer Vision", "Creative Tools"],
		featured: true,
		status: "active",
		year: 2023,
	},
	{
		slug: "veganforreal",
		title: "VeganForReal",
		description: "The premier full-stack ecosystem for the plant-based community.",
		longDescription: "VeganForReal is the premier full-stack ecosystem for the plant-based community. Integrating restaurant discovery, curated recipes, and an authentic lifestyle marketplace.\n\nOur mission is to make plant-based living accessible, enjoyable, and connected—building a community that supports sustainable choices without compromise.",
		href: "https://veganforreal.com",
		stats: "Active Development",
		tags: ["Full-Stack", "Community", "Lifestyle"],
		featured: true,
		status: "development",
		year: 2024,
	},
	{
		slug: "vocalloom",
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

// Tier 2: Content & IP Projects
export const tier2Projects: Project[] = [
	{
		slug: "vnm-app",
		title: "vnm.app",
		description: "A digital sanctuary for Vietnamese culture and history.",
		longDescription: "vnm.app is a digital sanctuary for Vietnamese culture and history. Connecting heritage with modern technology through interactive storytelling.\n\nThis project is a personal passion—preserving and sharing the rich cultural tapestry of Vietnam with the world through immersive digital experiences.",
		href: "https://vnm.app",
		tags: ["Culture", "History", "Vietnamese"],
		status: "development",
		year: 2024,
	},
	{
		slug: "the-code-of-silence",
		title: "The Code of Silence",
		description: "A science fiction narrative exploring the deep intersections of artificial intelligence and human consciousness.",
		longDescription: "The Code of Silence is a science fiction narrative exploring the deep intersections of artificial intelligence and human consciousness. This project investigates the psychological boundaries of a hyper-connected future, questioning how the core of human identity survives in an era dominated by algorithmic logic and total digital transparency.\n\nMore than just a story—it's an exploration of what it means to be human in an age of AI.",
		href: "#",
		tags: ["Sci-Fi", "Artificial Intelligence", "Intellectual Property"],
		status: "concept",
		year: 2025,
	},
];

// Tier 3: Labs & Incubator (Consolidated)
export const tier3Projects: Project[] = [
	{
		slug: "hungp-com",
		title: "HungP.com",
		description: "The central hub and personal operating system for the Venture Studio.",
		longDescription: "HungP.com serves as the central hub and personal operating system for the Venture Studio. Built with Astro and modern web technologies, it's both a portfolio and a command center for all ventures.\n\nThis site you're on right now—constantly evolving as the studio grows.",
		href: "https://github.com/hung-p/hungp.com",
		tags: ["Astro", "Portfolio"],
		status: "active",
		year: 2024,
	},
	{
		slug: "niche-solutions",
		title: "Niche Solutions",
		description: "A collection of experimental tools including Mossmap, Nomstay, and StudyRails.",
		longDescription: "Niche Solutions is a collection of experimental tools including Mossmap, Nomstay, and StudyRails. These are smaller-scale projects that explore specific problem spaces and serve as testing grounds for new ideas.\n\nSome may grow into full products, others remain useful utilities—all contribute to learning and innovation.",
		href: "#",
		tags: ["Incubator", "Experiments"],
		status: "development",
		year: 2024,
	},
];

export const allTiers: ProjectTier[] = [
	{
		title: "Active Engines",
		description: "Projects in active development",
		projects: tier1Projects,
	},
	{
		title: "Content & IP",
		description: "Cultural assets and intellectual property",
		projects: tier2Projects,
	},
	{
		title: "Incubator",
		description: "Research tools and niche experiments",
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