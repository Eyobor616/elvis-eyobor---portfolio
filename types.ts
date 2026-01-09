
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

export interface YouTubeTutorial {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: string;
  duration: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  technicalSkills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  youtubeTutorials: YouTubeTutorial[];
  community?: CommunityProfile;
  socialMedia: SocialMediaItem[];
}

export interface CommunityProfile {
  name: string;
  platform: string;
  profileUrl: string;
  imageUrl?: string;
  members?: number;
  contributions?: number;
  followers?: number;
  following?: number;
  handle?: string;
  role?: string;
  level?: string;
}

export interface SocialMediaItem {
  name: string;
  url: string;
  iconUrl: string;
}
