'use client';

import { ImageModalProps } from "@/types/modalProps";
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';

export default function ImageModal({ isOpen, onClose, screenshots, currentImageIndex, onPrev, onNext }: ImageModalProps) {
	const [isZoomed, setIsZoomed] = useState(false); // 이미지의 줌 상태를 관리하는 상태값 (true 줌인, false 줌아웃)
	const [imageRatio, setImageRatio] = useState<'horizontal' | 'vertical' | null>(null); // 이미지의 가로/세로 비율을 관리하는 상태값

	// 이미지의 가로/세로 비율을 체크하는 함수
	const checkImageRatio = useCallback(() => {
			const img: HTMLImageElement = new window.Image(); // 새로운 이미지 객체 생성
			img.src = screenshots[currentImageIndex]; // 현재 선택된 이미지의 src 설정
			img.onload = () => { // 이미지 로드가 완료되면 실행되는 콜백
				// 이미지의 width가 height보다 크면 'horizontal' 아니면 'vertical'로 설정
				setImageRatio(img.width > img.height ? 'horizontal' : 'vertical');
			}
	}, [currentImageIndex, screenshots]); // currentImageIndex나 screenshots가 변경될 때만 함수 재생성

	useEffect(() => { // 컴포넌트가 마운트되거나 checkImageRatio 함수가 변경될 때 실행
		checkImageRatio(); // 이미지 비율 체크 함수 실행
	}, [checkImageRatio]);


  // 키보드 이벤트와 스크롤을 관리 START!!
  useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => { // 키보드 이벤트 리스너
      if (e.key === 'Escape') {
        if (isZoomed) { // 줌 모드일 때 ESC 키를 누르면 줌 모드 해제
          setIsZoomed(false);
        } else {
          onClose(); // 줌 모드가 아닐 때 ESC 키를 누르면 모달 닫기
        }
      }
      if (!isZoomed) {
        if (e.key === 'ArrowLeft' && currentImageIndex > 0) onPrev(); // 왼쪽 화살표 키를 눌렀고 현재 이미지가 첫번째가 아니면 이전 이미지로
        if (e.key === 'ArrowRight' && currentImageIndex < screenshots.length - 1) onNext(); // 오른쪽 화살표 키를 눌렀고 현재 이미지가 마지막이 아니면 다음 이미지로
      }
    };

    if (isOpen) { // isOpen가 true일때만(모달이 열려있을 때만) 이벤트 리스너 추가
      document.addEventListener('keydown', handleKeyDown); // 키보드 이벤트 리스너 추가
      document.body.style.overflow = 'hidden'; // 모달이 열리면 body의 스크롤 막기
    }

    return () => { // 컴포넌트가 언마운트되거나 의존성이 변경될 때 클린업 함수
      document.removeEventListener('keydown', handleKeyDown);  // 이벤트 리스너 제거
      document.body.style.overflow = 'unset';  // 스크롤 활성화
    };
  }, [isOpen, onClose, onPrev, onNext, currentImageIndex, screenshots.length, isZoomed]);  // 의존성 배열


	const getZoomClass = () => { // 이미지의 비율에 따라 클래스를 반환하는 함수
		if (!isZoomed) return ''; // isZoomed가 false면 빈 문자열 반환
		return imageRatio === 'horizontal' ? 'zoomed horizontal' : 'zoomed vertical'; // 이미지가 가로, 세로형에 따라 클래스 반환 zoomed는 공통 클래스
	};

	const handleImageClick = () => { // 이미지 클릭 시 줌 상태를 토글하는 핸들러 함수
		setIsZoomed(!isZoomed); // isZoomed 상태를 반전시켜 줌 인/아웃 기능 구현
	};

  if (!isOpen) return null; // 모달이 닫혀있으면 null 반환

  return (
    // 모달 오버레이 - 배경을 클릭하면 모달이 닫힙니다
    <div className="modal_overlay" onClick={onClose}>
      {/* 부모 요소의 클릭 이벤트가 자식 요소로 전파되는 것을 막음 */}
      <div className={`modal_content ${ isZoomed ? getZoomClass() : '' }`} onClick={e => e.stopPropagation()}>
        { !isZoomed && currentImageIndex > 0 && ( // 첫번째 이미지가 아닐 때만 이전 버튼 활성화
          <button className="modal_prev" onClick={onPrev}>
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="var(--whiteEB)" viewBox="0 0 256 256">
							<path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
						</svg>
					</button>
        )}
        <div className="modal_image_container" onClick={handleImageClick}>
          <Image src={screenshots[currentImageIndex]} alt={`screenshot${currentImageIndex + 1}`} draggable={false} fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
						onDragStart={(e) => e.preventDefault()}
						onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        { !isZoomed && currentImageIndex < screenshots.length - 1 && ( // 마지막 이미지가 아닐 때만 다음 버튼 활성화
          <button className="modal_next" onClick={onNext}>
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="var(--whiteEB)" viewBox="0 0 256 256">
							<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
						</svg>
					</button>
        )}
      </div>
    </div>
  );
} 