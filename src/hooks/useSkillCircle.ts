import { skillItemsData } from "@/data/skillItemdata";
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

	const handleMouseUp = useCallback(()=>{
		isDraggingRef.current = false; // 마우스를 떼서 드래그 상태 비활성화

		setRotation((prev) => {
			// 📌 회전값 보정 - 스냅 유지
			// 📌 현재 회전된 각도에 가장 가까운 이미지 인덱스를 계산
			const normalized = normalize(prev); // 이전 회전 각도를 0~360도 사이 값으로 정리
			// ex) normalized가 540일 때(원래는 normalized를 거치면 540이 180으로 바뀜):
			// (540 / 20) = 27인데 totalItems가 현재는 18이므로 나머지는 9, 나중에 이미지 추가하면 소수점 나올 것을 대비하여 반올림도 추가
			const indexByStep = Math.round(normalized / angleStep) % totalItems;
			// 9 * 20 = 180, 즉 9번째 index 이미지가 정확히 원형 최상단에 위치하려면 회전값이 180도가 되어야 한다는 뜻
			const snappedRotation = indexByStep * angleStep;
			const newRotation = prev - (normalized - snappedRotation); // ex) prev - (170 - 180) => prev - (-10) => prev + 10

			// 📌 원형이 rotate된 상태에서 최상단을 구해도 rotate된 상태로 최상단이 구해지기 때문에
			// 📌 activeIndex는 angleMap을 따로 만들어서 기준으로 설정해야함
			const angleMap = [ // 인덱스별 고정 위치 각도 리스트
				0, 340, 320, 300, 280, 260, 240, 220, 200,
				180, 160, 140, 120, 100, 80, 60, 40, 20
			];

			let closestIndex = 0; // 인덱스를 저장하는 변수
			let smallestDiff = Infinity; // smallestDiff는 가장 작은 차이를 저장

			angleMap.forEach((angle, index) => {
				// 현재 원이 정렬된 회전값 - 인덱스별 고정 회전값을 절대값으로 출력
				const diff = Math.abs(normalize(snappedRotation - angle));
				if (diff < smallestDiff) { // 더 가까운 값이 나오면 갱신
					smallestDiff = diff; // 새로운 최소 거리로 저장
					closestIndex = index; // 해당하는 인덱스를 closestIndex에 저장
				}
			});

			//❗ Cannot update a component (SkillSection) while rendering a different component (SkillCircle) 오류 해결
			// requestAnimationFrame로 React의 렌더링이 완전히 끝난 후에 안전하게 실행
			requestAnimationFrame(() => {
				setActiveIndex(closestIndex);
			});
			return newRotation; // 회전값 보정 후 적용
		});

	}, [angleStep, totalItems, setActiveIndex])

	return { angleStep, skillCircleRef, isDraggingRef, rotation, normalize, handleMouseDown, handleMouseMove, handleMouseUp, };
}
