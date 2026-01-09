
export interface Socials {
  phone: string;
  linkedin: string;
  youtube: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  socials: Socials;
  nationality: string;
  birthday: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  name: string;
  client: string;
  period: string;
  features: string[];
  description: string;
  impact?: string;
  project_pictures?: string[];
  image_url?: string[] | string; // Added to handle the original column name
  company?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  technicalSkills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}
