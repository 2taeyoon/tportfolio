'use client';
import { useDashAnimation } from "@/hooks/useDashAnimation";

export default function SmallCompass({rotation}: { rotation: number}) {
	const { dashArray, isVisible } = useDashAnimation({ delay: 4000, duration: 1500, intervalTime: 10, startValue: 25, intervalCount: 3 });

	return (
		<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ visibility: isVisible ? "visible" : "hidden", transform: `rotate(${rotation}deg)` ,strokeDasharray: `1px, ${dashArray}px`}}>
			<line x1="24.5" y1="24.5" x2="24.5" y2="0" stroke="var(--thema)" strokeWidth={3} vectorEffect="non-scaling-stroke" data-svg-origin="24.5 12.25" transform="matrix(1,0,0,1,0,0)"/>
			<line x1="24.5" y1="24.5" x2="35.5" y2="13.5" stroke="var(--thema)" strokeWidth={3} vectorEffect="non-scaling-stroke" data-svg-origin="30 19" transform="matrix(1,0,0,1,0,0)"/>
			<line x1="24.5" y1="24.5" x2="50" y2="24.5" stroke="var(--thema)" strokeWidth={3} vectorEffect="non-scaling-stroke" data-svg-origin="37.25 24.5" transform="matrix(1,0,0,1,0,0)"/>
			<line x1="24.5" y1="24.5" y2="24.5" stroke="var(--thema)" strokeWidth={3} vectorEffect="non-scaling-stroke" data-svg-origin="12.25 24.5" transform="matrix(1,0,0,1,0,0)"/>
			<line x1="24.5" y1="24.5" x2="24.5" y2="50" stroke="var(--thema)" strokeWidth={3} vectorEffect="non-scaling-stroke" data-svg-origin="24.5 37.25" transform="matrix(1,0,0,1,0,0)"/>
			<line x1="24.5" y1="24.5" x2="13.5" y2="13.5" stroke="var(--thema)" strokeWidth={3} vectorEffect="non-scaling-stroke" data-svg-origin="19 19" transform="matrix(1,0,0,1,0,0)"/>
			<line x1="24.5" y1="24.5" x2="35.5" y2="35.5" stroke="var(--thema)" strokeWidth={3} vectorEffect="non-scaling-stroke" data-svg-origin="30 30" transform="matrix(1,0,0,1,0,0)"/>
			<line x1="24.5" y1="24.5" x2="13.5" y2="35.5" stroke="var(--thema)" strokeWidth={3} vectorEffect="non-scaling-stroke" data-svg-origin="19 30" transform="matrix(1,0,0,1,0,0)"/>
			{/* <rect x="16.5" y="16.5" width="16" height="16" stroke="var(--thema)" strokeWidth={3} vectorEffect="non-scaling-stroke" data-svg-origin="24.5 24.5" transform="matrix(1,0,0,1,0,0)"/> */}
		</svg>
	)
}