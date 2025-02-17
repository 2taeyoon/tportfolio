import React, { RefObject } from 'react'

export default function Wave({waveRef, waveHeightRef, waveLineBlockRef}: { 
	waveRef: RefObject<(HTMLDivElement | null)>; 
	waveHeightRef: RefObject<(HTMLDivElement | null)>;  
	waveLineBlockRef: RefObject<(HTMLDivElement | null)>; 
}) {
	return (
		<>
			<div className="wave" ref={waveRef}>
				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
					<defs>
						<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
					</defs>
					<g className="parallax">
						<use xlinkHref="#gentle-wave" x="50" y="0" fill="var(--thema)"></use>
						<use xlinkHref="#gentle-wave" x="50" y="4" fill="#07aa77d1"></use>
						<use xlinkHref="#gentle-wave" x="50" y="8" fill="#07aa77a3"></use>
					</g>
				</svg>
			</div>
			<div className="height" ref={waveHeightRef}></div>
			<div className="line_block" ref={waveLineBlockRef}></div>
		</>
	)
}