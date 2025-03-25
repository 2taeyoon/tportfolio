import { useDashAnimation } from "@/hooks/useDashAnimation";

export default function WordText() {
	const { dashArray, isVisible } = useDashAnimation({ delay: 0, duration: 1000, intervalTime: 50, startValue: 25, intervalCount: 0 });

	return (
		<>
			<div className="word_p">
				<svg className="word_svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627 954" width="100%" height="100%" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px` }}>
					<defs>
						<linearGradient id="linear-p" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stopColor="#322D2C"></stop>
							<stop offset="100%" stopColor="var(--thema)"></stop>
						</linearGradient> 
					</defs>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-p)" strokeWidth="2" fill="none" d="m52,952V52h409v82H134v409h327v82H134v327H52ZM461,134h82v82h-82v-82Zm0,409v-82h82v82h-82Zm82-82v-245h82v245h-82Z"/>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-p)" strokeWidth="2" fill="none" d="m2,902V2h409v82H84v409h327v82H84v327H2ZM411,84h82v82h-82v-82Zm0,409v-82h82v82h-82Zm82-82v-245h82v245h-82Z"/>
				</svg>
			</div>
			<div className="word_u">				
				<svg className="word_svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 708 954" width="100%" height="100%" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px`}}>
					<defs>
						<linearGradient id="linear-u" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stopColor="#322D2C"></stop>
							<stop offset="100%" stopColor="var(--thema)"></stop>
						</linearGradient> 
					</defs>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-u)" strokeWidth="2" fill="none" d="m52,788V52h82v736H52Zm82,0h82v82h-82v-82Zm82,82h327v82H216v-82Zm327,0v-82h82v82h-82Zm164-82h-82V52h82v736Z"/>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-u)" strokeWidth="2" fill="none" d="m2,738V2h82v736H2Zm82,0h82v82h-82v-82Zm82,82h327v82H166v-82Zm327,0v-82h82v82h-82Zm164-82h-82V2h82v736Z"/>
				</svg>
			</div>
			<div className="word_b">
				<svg className="word_svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627 954" width="100%" height="100%" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px`}}>
					<defs>
						<linearGradient id="linear-b" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stopColor="#322D2C"></stop>
							<stop offset="100%" stopColor="var(--thema)"></stop>
						</linearGradient> 
					</defs>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-b)" strokeWidth="2" fill="none" d="m52,952V52h409v82H134v327h327v82H134v327h327v82H52ZM543,134v82h-82v-82h82Zm0,245v82h-82v-82h82Zm0,164v82h-82v-82h82Zm0,245v82h-82v-82h82Zm0-573h82v164h-82v-164Zm0,409h82v164h-82v-164Z"/>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-b)" strokeWidth="2" fill="none" d="m2,902V2h409v82H84v327h327v82H84v327h327v82H2ZM493,84v82h-82v-82h82Zm0,245v82h-82v-82h82Zm0,164v82h-82v-82h82Zm0,245v82h-82v-82h82Zm0-573h82v164h-82v-164Zm0,409h82v164h-82v-164Z"/>
				</svg>
			</div>
			<div className="word_l">
				<svg className="word_svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 545 954" width="100%" height="100%" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px`}}>
					<defs>
						<linearGradient id="linear-l" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stopColor="#322D2C"></stop>
							<stop offset="100%" stopColor="var(--thema)"></stop>
						</linearGradient>  
					</defs>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-l)" strokeWidth="2" fill="none" d="m52,952V52h82v818h409v82H52Z"/>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-l)" strokeWidth="2" fill="none" d="m2,902V2h82v818h409v82H2Z"/>
				</svg>
			</div>
			<div className="word_i">
				<svg className="word_svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299 954" width="100%" height="100%" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px`}}>
					<defs>
						<linearGradient id="linear-i" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stopColor="#322D2C"></stop>
							<stop offset="100%" stopColor="var(--thema)"></stop>
						</linearGradient> 
					</defs>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-i)" strokeWidth="2" fill="none" d="m52,952v-82h82V134H52V52h245v82h-82v736h82v82H52Z"/>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-i)" strokeWidth="2" fill="none" d="m2,902v-82h82V84H2V2h245v82h-82v736h82v82H2Z"/>
				</svg>
			</div>
			<div className="word_s">
				<svg className="word_svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627 954" width="100%" height="100%" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px`}}>
					<defs>
						<linearGradient id="linear-s" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stopColor="#322D2C"></stop>
							<stop offset="100%" stopColor="var(--thema)"></stop>
						</linearGradient> 
					</defs>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-s)" strokeWidth="2" fill="none" d="m52,379v-164h82v164H52Zm0,409v-82h82v82H52ZM216,134v82h-82v-82h82Zm0,245v82h-82v-82h82Zm0,409v82h-82v-82h82Zm0-736h245v82h-245V52Zm0,491v-82h245v82h-245Zm0,327h245v82h-245v-82ZM543,134v82h-82v-82h82Zm0,409v82h-82v-82h82Zm0,245v82h-82v-82h82Zm0-573h82v82h-82v-82Zm0,409h82v164h-82v-164Z"/>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-s)" strokeWidth="2" fill="none" d="m2,329v-164h82v164H2Zm0,409v-82h82v82H2ZM166,84v82h-82v-82h82Zm0,245v82h-82v-82h82Zm0,409v82h-82v-82h82ZM166,2h245v82h-245V2Zm0,491v-82h245v82h-245Zm0,327h245v82h-245v-82ZM493,84v82h-82v-82h82Zm0,409v82h-82v-82h82Zm0,245v82h-82v-82h82Zm0-573h82v82h-82v-82Zm0,409h82v164h-82v-164Z"/>
				</svg>
			</div>
			<div className="word_h">
				<svg className="word_svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627 954" width="100%" height="100%" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px`}}>
					<defs>
						<linearGradient id="linear-h" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stopColor="#322D2C"></stop>
							<stop offset="100%" stopColor="var(--thema)"></stop>
						</linearGradient> 
					</defs>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-h)" strokeWidth="2" fill="none" d="M134.000000,410.500000 C134.000000,291.166443 134.000000,171.832870 134.000000,52.250000 C106.500000,52.250000 79.500000,52.250000 52.250000,52.250000 C52.250000,352.500000 52.250000,652.500000 52.250000,952.500000 C79.500000,952.500000 106.500000,952.500000 134.000000,952.500000 C134.000000,816.167053 134.000000,679.832947 134.000000,543.250000 C270.500000,543.250000 406.500000,543.250000 543.000000,543.250000 C543.000000,679.832947 543.000000,816.167053 543.000000,952.500000 C570.833313,952.500000 598.166687,952.500000 625.500000,952.500000 C625.500000,652.500000 625.500000,352.500000 625.500000,52.250000 C598.166687,52.250000 570.833313,52.250000 543.000000,52.250000 C543.000000,188.499588 543.000000,324.500397 543.000000,460.750000 C406.500000,460.750000 270.500000,460.750000 134.000000,460.750000 C134.000000,444.170074 134.000000,427.835022 134.000000,411.500000"/>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-h)" strokeWidth="2" fill="none" d="M84.000000,51.500000 C84.000000,35.164967 84.000000,18.829931 84.000000,2.250000 C56.500000,2.250000 29.500000,2.250000 2.250000,2.250000 C2.250000,302.166656 2.250000,601.833313 2.250000,901.750000 C29.500000,901.750000 56.500000,901.750000 84.000000,901.750000 C84.000000,765.500427 84.000000,629.499573 84.000000,493.250000 C220.500000,493.250000 356.500000,493.250000 493.000000,493.250000 C493.000000,629.499573 493.000000,765.500427 493.000000,901.750000 C520.500000,901.750000 547.500000,901.750000 574.750000,901.750000 C574.750000,601.833313 574.750000,302.166656 574.750000,2.250000 C547.500000,2.250000 520.500000,2.250000 493.000000,2.250000 C493.000000,138.499588 493.000000,274.500397 493.000000,410.750000 C356.500000,410.750000 220.500000,410.750000 84.000000,410.750000 C84.000000,291.167145 84.000000,171.833572 84.000000,52.500000"/>
				</svg>
			</div>
			<div className="word_e">
				<svg className="word_svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 545 954" width="100%" height="100%" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px`}}>
					<defs>
						<linearGradient id="linear-e" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stopColor="#322D2C"></stop>
							<stop offset="100%" stopColor="var(--thema)"></stop>
						</linearGradient> 
					</defs>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-e)" strokeWidth="2" fill="none" d="m52,952V52h491v82H134v327h409v82H134v327h409v82H52Z"/>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-e)" strokeWidth="2" fill="none" d="m2,902V2h491v82H84v327h409v82H84v327h409v82H2Z"/>
				</svg>
			</div>
			<div className="word_r">
				<svg className="word_svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627 954" width="100%" height="100%" style={{ visibility: isVisible ? "visible" : "hidden", strokeDasharray: `1px, ${dashArray}px`}}>
					<defs>
						<linearGradient id="linear-r" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stopColor="#322D2C"></stop>
							<stop offset="100%" stopColor="var(--thema)"></stop>
						</linearGradient> 
					</defs>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-r)" strokeWidth="2" fill="none" d="m52,952V52h409v82H134v409h327v82h-82v82h-82v-82h-164v327H52Zm327-164v-82h82v82h-82Zm164-654v82h-82v-82h82Zm0,409h-82v-82h82v82Zm0,245v82h-82v-82h82Zm0-327v-245h82v245h-82Zm0,409h82v82h-82v-82Z"/>
					<path vectorEffect="non-scaling-stroke" stroke="url(#linear-r)" strokeWidth="2" fill="none" d="m2,902V2h409v82H84v409h327v82h-82v82h-82v-82H84v327H2Zm327-164v-82h82v82h-82ZM493,84v82h-82v-82h82Zm0,409h-82v-82h82v82Zm0,245v82h-82v-82h82Zm0-327v-245h82v245h-82Zm0,409h82v82h-82v-82Z"/>
				</svg>
			</div>
		</>
	)
}
