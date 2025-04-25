'use client';

import { createPortal } from 'react-dom';
import SSModalOverlay from '@/components/modal/ModalOverlay';
import Image from 'next/image';
import { PopupModalProps } from "@/types/modalProps";
import { useEffect, useState } from 'react';
import { useModalStore } from "@/hooks/useModalStore";

export default function PopupModal({ isOpen, currentProject, onClose }: PopupModalProps) {
	const { setModalOpen } = useModalStore();

	useEffect(() => {
		if (isOpen) {
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.documentElement.style.overflow = 'unset';
		}

    setModalOpen(isOpen);

		return () => {
			setModalOpen(false);
			document.documentElement.style.overflow = 'unset';
		};
  }, [isOpen, setModalOpen]);


  // Array(length).fill('auto')는 length 길이의 배열을 생성하고 모든 요소를 'auto'로 채움(기본값이 auto)
  const [containerHeights, setContainerHeights] = useState<number[]>(Array(currentProject?.images?.length || 0).fill('auto'));

  // 이미지가 로드될 때 실행되는 핸들러 함수
  const handleImageLoad = (index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement; // 이미지 요소를 HTMLImageElement 타입으로 지정
    const { naturalWidth, naturalHeight } = img; // 이미지의 원본 너비와 높이를 구조분해로 가져옴
    const aspectRatio = naturalHeight / naturalWidth; // 이미지의 실제 종횡비(세로/가로) 계산(ex: 1500px/1920px = 0.78125)
    const containerWidth = img.offsetWidth; // 현재 화면에 표시된 이미지 컨테이너의 너비를 가져옴(ex: 1280px)
    const calculatedHeight = containerWidth * aspectRatio; // 컨테이너 너비와 종횡비를 곱해서 적절한 높이 계산(ex: 1280px * 0.78125 = 1000px)
    
    // 이전 높이 배열을 업데이트
    setContainerHeights(prev => {
      const newHeights = [...prev]; // 이전 배열을 스프레드 연산자로 복사
      newHeights[index] = calculatedHeight; // 현재 인덱스의 높이값을 계산된 높이로 업데이트
      return newHeights;
    });
  };

	if (!isOpen) return null;

  return createPortal(
    <SSModalOverlay onClose={onClose} className="popup_modal">
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
				<div className="modal_header_wrap">
					<div className="modal_header">
						<div className="modal_title">{currentProject?.title}</div>
						<div className="modal_date">{currentProject?.date}</div>
					</div>
					<div className="modal_info">
						<span className="modal_type">{currentProject?.type}</span>
						<span className="modal_contribution">{currentProject?.contribution}</span>
					</div>
				</div>
        {currentProject?.images.map((image, index) => (
					<div key={index} className="modal_image"
						style={{ height: typeof containerHeights[index] === 'number' ? `${containerHeights[index]}px` : 'auto' }}
					>
						<Image src={image.src} alt={image.alt} fill unoptimized
							sizes="100%"
							style={{ objectFit: 'contain' }}
							onDragStart={e => e.preventDefault()}
							onContextMenu={e => e.preventDefault()}
							onLoad={(e) => handleImageLoad(index, e)}
						/>
					</div>
        ))}
      </div>
    </SSModalOverlay>,document.body
  );
}