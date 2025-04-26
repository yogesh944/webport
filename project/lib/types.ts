export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  client: string;
  year: string;
  services: string;
  website: string;
  thumbnail: string;
  heroImage: string;
  images: string[];
  challenge: string;
  solution: string;
  nextProject: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}