// project code 카드 타입
export interface CodeCardDataType {
	title: string;
	date: string;
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
  links?: CodeLinksProps;
}

// project design 카드 타입
export interface DesignCardDataType {
  thumbnail: string;
  images: {
    src: string;
    alt: string;
  }[];
  date: string;
	contribution: string;
	research?: string;
  type: string;
  title: string;
  description: string;
}

export interface TechStackProps {
	project?: CodeCardDataType;
  rows: {
    title: string;
    items: string[];
  }[];
}

export interface SkillListProps {
	project?: CodeCardDataType;
  title: string;
  images: {
    src: string;
    alt: string;
    name: string;
  }[];
}

export interface FeatureListProps {
	project?: CodeCardDataType;
  title: string;
  body: string[];
}

export interface ContributionProps {
	project?: CodeCardDataType;
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

export interface CodeLinksProps {
	project?: CodeCardDataType;
  site?: {
    href: string;
    text: string;
  };
  github?: {
    href: string;
    text: string;
  };
}

// CodeCard와와 DescriptionList 컴포넌트에서 쓰이는 props
export interface CodeCardProps {
  project: CodeCardDataType;
	title?: string;
  body?: string[];
  listType?: 'features' | 'contributions';
}

// DesignCard에서 쓰이는 props
export interface DesignCardProps {
  project: DesignCardDataType;
}

// ScreenshotGallery 컴포넌트에서 쓰이는 props
export interface ScreenshotGalleryProps {
	project: CodeCardDataType;
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