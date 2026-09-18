export interface NavLink {
  name: string;
  href: string;
}

export interface Software {
  name: string;
  color: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
}
