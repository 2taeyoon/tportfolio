'use client';

import { useDashAnimation } from "@/hooks/useDashAnimation";
import { Matrix } from "@/types/mainProps";

export default function BigCompass({ gMatrix, circleMatrix }: { gMatrix: Matrix, circleMatrix: Matrix }) {
	const { dashArray, isVisible } = useDashAnimation({ delay: 2000, duration: 2000, intervalTime: 10, startValue: 100, intervalCount: 10 });

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441.21 1441.21" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px`}}>
			<g strokeWidth="1" transform={`matrix(${gMatrix.a},${gMatrix.b},${gMatrix.c},${gMatrix.d},${gMatrix.e},${gMatrix.f})`}>
				<line x1="720.85" y1="720.85" x2="720.85" y2=".35" stroke="var(--thema)" strokeWidth={5} vectorEffect="non-scaling-stroke"/>
				<line x1="720.85" y1="720.85" x2="720.85" y2="1440.85" stroke="var(--thema)" strokeWidth={5} vectorEffect="non-scaling-stroke"/>
				<line x1="720.85" y1="720.85" x2=".35" y2="720.85" stroke="var(--thema)" strokeWidth={5} vectorEffect="non-scaling-stroke"/>
				{/* <line x1="720.85" y1="720.85" x2=".35" y2="1440.85" stroke="var(--thema)" strokeWidth={5} vectorEffect="non-scaling-stroke"/> */}
				{/* <line x1="720.85" y1="720.85" x2="1440.85" y2=".35" stroke="var(--thema)" strokeWidth={5} vectorEffect="non-scaling-stroke"/> */}
				<line x1="1440.85" y1="1440.85" x2="720.35" y2="720.85" stroke="var(--thema)" strokeWidth={5} vectorEffect="non-scaling-stroke"/>
				<line x1=".35" y1=".35" x2="720.35" y2="720.85" stroke="var(--thema)" strokeWidth={5} vectorEffect="non-scaling-stroke"/>
				<line x1="720.85" y1="720.85" x2="1440.85" y2="720.85" stroke="var(--thema)" strokeWidth={5} vectorEffect="non-scaling-stroke"/>
			</g>
			<circle cx="720.35" cy="720.35" r="420" stroke="var(--thema)" strokeWidth={5} fill="none" vectorEffect="non-scaling-stroke" transform={`matrix(${circleMatrix.a},${circleMatrix.b},${circleMatrix.c},${circleMatrix.d},${circleMatrix.e},${circleMatrix.f})`}/>
		</svg>
	)
}

