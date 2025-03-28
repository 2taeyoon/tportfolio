import { useRef, useState, useEffect, CSSProperties } from "react";

// 사용할 mix-blend-mode 리스트
const blendModes: CSSProperties['mixBlendMode'][] = [
  'color-burn',
  'color-dodge',
  'difference',
  'exclusion',
  'hard-light',
  'luminosity',
  'multiply',
  'overlay',
];

const useMouseEffect = () => {
  const gMatrixRef = useRef({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
  const circleMatrixRef = useRef({ a: 0, b: 1, c: -1, d: 0, e: 1440, f: 0 });
  const rotationRef = useRef(0);
	const translateRef = useRef({ x: "7%", y: "0%" });
	const translateRef2 = useRef({ x: "0%", y: "0%" });
	const lastUpdateTimeRef = useRef(0); // 이미지 변경 시간 제한을 위한 ref
	const lastBlendModeUpdateRef = useRef(0); // 블렌드 모드 변경 시간 제한을 위한 ref
  
  // 🔥 `useState` 추가 -> 상태를 업데이트하면 리렌더링됨
  const [gMatrix, setGMatrix] = useState(gMatrixRef.current);
  const [circleMatrix, setCircleMatrix] = useState(circleMatrixRef.current);
  const [rotation, setRotation] = useState(rotationRef.current);
	const [translate, setTranslate] = useState(translateRef.current);
	const [translate2, setTranslate2] = useState(translateRef.current);
	const [imageNumber, setImageNumber] = useState(1);
	const [blendMode, setBlendMode] = useState<CSSProperties['mixBlendMode']>("normal");


  // ✅ requestAnimationFrame을 활용한 마우스 이동 처리
  useEffect(() => {
    let animationFrameId: number;

    const updateMouseEffect = () => {
      setGMatrix({ ...gMatrixRef.current });
      setCircleMatrix({ ...circleMatrixRef.current });
      setRotation(rotationRef.current);
			setTranslate({ ...translateRef.current });
			setTranslate2({ ...translateRef2.current });

			// 다음 프레임에서 updateMouseEffect 다시 실행 (애니메이션 루프)
      animationFrameId = requestAnimationFrame(updateMouseEffect);
    };

    updateMouseEffect();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);


	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = e.currentTarget.getBoundingClientRect(); // 현재 요소를 참조하여 크기와 화면에서의 위치 정보 반환
    const mouseX = e.clientX - rect.left; // 마우스 X 좌표 - 요소의 왼쪽 경계 = 마우스가 요소의 왼쪽에서 얼마나 떨어져 있는지 계산
    const mouseY = e.clientY - rect.top; // 마우스 Y 좌표 - 요소의 위쪽 경계 = 마우스가 요소의 위쪽에서 얼마나 떨어져 있는지 계산

    const centerX = rect.width / 2; // 요소의 가로 길이 / 2 = 요소의 X 중심 좌표
    const centerY = rect.height / 2; // 요소의 세로 길이 / 2 = 요소의 Y 중심 좌표

    const deltaX = (mouseX - centerX) / centerX; // 마우스가 요소 중심에서 얼마나 떨어져 있는지 계산 (-1 ~ 1)
    const deltaY = (mouseY - centerY) / centerY; // 마우스가 요소 중심에서 얼마나 떨어져 있는지 계산 (-1 ~ 1)

    // 📌 g 태그의 matrix 계산
    gMatrixRef.current = {
      a: 1,
      b: deltaY * 0.01675, // Y 위치에 따라 기울기 변경
      c: deltaX * -0.01675, // X 위치에 따라 기울기 변경
      d: 1,
      e: deltaX * 11, // X 위치에 따라 평행 이동
      f: deltaY * -8, // Y 위치에 따라 평행 이동
    };

    // 📌 circle 태그의 matrix 계산
    circleMatrixRef.current = {
      a: 0,
      b: 1,
      c: -1,
      d: 0,
      e: 1440 + deltaX * 10, // X 위치에 따라 이동
      f: deltaY * 5, // Y 위치에 따라 이동
    };

		// 📌 compass 회전 각도 계산 (-10 ~ 10도)
		rotationRef.current = deltaX * 10;
		
		// 📌 translate 값 변경 (비율 조정)
		translateRef.current = {
			// x: (7 - deltaX * -5).toFixed(4) + "%", // X축 비율 보정
			// y: (deltaY * 2.5).toFixed(4) + "%" // Y축 비율 보정
			x: (deltaX * 1.5).toFixed(4) + "%", // X축 비율 보정
			y: (deltaY * 1.5).toFixed(4) + "%" // Y축 비율 보정
		};

		translateRef2.current = {
			x: (deltaX * 20).toFixed(4) + "%", // X축 비율 보정
			y: (deltaY * 15).toFixed(4) + "%" // Y축 비율 보정
		};

		const now = Date.now();

		// 📌 profile_image 랜덤값으로 변경 (100ms 간격으로만 변경)
		if (now - lastUpdateTimeRef.current > 100) { // lastUpdateTimeRef.current는 마지막으로 이미지가 변경된 시간을 저장하는 변수 
			lastUpdateTimeRef.current = now; // 현재 시간을 lastUpdateTimeRef.current에 저장
			setImageNumber(Math.floor(Math.random() * 16) + 2); // 2~17 랜덤 숫자 생성 및 저장
		}

		// 📌 profile의 video 태그 필터값 변경 (100ms 간격으로만 변경)
		if (now - lastBlendModeUpdateRef.current > 100) { // lastBlendModeUpdateRef.current는 마지막으로 이미지가 변경된 시간을 저장하는 변수 
			lastBlendModeUpdateRef.current = now; // 현재 시간을 lastBlendModeUpdateRef.current에 저장장
			const randomIndex = Math.floor(Math.random() * blendModes.length); // 랜덤 인덱스 선택
			setBlendMode(blendModes[randomIndex]); // 랜덤 인덱스 생성 및 저장
		}
	};

	// 📌 마우스가 profile_card 밖으로 나가면 기본 이미지(1)로 리셋
	const profileHandleMouseLeave = () => {
		setImageNumber(1); // 기본 이미지로 변경
	};

	// 📌 마우스가 video_wrap 밖으로 나가면 기본값('normal')로 리셋
	const videoHandleMouseLeave = () => {
		setBlendMode("normal"); // 기본 mix-blend-mode로 변경
	};

  // 상태와 함수 반환
	return { gMatrix, circleMatrix, rotation, translate, translate2, imageNumber, blendMode, profileHandleMouseLeave, videoHandleMouseLeave, handleMouseMove, };
}
export default useMouseEffect;
