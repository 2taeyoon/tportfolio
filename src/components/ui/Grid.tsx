'use client';

import { useRegisterHTMLRef } from "@/hooks/useArrayRef";
import { useYPositions } from "@/hooks/useYPositions";
import { GridProps, GridColumnProps } from "@/types/props";
import React, { useRef } from 'react';

// 📌 메인 BgGrid 컴포넌트 START!
export default function Grid({ gridColumns }: GridProps) {
  if (!gridColumns || !Array.isArray(gridColumns)) { // gridColumns이 없거나 배열이 아니라면
    console.error("BgGrid", gridColumns); // 오류 메시지 출력
    return null; // 그리고 null 반환(안전한 렌더링을 위함)
  }

  return (
    <div className="grid">
      {gridColumns.map((col, colIndex) => (
        <GridColumn key={colIndex} gap={col.gap} paddingTop={col.paddingTop} listConfig={col.listConfig} mainScrollRef={col.mainScrollRef}/>
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
  );
};
// 📌 개별 `GridColumn` 컴포넌트 END!