import { useRef, useState, useEffect } from "react";

const useMouseEffect = () => {
  const gMatrixRef = useRef({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
  const circleMatrixRef = useRef({ a: 0, b: 1, c: -1, d: 0, e: 1440, f: 0 });
  const rotationRef = useRef(0);
  
  // 🔥 `useState` 추가 -> 상태를 업데이트하면 리렌더링됨
  const [gMatrix, setGMatrix] = useState(gMatrixRef.current);
  const [circleMatrix, setCircleMatrix] = useState(circleMatrixRef.current);
  const [rotation, setRotation] = useState(rotationRef.current);

  // ✅ requestAnimationFrame을 활용한 마우스 이동 처리
  useEffect(() => {
    let animationFrameId: number;

    const updateMouseEffect = () => {
      setGMatrix({ ...gMatrixRef.current });
      setCircleMatrix({ ...circleMatrixRef.current });
      setRotation(rotationRef.current);

			// 다음 프레임에서 updateMouseEffect 다시 실행 (애니메이션 루프)
      animationFrameId = requestAnimationFrame(updateMouseEffect);
    };

    updateMouseEffect();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = e.currentTarget.getBoundingClientRect(); // 현재 요소를 참조하여 크기와 화면에서의 위치 정보 반환
    const mouseX = e.clientX - rect.left; // 마우스 X 좌표 - 요소의 왼쪽 경계
    const mouseY = e.clientY - rect.top; // 마우스 Y 좌표 - 요소의 위쪽 경계계

    const centerX = rect.width / 2; // 요소의 가로 길이 / 2 = 요소의 X 중심 좌표
    const centerY = rect.height / 2; // 요소의 세로 길이 / 2 = 요소의 Y 중심 좌표

    const deltaX = (mouseX - centerX) / centerX; // 마우스가 요소 중심에서 얼마나 떨어져 있는지 계산 (-1 ~ 1)
    const deltaY = (mouseY - centerY) / centerY; // 마우스가 요소 중심에서 얼마나 떨어져 있는지 계산 (-1 ~ 1)

    // g 태그의 matrix 계산
    gMatrixRef.current = {
      a: 1,
      b: deltaY * 0.01675, // Y 위치에 따라 기울기 변경
      c: deltaX * -0.01675, // X 위치에 따라 기울기 변경
      d: 1,
      e: deltaX * 11, // X 위치에 따라 평행 이동
      f: deltaY * -8, // Y 위치에 따라 평행 이동
    };

    // circle 태그의 matrix 계산
    circleMatrixRef.current = {
      a: 0,
      b: 1,
      c: -1,
      d: 0,
      e: 1440 + deltaX * 10, // X 위치에 따라 이동
      f: deltaY * 5, // Y 위치에 따라 이동
    };

		// compass 회전 각도 계산 (-10 ~ 10도)
		rotationRef.current = deltaX * 10;
};
  // 상태와 함수 반환
	return { gMatrix, circleMatrix, rotation, handleMouseMove };
}
export default useMouseEffect;
