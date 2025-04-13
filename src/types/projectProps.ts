export interface TechStackProps {
	project?: ProjectDetailProps;
  rows: {
    title: string;
    items: string[];
  }[];
}

export interface SkillListProps {
	project?: ProjectDetailProps;
  title: string;
  images: {
    src: string;
    alt: string;
    name: string;
  }[];
}

export interface FeatureListProps {
	project?: ProjectDetailProps;
  title: string;
  body: string[];
}

export interface ContributionProps {
	project?: ProjectDetailProps;
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
	project?: ProjectDetailProps;
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
export interface ProjectDetailProps {
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
	contribution?: ContributionProps;
  screenshots: ScreenshotProps;
  links?: ProjectLinksProps;
}

// ProjectDetailCard와 DescriptionList 컴포넌트에서 쓰이는 props
export interface ProjectDetailCardProps {
  project: ProjectDetailProps;
  index?: number;
	title?: string;
  body?: string[];
  listType?: 'features' | 'contributions';
}

// ScreenshotGallery 컴포넌트에서 쓰이는 props
export interface ScreenshotGalleryProps {
	project: ProjectDetailProps;
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