export interface SSModalProps {
  isOpen: boolean;
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

export interface SSModalOverlayProps {
	children: React.ReactNode;
  onClose: () => void;
  className?: string;
}