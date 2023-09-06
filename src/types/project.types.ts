export interface LinkItem {
  text: string;
  icon: string;
  link: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  image?: string;
  description: string;
  skills: string[];
  link: LinkItem[];
  achievements?: string[];
}
