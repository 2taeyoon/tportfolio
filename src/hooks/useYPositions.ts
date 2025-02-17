'use client';

import { useEffect, useState } from 'react';

// 📌 이 훅은 `grid_item` 요소들의 Y 위치를 가져와서 상태를 업데이트하는 역할을 함
export function useYPositions(pxRefs: React.RefObject<HTMLDivElement[]>, listConfig: number[], bgElemRef: React.RefObject<HTMLDivElement | null>) {
	const [yPositions, setYPositions] = useState<number[]>([]); // Y 위치를 저장하는 함수

	// 📌 스크롤 감지 이벤트 핸들러
	useEffect(() => {
		const updateYPositions = () => {
			if (pxRefs.current.length > 0 && bgElemRef.current) { // pxRefs의 길이가 0 이상이고 parentRef가 존재해야 실행
				// bg_elem 요소가 브라우저 화면에서 얼마나 떨어져 있는지
				// getBoundingClientRect는 크기와 위치 정보를 가져오는 함수
				const parentTop = bgElemRef.current.getBoundingClientRect().top;
				const positions = pxRefs.current.map((el) => // 모든 요소를 맵핑해서 Y좌표 계산
					el ? Math.floor(el.getBoundingClientRect().top - parentTop) : 0 // bg_elem 클래스 기준으로 Y값 계산
				);

				// 상태 변경 감지 후 업데이트
				setYPositions((prevY) => {
					// 배열이 변경될 때만 상태 업데이트, 배열은 위치를 참조하기 때문에 문자열로 변환해서 확인해야함
					if (JSON.stringify(prevY) !== JSON.stringify(positions)) {
						return positions;
					}
					return prevY;
				});
			}
		};

		// 초기 Y 위치 설정
		updateYPositions();

		// 📌 MutationObserver로 요소 변경 감지(특정 요소가 변경될 때 실행되는 이벤트 리스너)
		const observer = new MutationObserver(updateYPositions);
		pxRefs.current.forEach((el) => {
			// attributes: 속성이 변경될 때 감지, childList: 내부 자식이 변경될 때 감지, subtree: 요소 내부의 모든 요소 변경 감지
			if (el) observer.observe(el, { attributes: true, subtree: true });
		});

		// 스크롤 및 리사이즈 시 updateYPositions 실행
		window.addEventListener("resize", updateYPositions);
		window.addEventListener("scroll", updateYPositions);

		return () => { // 언마운트 시 제거거
			window.removeEventListener("resize", updateYPositions);
			window.removeEventListener("scroll", updateYPositions);
			observer.disconnect();
		};
	}, [pxRefs, listConfig, bgElemRef]);

	return yPositions;
}