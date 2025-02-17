'use client';
import useSlotMachineText from "@/hooks/useSlotMachineText";
import { GsabRefProps } from "@/types/props";

export default function SlotMachineText({firstTextRefs, secondTextRefs}: GsabRefProps) {
	const firstText = "TAEYOON"; // 최종 출력되는 첫 번째 줄 텍스트
	const secondText = "PORTFOLIO"; // 최종 출력되는 두 번째 줄 텍스트
	const IterationCount = 50; // 반복 횟수
	const RunningInterval = 50; // 함수의 실행 간격(ms)
	const delay = 4000; // 딜레이(ms)

	const { slotText, isVisible } = useSlotMachineText({firstText, secondText, IterationCount, RunningInterval, delay});

	return (
		<div className="title_wrap" style={{ visibility: isVisible ? "visible" : "hidden" }}>
			<div className="title_row">
				{firstText.split("").map((char, index) => (
					<div className="text" key={index} ref={(ele) => {
						if(ele) {
							slotText.current[index] = ele;
							firstTextRefs!.current[index] = ele;
						}
					}}>{char}</div>
				))}
			</div>
			<div className="title_row">
				{secondText.split("").map((char, index) => (
					<div className="text" key={index} ref={(ele) => {
            if (ele) {
							slotText.current[index + firstText.length] = ele;
							secondTextRefs!.current[index] = ele;
						}
					}}>{char}</div>
				))}
			</div>
		</div>
	)
}