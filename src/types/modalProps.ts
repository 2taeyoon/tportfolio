export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: string[];
  currentImageIndex: number;
  onPrev: () => void;
  onNext: () => void;
} 