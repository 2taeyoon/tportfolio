export interface TechStackProps {
	project?: ProjectCardProps;
  rows: {
    title: string;
    items: string[];
  }[];
}

export interface SkillListProps {
	project?: ProjectCardProps;
  title: string;
  images: {
    src: string;
    alt: string;
    name: string;
  }[];
}

export interface FeatureListProps {
	project?: ProjectCardProps;
  title: string;
  body: string[];
}

export interface ScreenshotProps {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export interface ProjectLinksProps {
	project?: ProjectCardProps;
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
	className: string;
	type: string;
	boxColor: string;
	fontColor: string;
	skillBoxColor: string;
	skillFontColor: string;
	badgeBoxColor: string;
	badgeFontColor: string;
	linkBoxColor: string;
	linkFontColor: string;
  techStack: TechStackProps;
  skills: SkillListProps;
  features: FeatureListProps;
  screenshots: ScreenshotProps;
  links: ProjectLinksProps;
}

// ProjectCardItem 컴포넌트에서 쓰이는 props
export interface ProjectCardItemProps {
	project: ProjectCardProps;
	index: number;
}

// ScreenshotGallery 컴포넌트에서 쓰이는 props
export interface ScreenshotGalleryProps {
	project: ProjectCardProps;
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
  modalProps: {
    isModalOpen: boolean;
    currentImageIndex: number;
    handleCloseModal: () => void;
    handlePrevImage: () => void;
    handleNextImage: () => void;
  };
  onImageClick: (index: number) => void;
}