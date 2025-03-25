import Image from "next/image";

export default function ShapeQuoteDots({translate, className}: { translate: { x: string, y: string }, className: string }) {
	return (
		<div className={`shape_quote_dots ${className}`}>
			<Image src="/images/shape_quote_dots.svg" alt="dots_image" draggable={false} fill
				style={{ objectFit: "cover", transform: `translate(${translate.x}, ${translate.y})` }}
				onDragStart={(e) => e.preventDefault()}
				onContextMenu={(e) => e.preventDefault()}
			/>
		</div>
	)
}
