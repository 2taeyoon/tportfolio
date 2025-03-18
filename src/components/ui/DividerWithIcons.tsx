import Image from "next/image";

export default function DividerWithIcons({dividerSrc}: {dividerSrc : string}) {
	return (
		<div className="divider_wrap pd_box">
			<div className="divider">
				<Image src={dividerSrc} alt="divider" draggable={false} fill
					className="divider_img"
					style={{ objectFit: 'cover', transition: '.3s' }}
					onDragStart={(e) => e.preventDefault()}
					onContextMenu={(e) => e.preventDefault()}
				/>
			</div>
			<div className="divider_bar"></div>
			<div className="divider">
				<Image src={dividerSrc} alt="divider" draggable={false} fill
					className="divider_img"
					style={{ objectFit: 'cover', transition: '.3s' }}
					onDragStart={(e) => e.preventDefault()}
					onContextMenu={(e) => e.preventDefault()}
				/>
			</div>
		</div>
	)
}