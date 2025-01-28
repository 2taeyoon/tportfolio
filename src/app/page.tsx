'use client';

import BgElem from "@/components/ux/BgElem";
import "@/style/font.css";
import "@/style/style.css";

export default function Home() {
  return (
    <div>
			<BgElem/>
			<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '100vh', background: "#fff", overflow:"hidden"}}>
				<div>
					{/* <div style={{fontFamily: `'NCL_Rabegs', 'Malgun Gothic', sans-serif`, fontSize: "100px", color: "#1f1f1f", lineHeight:"100%", fontWeight: "", textAlign: 'center' }}>TYP</div>
					<div style={{fontFamily: `'NCL_Rabegs', 'Malgun Gothic', sans-serif`, fontSize: "100px", color: "#1f1f1f", lineHeight:"100%", fontWeight: "" }}>PORTFOLIO</div> */}
					{/* <div style={{fontFamily: `'NCL_Rabegs', 'Malgun Gothic', sans-serif`, fontSize: "36px", color: "#1f1f1f", lineHeight:"100%", fontWeight: "" }}>01 02 03 04 05 06 07 08 09</div> */}
					{/* <div style={{fontSize: "26px", color: "#fff", lineHeight:"150%", fontWeight: "" }}>안녕하세요 이것은 세션 스토리지를 정리하다가 콘솔창에 ReactPaginate의 오류가 뜨는걸 확인했습니다. ReactPaginate은 페이지네이션을 간단하게 사용할 수 있도록 해주는 라이브러리인데요. 사용하다 보면 데이터가 없는 경우나 페이지 수가 0으로 계산될 때 다음과 같은 오류가 발생할 수 있습니다. 오류 메시지는 forcePage prop provided is greater than the maximum page index from pageCount prop 내용인데 ReactPaginate 컴포넌트의 forcePage 속성 값이 pageCount에서 계산된 페이지 수를 초과하거나 빈 데이터로 인해 pageCount 값이 잘못 계산될 때 발생하는 문제입니다.</div> */}
				</div>
				{/* <div className="svg_wrap" style={{ transform: 'rotate(-10deg)', width: '110%' }}>
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" className="wave-2">
						<defs>
							<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
						</defs>
						<g className="parallax">
							<use xlinkHref="#gentle-wave" x="50" y="0" fill="#1f1f1f"></use>
							<use xlinkHref="#gentle-wave" x="50" y="4" fill="#1f1f1fd1"></use>
							<use xlinkHref="#gentle-wave" x="50" y="8" fill="#1f1f1fa3"></use>
						</g>
					</svg>
				</div> */}
			</div>
			<div style={{height: '100vh', background: "#fede4d"}}></div>
    </div>
  );
}