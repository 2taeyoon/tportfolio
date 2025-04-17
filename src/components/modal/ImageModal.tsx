'use client';

import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '@/components/modal/ModalOverlay';
import ModalImage from '@/components/modal//ModalImage';
import ModalInfo from '@/components/modal//ModalInfo';
import ModalButtons from '@/components/modal/ModalButtons';

import { ImageModalProps } from '@/types/modalProps';

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  date,
  type,
  contribution,
  currentImageIndex = 0,
  onPrev,
  onNext,
  className,
}: ImageModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageRatio, setImageRatio] = useState<'horizontal' | 'vertical' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);

  useEffect(() => {
    setCurrentIndex(currentImageIndex);
  }, [currentImageIndex]);

  const checkImageRatio = useCallback(() => {
    const img = new window.Image();
    img.src = imageUrl[currentIndex];
    img.onload = () => {
      setImageRatio(img.width > img.height ? 'horizontal' : 'vertical');
    };
  }, [currentIndex, imageUrl]);

  useEffect(() => {
    checkImageRatio();
  }, [checkImageRatio]);

	// ✅ useCallback로 함수 감싸기 + 위쪽에서 선언
	const handlePrev = useCallback(() => {
		if (currentIndex > 0) {
			setCurrentIndex(prev => prev - 1);
			onPrev?.();
		}
	}, [currentIndex, onPrev]);

	const handleNext = useCallback(() => {
		if (currentIndex < imageUrl.length - 1) {
			setCurrentIndex(prev => prev + 1);
			onNext?.();
		}
	}, [currentIndex, imageUrl.length, onNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return isZoomed ? setIsZoomed(false) : onClose();
      if (!isZoomed) {
        if (e.key === 'ArrowLeft' && currentIndex > 0) handlePrev();
        if (e.key === 'ArrowRight' && currentIndex < imageUrl.length - 1) handleNext();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isZoomed, currentIndex, imageUrl.length, onClose, handlePrev, handleNext]);



  if (!isOpen) return null;

  const zoomClass = isZoomed ? imageRatio === 'horizontal' ? 'zoomed horizontal' : 'zoomed vertical' : '';

  return createPortal(
    <ModalOverlay onClose={onClose} className={className}>
      <div className={`modal_content ${className} ${zoomClass}`} onClick={(e) => e.stopPropagation()}>
        <ModalButtons currentIndex={currentIndex} max={imageUrl.length} isZoomed={isZoomed} onPrev={handlePrev} onNext={handleNext}/>
        <ModalImage src={imageUrl[currentIndex]} alt={title} onClick={() => setIsZoomed(!isZoomed)}/>
				{(title || date || type || contribution) && <ModalInfo title={title} date={date} type={type} contribution={contribution} />}
      </div>
    </ModalOverlay>,
    document.body
  );
}
