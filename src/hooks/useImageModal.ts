import { useState } from 'react';

export const useImageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 이미지 모달의 열림/닫힘 상태를 관리하는 state
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 보여지는 이미지의 인덱스를 관리하는 state

  const handleImageClick = (index: number) => { // 썸네일 이미지 클릭 시 해당 이미지를 모달로 보여주는 핸들러
    setCurrentImageIndex(index); // 클릭된 이미지의 인덱스를 저장
    setIsModalOpen(true); // 모달 활성화
  };

  const handlePrevImage = () => { // 이전 이미지로 이동하는 핸들러
    setCurrentImageIndex((prev) => prev - 1); // 이전 이미지로 이동
  };

  const handleNextImage = () => { // 다음 이미지로 이동하는 핸들러
    setCurrentImageIndex((prev) => prev + 1); // 다음 이미지로 이동
  };

  const handleCloseModal = () => { // 배경 클릭 시 모달 비활성화하는 핸들러
    setIsModalOpen(false); // 모달 비활성화
  };

  return { isModalOpen, currentImageIndex, handleImageClick, handlePrevImage, handleNextImage, handleCloseModal };
}; 