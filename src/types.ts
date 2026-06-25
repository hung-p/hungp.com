export interface SiteConfig {
    title: string;
    tagline?: string;
    description: string;
    lang: string;
    author: string;
    github: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
    location?: string;
    university?: string;
}

export interface BlogCategory {
    slug: string;
    title: string;
    description: string;
}

export const blogCategories: BlogCategory[] = [
    {
        slug: 'ai-cv-lab',
        title: 'AI/CV Lab',
        description: 'Technical deep dives into generative models, computer vision, and AI ethics.',
    },
    {
        slug: 'studio-notes',
        title: 'Building Notes',
        description: 'Reflections and lessons from building products.',
    },
    {
        slug: 'philosophy-culture',
        title: 'Philosophy & Culture',
        description: 'Broader thoughts on life, creativity, and the human experience.',
    },
];
