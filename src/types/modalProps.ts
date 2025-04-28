import { DesignCardDataType } from "./projectProps";

export interface ModalOverlayProps {
	children: React.ReactNode;
  onClose: () => void;
  className?: string;
}

export interface SSModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  imageUrl: {
		src: string;
		alt: string
	}[];
  currentImageIndex?: number;
  onPrev?: () => void;
  onNext?: () => void;
} 

export interface SSModalButtonsProps {
  currentIndex: number;
  max: number;
  isZoomed: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export interface SSModalImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export interface PopupModalProps {
  isModalOpen: boolean;
  currentProject: DesignCardDataType;
  onClose: () => void;
}