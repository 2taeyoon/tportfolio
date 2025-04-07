// 기술 스택 타입
interface TechStack {
  rows: {
		title: string;
		items: string[];
	}[];
}

// 스킬 이미지 타입
interface SkillItem {
  title: string;
  images: {
		src: string;
		alt: string;
		name: string;
	}[];
}

// 주요 기능 및 특징 타입
interface featureItem {
	title: string;
	body: string[];
}

// 스크린샷 타입
interface ScreenshotItem {
  title: string;
	images: {
		src: string;
		alt: string;
	}[];
}

// 링크 타입
interface ProjectLink {
  site?: {
    href: string;
    text: string;
  };
  github?: {
    href: string;
    text: string;
  };
}

// 프로젝트 카드 타입
export interface ProjectCardProps {
  title: string;
  techStack: TechStack;
  skills: SkillItem;
  features: featureItem;
  screenshots: ScreenshotItem;
  links: ProjectLink;
}