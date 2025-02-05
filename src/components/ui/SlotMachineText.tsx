import useSlotMachineText from "@/hooks/useSlotMachineText";

export default function SlotMachineText() {
	const firstText = "TAEYOON"; // 최종 출력되는 첫 번째 줄 텍스트
	const secondText = "PORTFOLIO"; // 최종 출력되는 두 번째 줄 텍스트
	const IterationCount = 50; // 반복 횟수
	const RunningInterval = 50; // 함수의 실행 간격(ms)

	const { textRefs } = useSlotMachineText({firstText, secondText, IterationCount, RunningInterval});

	return (
		<div className="title_wrap">
			<div className="title_row">
				{firstText.split("").map((char, index) => (
					<div className="text" key={index} ref={(ele) => { if(ele){ textRefs.current[index] = ele; } }}>{char}</div>
				))}
			</div>
			<div className="title_row">
				{secondText.split("").map((char, index) => (
					<div className="text" key={index} ref={(ele) => { if(ele){ textRefs.current[index + firstText.length] = ele; } }}>{char}</div>
				))}
			</div>
		</div>
	)
}