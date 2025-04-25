'use client';

import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '@/components/modal/ModalOverlay';
import SSModalImage from '@/components/modal/SSModalImage';
import SSModalButtons from '@/components/modal/SSModalButtons';
import { SSModalProps } from '@/types/modalProps';
import { useModalStore } from "@/hooks/useModalStore";

export default function SSModal({
  isOpen,
  onClose,
  imageUrl,
  currentImageIndex = 0,
  onPrev,
  onNext,
}: SSModalProps) {
  const { setModalOpen } = useModalStore();

	useEffect(() => {
    setModalOpen(isOpen);
    return () => setModalOpen(false);
  }, [isOpen, setModalOpen]);

  const [isZoomed, setIsZoomed] = useState(false); // 이미지 확대/축소 상태를 관리하는 state
  const [imageRatio, setImageRatio] = useState<'horizontal' | 'vertical' | null>(null); // 이미지 가로/세로 비율을 저장하는 state ('horizontal' | 'vertical' | null)
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex); // 현재 보여지는 이미지의 인덱스를 관리하는 state

	// currentImageIndex가 변경될 때마다 currentIndex state를 업데이트
  useEffect(() => { 
    setCurrentIndex(currentImageIndex);
  }, [currentImageIndex]);

  // 이미지의 가로/세로 비율을 체크하는 함수
  const checkImageRatio = useCallback(() => {
    const img = new window.Image(); // 이미지 객체 생성 
    img.src = imageUrl[currentIndex].src; // 현재 인덱스의 이미지 URL 설정
    img.onload = () => {
      // 이미지 로드 완료 후 width가 더 크면 horizontal 작으면 vertical
      setImageRatio(img.width > img.height ? 'horizontal' : 'vertical');
    };
  }, [currentIndex, imageUrl]);

  // 이미지가 변경될 때마다 비율 체크 함수 실행
  useEffect(() => {
    checkImageRatio();
  }, [checkImageRatio]);

  // 이전 이미지로 이동하는 함수
	// currentIndex와 onPrev가 변경될 때만 함수가 재생성되도록 메모이제이션
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      // props로 받은 onPrev 콜백이 있다면 실행
      onPrev?.();
    }
  }, [currentIndex, onPrev]);

  // 다음 이미지로 이동하는 함수
	// currentIndex와 onNext가 변경될 때만 함수가 재생성되도록 메모이제이션
  const handleNext = useCallback(() => {
    if (currentIndex < imageUrl.length - 1) {
      setCurrentIndex(prev => prev + 1);
      // props로 받은 onNext 콜백이 있다면 실행
      onNext?.();
    }
  }, [currentIndex, imageUrl.length, onNext]);

  // 키보드 이벤트 처리를 위한 useEffect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC 키: 확대 상태면 축소, 아니면 모달 닫기
      if (e.key === 'Escape') return isZoomed ? setIsZoomed(false) : onClose();
      if (!isZoomed) { // 확대 상태가 아닐 때만 좌우 키 이벤트 처리
        // 왼쪽 화살표 키를 누르고 현재 인덱스가 0보다 크면 이전 이미지로 이동
        if (e.key === 'ArrowLeft' && currentIndex > 0) handlePrev();
        // 오른쪽 화살표 키를 누르고 현재 인덱스가 마지막 이미지가 아니면 다음 이미지로 이동
        if (e.key === 'ArrowRight' && currentIndex < imageUrl.length - 1) handleNext();
      }
    };

    // 모달이 열려있을 때만 이벤트 리스너 등록 및 body 스크롤 방지
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown); // 키보드 이벤트 리스너 등록
      document.documentElement.style.overflow = 'hidden'; // 모달이 열려있는 동안 스크롤 방지
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거 및 body 스크롤 복구
    return () => {
      document.removeEventListener('keydown', handleKeyDown); // 이벤트 리스너 제거
      document.documentElement.style.overflow = 'unset'; // 스크롤 복구
    };
  }, [isOpen, isZoomed, currentIndex, imageUrl.length, onClose, handlePrev, handleNext]);

  // 모달이 닫혀있으면 null 반환
  if (!isOpen) return null;

  
  // 이미지 확대 상태와 비율에 따른 클래스명 설정
  // isZoomed가 true일 경우: imageRatio가 'horizontal'이면 'zoomed horizontal' 클래스 적용
	// imageRatio가 'vertical'이면 'zoomed vertical' 클래스 적용
  // isZoomed가 false일 경우 빈 문자열 반환
  const zoomClass = isZoomed ? imageRatio === 'horizontal' ? 'zoomed horizontal' : 'zoomed vertical' : '';

  return createPortal(
    <ModalOverlay onClose={onClose} className="screenshot_modal">
      <div className={`modal_content ${zoomClass}`} onClick={(e) => e.stopPropagation()}>
        <SSModalButtons currentIndex={currentIndex} max={imageUrl.length} isZoomed={isZoomed} onPrev={handlePrev} onNext={handleNext}/>
				<SSModalImage src={imageUrl[currentIndex].src} alt={imageUrl[currentIndex].alt} onClick={() => setIsZoomed(!isZoomed)}/>
      </div>
    </ModalOverlay>,document.body
  );
}