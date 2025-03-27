import Image from "next/image";

interface DividerWithIconsProps {
  dividerSrc?: string;
  dark?: boolean;
}

export default function DividerWithIcons({ dividerSrc, dark }: DividerWithIconsProps) {
	const imageSrc = dividerSrc	? dividerSrc : dark ? "/images/divider_dark.png" : "/images/divider_sub_dark.png";
	const borderTopColor = dark ? "var(--themaDark)" : "var(--themaSubDark)";

	return (
		<div className="divider_wrap pd_box">
			<div className="divider">
				<Image src={imageSrc} alt="divider" draggable={false} fill
					sizes="5rem"
					className="divider_img"
					style={{ objectFit: 'cover', transition: '.3s' }}
					onDragStart={(e) => e.preventDefault()}
					onContextMenu={(e) => e.preventDefault()}
				/>
			</div>
			<div className="divider_bar" style={{ borderTopColor: borderTopColor }}></div>
			<div className="divider">
				<Image src={imageSrc} alt="divider" draggable={false} fill
					sizes="5rem"
					className="divider_img"
					style={{ objectFit: 'cover', transition: '.3s' }}
					onDragStart={(e) => e.preventDefault()}
					onContextMenu={(e) => e.preventDefault()}
				/>
			</div>
		</div>
	)
}