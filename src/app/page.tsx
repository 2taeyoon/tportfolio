import "@/style/font.css";
import "@/style/style.css";
import BgElem from "@/components/ui/BgElem";

export default function Home() {
  return (
    <div>
			<BgElem/>
			<div>
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
			<div style={{height: '100vh', background: "#03c75a"}}></div>
    </div>
  );
}