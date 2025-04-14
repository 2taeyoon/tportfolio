export interface TechStackProps {
	project?: ProjectDataType;
  rows: {
    title: string;
    items: string[];
  }[];
}

export interface SkillListProps {
	project?: ProjectDataType;
  title: string;
  images: {
    src: string;
    alt: string;
    name: string;
  }[];
}

export interface FeatureListProps {
	project?: ProjectDataType;
  title: string;
  body: string[];
}

export interface ContributionProps {
	project?: ProjectDataType;
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
	project?: ProjectDataType;
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
export interface ProjectDataType {
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
export interface ProjectCardProps {
  project: ProjectDataType;
  index?: number;
	title?: string;
  body?: string[];
  listType?: 'features' | 'contributions';
}

// ScreenshotGallery 컴포넌트에서 쓰이는 props
export interface ScreenshotGalleryProps {
	project: ProjectDataType;
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