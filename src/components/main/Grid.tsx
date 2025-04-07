'use client';

import { useRegisterHTMLRef } from "@/hooks/useArrayRef";
import { useTypewriterEffect } from "@/hooks/useTypewriterEffect";
import { useYPositions } from "@/hooks/useYPositions";
import { GridProps, GridColumnProps } from "@/types/mainProps";
import React, { useRef } from 'react';

// 📌 메인 BgGrid 컴포넌트 START!
export default function Grid({ gridColumns }: GridProps) {
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
	useTypewriterEffect(firstRowRefs, secondRowRefs, thirdRowRefs, fourthRowRefs);

  if (!gridColumns || !Array.isArray(gridColumns)) { // gridColumns이 없거나 배열이 아니라면
    console.error("BgGrid", gridColumns); // 오류 메시지 출력
    return null; // 그리고 null 반환(안전한 렌더링을 위함)
  }

	  // ✅ 각 `grid_col` 뒤에 삽입할 `typewriter_row` 데이터 배열
		const typewriterRows = [
			{
				key: 'row1',
				content: (
					<div className="typewriter_row row1" style={{ whiteSpace: "pre-line" }}>
						<div className="text" ref={setFirstRowRef}>{`Creative Web\nPublisher`}</div>
						<div className="text" ref={setSecondRowRef} style={{ textAlign: 'right' }}>{`Detail-Oriented\nPublisher`}</div>
					</div>
				)
			},
			{
				key: 'row2',
				content: (
					<div className="typewriter_row row2" style={{ whiteSpace: "pre-line" }}>
						<div className="text" ref={setThirdRowRef}>{`Visionary UI/UX\nDeveloper`}</div>
						<div className="text" ref={setThirdRowRef}>{`Future-Driven\nWeb Architect`}</div>
					</div>
				)
			},
			{
				key: 'row3',
				content: (
					<div className="typewriter_row row3" style={{ whiteSpace: "pre-line" }}>
						<div className="text" ref={setFirstRowRef}>{`Scalable Web\nFrontend`}</div>
						<div className="text" ref={setSecondRowRef} style={{ textAlign: 'right' }}>{`Responsive\nUI Publisher`}</div>
					</div>
				)
			},
			{
				key: 'row4',
				content: (
					<div className="typewriter_row row4" style={{ whiteSpace: "pre-line" }}>
						<div className="text" ref={setFirstRowRef} style={{ textAlign: 'right' }}>{`Interaction UI\nDeveloper`}</div>
						<div className="text" ref={setThirdRowRef} style={{ textAlign: 'right' }}>{`User-Centric\nDesigner`}</div>
					</div>
				)
			},
			{
				key: 'row5',
				content: (
					<div className="typewriter_row row5" style={{ whiteSpace: "pre-line" }}>
						<div className="text" ref={setSecondRowRef} style={{ textAlign: 'left' }}>{`Seamless UI\nEngineer`}</div>
						<div className="text text_scroll_down" ref={setFourthRowRef} style={{ textAlign: 'center' }}>{`Scroll Down`}</div>
					</div>
				)
			},
		];

  return (
    <div className="grid">
      {gridColumns.map((col, colIndex) => (
        <React.Fragment key={colIndex}>
					<GridColumn key={colIndex} gap={col.gap} paddingTop={col.paddingTop} listConfig={col.listConfig} mainScrollRef={col.mainScrollRef}/>
					{typewriterRows[colIndex] && (
						<div className="typewriter" key={typewriterRows[colIndex].key}>
							{typewriterRows[colIndex].content}
						</div>
					)}
				</React.Fragment>
      ))}
    </div>
  );
}
// 📌 메인 BgGrid 컴포넌트 END!


// 📌 개별 `GridColumn` 컴포넌트 START!
const GridColumn: React.FC<GridColumnProps> = ({ gap, paddingTop, listConfig, mainScrollRef }) => {
	const pxRefs = useRef<HTMLDivElement[]>([]); // grid_item 요소의 위치를 저장하는 배열
  const yPositions = useYPositions(pxRefs, listConfig, mainScrollRef);

	const setGridPxRef = useRegisterHTMLRef(pxRefs);

  return (
		<>
			<div className="grid_col" style={{ gap, paddingTop }}>
				{listConfig.map((itemCount, listIndex) => (
					<div className="grid_list" key={listIndex}>

						{Array.from({ length: itemCount }, (_, itemIndex) => { // 길이가 itemCount인 배열을 생성
							const itemPosIndex = listConfig.slice(0, listIndex) // listConfig 배열의 0 ~ listIndex의 이전까지 자르고
							.reduce((acc, val) => acc + val, 0) // acc(이전 grid_list의 값)과 val(현재 grid_list 값)을 더하여 총 grid_item 개수 계산
							+ itemIndex; // itemIndex를 더하여 ✅ 현재 grid_list에서 몇 번째 grid_item인지 나타냄

							return (
								<div className="grid_item" key={`${listIndex}-${itemIndex}`}>
									<div ref={setGridPxRef} className="grid_px">
										{`${yPositions[itemPosIndex]}px` || `XXX`}
									</div>
								</div>
							);
						})}
					</div>
				))}

			</div>
		</>
  );
};
// 📌 개별 `GridColumn` 컴포넌트 END!