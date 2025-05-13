import { skillItemsData } from "@/data/skillData";
import { useCallback, useRef, useState } from "react";

export function useSkillCircle({setActiveIndex}: {setActiveIndex: React.Dispatch<React.SetStateAction<number>>}){
	const [rotation, setRotation] = useState(0); // 원이 얼마나 회전했는지 기억하는 값
	const skillCircleRef = useRef<HTMLDivElement>(null); // 원 직접 DOM으로 참조하기 위한 Ref
	const isDraggingRef = useRef(false); // 마우스가 드래그 중인지 확인하는 플래그
	const prevAngleRef = useRef(0); // 이전 마우스 위치의 각도 (회전값 계산용)

	const totalItems = skillItemsData.length; // 총 이미지 수
	const angleStep = 360 / totalItems; // 각 이미지 사이의 간격 각도 (360도를 아이템 수로 나눈 것)

	const getAngle = (x: number, y: number) => {
		// skill_circle 클래스가 웹 브라우저에서 위치와 크기를 알려줌
		const rect = skillCircleRef.current?.getBoundingClientRect();
		if (!rect) return 0; // 없으면 반환

		const cx = rect.left + rect.width / 2; // 원의 가로 중심 좌표(x축의 정중앙)
		const cy = rect.top + rect.height / 2; // 원의 세로 중심 좌표(y축의 정중앙)
		const dx = x - cx; // x(마우스 x 좌표) - cx = 마우스 위치가 원의 중심보다 얼마나 오른쪽/왼쪽에 있는지
		const dy = y - cy; // y(마우스 y 좌표) - cy = 마우스 위치가 원의 중심보다 얼마나 위쪽/아래쪽에 있는지
		const angle = Math.atan2(dy, dx) * (180 / Math.PI); // atan2는 삼각함수에서 라디안 계산 함수, (1 라디안 = 180 / π˚)은 라디안을 각도로 바꾸기 위한 수학적 공식

		return angle;
	};

	const normalize = (angle: number) => {
		// 회전값이 370도 → 10도, -30도 → 330도로 정리
		return ((angle % 360) + 360) % 360;
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		isDraggingRef.current = true; // 마우스 누를 시 isDraggingRef 활성화
		prevAngleRef.current = getAngle(e.clientX, e.clientY); // 마우스를 눌렀을 때의 각도를 prevAngle에 저장함
	};

	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (!isDraggingRef.current) return; // 마우스 드래그가 아닐 시 반환

		const currentAngle = getAngle(e.clientX, e.clientY); //현재 마우스 X,Y 좌표를 getAngle에 저장함
		let delta = currentAngle - prevAngleRef.current; // 현재 각도와 이전 각도의 차이로 얼마나 회전했는지 계산

		// 360도 기준의 회전을 -180 ~ + 180도로 보정하는 코드
		if (delta > 180) delta -= 360; // ex) 340일 경우: (340 > 180), 340 = 340 - 360, 즉 340 = -20,
		if (delta < -180) delta += 360; // ex) -230일 경우: (-230 < -180), -230 = -230 + 360, 즉 -230 = 130,

		setRotation((prev) => prev + delta); // 기존 회전 값에 내가 회전시킨 값을 더해서 저장.
		prevAngleRef.current = currentAngle; // 내가 회전 시킨 값을 다음 계산을 위해 prevAngle에 저장함
	}, []);

	const handleMouseUp = useCallback(() => {
		isDraggingRef.current = false;
	
		setRotation((prevRotation) => {
			const normalizedRotation = normalize(prevRotation); // 현재 회전 각도를 0~360 사이로 정리
	
			// 현재 회전 상태에서 가장 위(0도)에 가까운 인덱스를 계산
			const index = Math.floor((360 - normalizedRotation + angleStep / 2) / angleStep) % totalItems;
	
			// 해당 인덱스가 위쪽에 정확히 오도록 회전값 보정
			const snappedRotation = -index * angleStep;
	
			requestAnimationFrame(() => {
				setActiveIndex(index);
			});
	
			return snappedRotation;
		});
	}, [angleStep, totalItems, setActiveIndex]);
	

	return { angleStep, skillCircleRef, isDraggingRef, rotation, normalize, handleMouseDown, handleMouseMove, handleMouseUp, };
}
