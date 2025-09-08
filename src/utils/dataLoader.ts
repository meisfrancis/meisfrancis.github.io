import yaml from 'js-yaml';
import matter from 'gray-matter';

// Import YAML files as text
import homeYaml from '../data/home.yaml?raw';
import knowledgeYaml from '../data/knowledge.yaml?raw';
import linksYaml from '../data/links.yaml?raw';

// Import blog markdown files as text
import buildingScalableReactMd from '../data/blogs/building-scalable-react.md?raw';
import futureOfWebDevMd from '../data/blogs/future-of-web-development.md?raw';
import masteringTypescriptMd from '../data/blogs/mastering-typescript.md?raw';
import devopsBestPracticesMd from '../data/blogs/devops-best-practices.md?raw';
import modernCssGuideMd from '../data/blogs/modern-css-guide.md?raw';

export interface HomeData {
  profile: {
    name: string;
    title: string;
    initials: string;
    description: string;
    bio: string;
  };
  skills: Array<{
    name: string;
    level: number;
    color: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    color: string;
    description: string;
  }>;
  styles: {
    gradient: {
      primary: string;
      divider: string;
    };
  };
}

export interface KnowledgeData {
  education: {
    formal: Array<{
      degree: string;
      institution: string;
      period: string;
      gpa: string;
      badge_color: string;
      description: string;
      subjects: string[];
    }>;
  };
  certifications: Array<{
    title: string;
    issuer: string;
    year: string;
    color: string;
    description: string;
  }>;
  learning_goals: Array<{
    skill: string;
    progress: number;
    gradient: string;
  }>;
  styles: {
    header: {
      title: string;
      subtitle: string;
    };
    colors: {
      [key: string]: string;
    };
  };
}

export interface LinksData {
  header: {
    title: string;
    subtitle: string;
  };
  services: Array<{
    title: string;
    description: string;
    price: string;
    features: string[];
  }>;
  social_links: Array<{
    name: string;
    url: string;
    color: string;
  }>;
  cta: {
    title: string;
    subtitle: string;
    description: string;
    buttons: {
      primary: string;
      secondary: string;
    };
  };
  styles: {
    gradient: string;
    button_colors: {
      primary: string;
      secondary: string;
    };
  };
}

export interface IPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const loadHomeData = (): HomeData => {
  return yaml.load(homeYaml) as HomeData;
};

export const loadKnowledgeData = (): KnowledgeData => {
  return yaml.load(knowledgeYaml) as KnowledgeData;
};

export const loadLinksData = (): LinksData => {
  return yaml.load(linksYaml) as LinksData;
};

export const loadBlogPosts = (): IPost[] => {
  const blogFiles = [
    { id: 'building-scalable-react', content: buildingScalableReactMd },
    { id: 'future-of-web-development', content: futureOfWebDevMd },
    { id: 'mastering-typescript', content: masteringTypescriptMd },
    { id: 'devops-best-practices', content: devopsBestPracticesMd },
    { id: 'modern-css-guide', content: modernCssGuideMd },
  ];

  return blogFiles.map(file => {
    const { data, content } = matter(file.content);
    return {
      id: file.id,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      content,
    };
  });
};

export const loadMiscPost = (id: string, fileContent: never): IPost => {
  const {data, content} = matter(fileContent)
  return {
    id: id,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.readTime,
    category: data.category,
    content,
  };
}

export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    React: "bg-cyan-900 text-cyan-300",
    Technology: "bg-green-900 text-green-300",
    TypeScript: "bg-purple-900 text-purple-300",
    DevOps: "bg-orange-900 text-orange-300",
    CSS: "bg-pink-900 text-pink-300"
  };
  return colors[category] || "bg-gray-800 text-gray-300";
};
