export default function RadialGradient({translate2, className}: { translate2: { x: string, y: string }, className: string, }) {
	return (
		<div className={`radial_gradient ${className}`} style={{ transform: `translate(${translate2.x}, ${translate2.y})` }}></div>
	)
}