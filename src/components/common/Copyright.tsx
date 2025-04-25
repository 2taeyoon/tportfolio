export default function Copyright({ translate }: { translate?: { x: string; y: string; } }) {
	const currentYear = new Date().getFullYear();

	return (
		<div className="copyright pd_box" style={{ transform: `translate(${translate?.x}, ${translate?.y})` }}>
			<div className="text">Copyright {currentYear} 2taeyoon All rights reserved</div>
		</div>
	)
}