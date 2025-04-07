import { UseDashAnimationProps } from "@/types/mainProps";
import { useState, useEffect } from 'react';

export function useDashAnimation({ delay = 2000, duration = 2000, intervalTime = 20, startValue = 25, intervalCount = 0 }: UseDashAnimationProps) {
	const [dashArray, setDashArray] = useState(startValue);
	const [isVisible, setIsVisible] = useState(false); // 초기에는 숨김 상태

	useEffect(() => {
		// delay 애니메이션 시작 전 대기 시간 (기본값 2000ms)
		// duration 애니메이션 실행 시간 (기본값 2000ms)
		// intervalTime 업데이트 간격 (기본값 20ms)
		// startValue 초기 dashArray 값은 stroke-dasharray 값 확인해보고 결정 (기본값 20)
		// 원하는 dashArray 값만큼 감소 (기본값 0)

		const steps = duration / intervalTime; // 총 스텝 개수 = 기본값 기준 100(2000ms / 20ms)
		const stepSize = startValue / steps;   // 한 번에 감소하는 크기 = 기본값 기준 0.25(25 / 100)

		let currentDash = startValue; // 현재 dashArray 값을 관리
		let interval: NodeJS.Timeout; // setInterval 반환값 저장하는 변수

		// delay 후 애니메이션 실행
		const timeout = setTimeout(() => {
			setIsVisible(true); // delay 이후 SVG 보임

			interval = setInterval(() => {
				currentDash -= stepSize; // dashArray 값을 stepSize 값(1)씩 감소
				if (currentDash <= intervalCount + 1) {
					clearInterval(interval); // Interval 정지
					setDashArray(intervalCount); // 마지막 값은 0으로 고정
				} else {
					setDashArray(currentDash); // <= intervalCount 보다 작을 때까지 실행
				}
			}, intervalTime); // intervalTime마다 실행

		}, delay); // delay 값만큼 지연

		// 클린업 함수 (컴포넌트가 사라질 때 정리)
		return () => {
			clearTimeout(timeout); // 지연 실행 중 언마운트 시 정리
			clearInterval(interval); // 애니메이션 중 언마운트 시 정리
		};
	}, [delay, duration, intervalTime, startValue, intervalCount]); // 해당 값이 변경되면 애니메이션 재실행

	return { dashArray, isVisible }; // dashArray, isVisible 반환
}