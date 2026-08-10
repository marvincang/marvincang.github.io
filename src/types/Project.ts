export type Project = {
  title: string;
  category: 'Research' | 'Production';
  year: number;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
  videoUrl: string;
};
