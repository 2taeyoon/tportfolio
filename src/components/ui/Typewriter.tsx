"use client";

import { RefObject, useRef } from "react";
import { useRegisterHTMLRef } from "@/hooks/useArrayRef";
import { useTypewriterAnimation } from "@/hooks/useTypewriterEffect";

export default function TypewriterAnimation({typewriterRefs}: { typewriterRefs: RefObject<(HTMLDivElement | null)>; }) {
  const firstRowRefs = useRef<HTMLDivElement[]>([]);
  const secondRowRefs = useRef<HTMLDivElement[]>([]);
	const thirdRowRefs = useRef<HTMLDivElement[]>([]);
	const fourthRowRefs = useRef<HTMLDivElement[]>([]);

  // ref 배열 관리 함수 (ref 콜백 사용)
	const setFirstRowRef = useRegisterHTMLRef(firstRowRefs);
	const setSecondRowRef = useRegisterHTMLRef(secondRowRefs);
	const setThirdRowRef = useRegisterHTMLRef(thirdRowRefs);
	const setFourthRowRef = useRegisterHTMLRef(fourthRowRefs);

	// 애니메이션 실행
	useTypewriterAnimation(firstRowRefs, secondRowRefs, thirdRowRefs, fourthRowRefs);

  return (
    <div className="typewriter" ref={typewriterRefs}>
      <div className="typewriter_row row1" style={{ whiteSpace: "pre-line" }}>
        <div className="text" ref={setFirstRowRef}>{`Creative Web \n Publisher`}</div>
        <div className="text" ref={setSecondRowRef} style={{ textAlign: 'right' }}>{`Innovative Frontend \n Publisher`}</div>
      </div>
      <div className="typewriter_row row2" style={{ whiteSpace: "pre-line" }}>
        <div className="text" ref={setThirdRowRef}>{`Visionary UI/UX \n Developer`}</div>
        <div className="text" ref={setThirdRowRef}>{`Future-Driven \n Web Architect`}</div>
      </div>
			<div className="typewriter_row row3" style={{ whiteSpace: "pre-line" }}>
				<div className="text" ref={setFirstRowRef}>{`Dynamic \n Curious Publisher`}</div>
				<div className="text" ref={setSecondRowRef} style={{ textAlign: 'right' }}>{`Interactive Experience \n Builder`}</div>
      </div>
			<div className="typewriter_row row4" style={{ whiteSpace: "pre-line" }}>
        <div className="text" ref={setFirstRowRef} style={{ textAlign: 'right' }}>{`Code & Creativity \n Publisher`}</div>
        <div className="text" ref={setThirdRowRef} style={{ textAlign: 'right' }}>{`Progressive Publisher \n Designer`}</div>
      </div>
			<div className="typewriter_row row5" style={{ whiteSpace: "pre-line" }}>
        <div className="text" ref={setSecondRowRef} style={{ textAlign: 'left' }}>{`Seamless UI Flow \n Designer`}</div>
        <div className="text text_scroll_down" ref={setFourthRowRef} style={{ textAlign: 'center' }}>{`Scroll Down`}</div>
      </div>
    </div>
  );
};