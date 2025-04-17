export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string[];
  title?: string;
  date?: string;
  type?: string;
  contribution?: string;
  currentImageIndex?: number;
  onPrev?: () => void;
  onNext?: () => void;
	className?: string;
} 

export interface ModalButtonsProps {
  currentIndex: number;
  max: number;
  isZoomed: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export interface ModalImageProps {
  src: string;
  alt?: string;
  onClick: () => void;
}

export interface ModalInfoProps {
  title?: string;
  date?: string;
  type?: string;
  contribution?: string;
}

export interface ModalOverlayProps {
	children: React.ReactNode;
  onClose: () => void;
  className?: string;
}