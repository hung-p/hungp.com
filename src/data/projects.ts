export interface Project {
	title: string;
	description: string;
	href: string;
	stats?: string;
	tags: string[];
	image?: string;
	featured?: boolean;
}

export interface ProjectTier {
	title: string;
	description: string;
	projects: Project[];
}

// Tier 1: Active Revenue Engines
export const tier1Projects: Project[] = [
	{
		title: "AIGallery",
		description: "AI-powered image generation and curation platform. Transforming how creators visualize ideas through intelligent synthesis.",
		href: "https://aigallery.app",
		stats: "60k+ users/mo",
		tags: ["AI/ML", "Computer Vision", "SaaS"],
		featured: true,
	},
	{
		title: "VeganForReal",
		description: "The definitive resource for plant-based living. Content platform with authentic recipes, lifestyle guides, and community.",
		href: "https://veganforreal.com",
		stats: "Growing Community",
		tags: ["Content", "Health", "Community"],
		featured: true,
	},
	{
		title: "VocalLoom",
		description: "AI voice synthesis and audio production toolkit. Weaving human expression into digital audio experiences.",
		href: "https://vocalloom.com",
		stats: "Beta",
		tags: ["AI/ML", "Audio", "SaaS"],
		featured: true,
	},
];

// Tier 2: Content & IP Projects
export const tier2Projects: Project[] = [
	{
		title: "vnm.app",
		description: "A cultural bridge connecting Vietnamese heritage with the global digital landscape. Stories, music, and visual art.",
		href: "https://vnm.app",
		tags: ["Culture", "Media", "Vietnamese"],
	},
	{
		title: "The Novel",
		description: "A fiction project exploring themes of technology, identity, and the Vietnamese diaspora experience.",
		href: "#",
		tags: ["Writing", "Fiction", "Creative IP"],
	},
];

// Tier 3: Labs & Experiments
export const tier3Projects: Project[] = [
	{
		title: "HungP.com",
		description: "This personal operating system. Built with Astro, React, and modern design principles.",
		href: "https://github.com/hung-p/hungp.com",
		tags: ["Open Source", "Astro"],
	},
	{
		title: "CV Research Tools",
		description: "Collection of computer vision utilities and research implementations from graduate studies.",
		href: "https://github.com/hung-p",
		tags: ["Research", "Python", "CV"],
	},
	{
		title: "Prompt Engineering Kit",
		description: "Curated prompts and workflows for AI-assisted development and content creation.",
		href: "#",
		tags: ["AI", "Productivity"],
	},
	{
		title: "Design System",
		description: "Component library and design tokens powering all studio projects.",
		href: "#",
		tags: ["Design", "React"],
	},
];

export const allTiers: ProjectTier[] = [
	{
		title: "Active Engines",
		description: "Revenue-generating products in active development",
		projects: tier1Projects,
	},
	{
		title: "Content & IP",
		description: "Cultural projects and intellectual property",
		projects: tier2Projects,
	},
	{
		title: "Labs & Experiments",
		description: "Research tools and experimental projects",
		projects: tier3Projects,
	},
];

// Skills & Stack for About page
export const techStack = {
	frontend: ["Next.js", "React", "Astro", "TypeScript", "Tailwind CSS"],
	backend: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
	ai_ml: ["PyTorch", "TensorFlow", "OpenCV", "Hugging Face", "LangChain"],
	tools: ["Vercel", "Docker", "Git", "Figma"],
};
