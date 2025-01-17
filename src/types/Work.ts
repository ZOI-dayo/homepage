import type { Devicon } from "./Devicon.ts";

export type Work = {
  title: string;
  role: string;
  description: string;
  image?: string;
  padding?: boolean;
  dark?: boolean;
  technologies: Devicon[];
  developing?: true;
};
