'use client';
// import React, { useState } from 'react'
import BgSmallCompass from "./BgSmallCompass";
import useMouseEffect from "@/hooks/useMouseEffect";

export default function BgElem() {
	const { gMatrix, circleMatrix, rotation, handleMouseMove } = useMouseEffect();

	return (
		<div className="bg_elem" onMouseMove={handleMouseMove}>
			<div className="bg_big_compass">
				<svg viewBox="0 0 1440 1440" preserveAspectRatio="xMinYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g strokeWidth="1" transform={`matrix(${gMatrix.a},${gMatrix.b},${gMatrix.c},${gMatrix.d},${gMatrix.e},${gMatrix.f})`}>
						<line x1="720.5" y1="720.5" x2="720.5" y2="0" vectorEffect="non-scaling-stroke" data-svg-origin="720.5 360.25" transform="matrix(1,0,0,1,0,0)"/>
						<line x1="720.5" y1="720.5" x2="720.5" y2="1440.5" vectorEffect="non-scaling-stroke" data-svg-origin="720.5 1080.5" transform="matrix(1,0,0,1,0,0)"/>
						<line x1="720.5" y1="720.5" x2="0" y2="720.5" vectorEffect="non-scaling-stroke" data-svg-origin="360.25 720.5" transform="matrix(1,0,0,1,0,0)"/>
						{/* <line x1="720.5" y1="720.5" x2="0" y2="1440.5" vectorEffect="non-scaling-stroke" data-svg-origin="360.25 1080.5" transform="matrix(1,0,0,1,0,0)"/>
						<line x1="720.5" y1="720.5" x2="1440.5" y2="0" vectorEffect="non-scaling-stroke" data-svg-origin="1080.5 360.25" transform="matrix(1,0,0,1,0,0)"/> */}
						<line x1="720.5" y1="720.5" x2="1440.5" y2="720.5" vectorEffect="non-scaling-stroke" data-svg-origin="1080.5 720.5" transform="matrix(1,0,0,1,0,0)"/>
					</g>
					<circle cx="720" cy="720" r="420" transform={`matrix(${circleMatrix.a},${circleMatrix.b},${circleMatrix.c},${circleMatrix.d},${circleMatrix.e},${circleMatrix.f})`} vectorEffect="non-scaling-stroke" data-svg-origin="720 720"/>
				</svg>
			</div>
			<div className="bg_small_compass">
				<BgSmallCompass rotation={rotation}/>
				<BgSmallCompass rotation={rotation}/>
			</div>
			<div className="bg_noise"></div>
	</div>
	)
}
