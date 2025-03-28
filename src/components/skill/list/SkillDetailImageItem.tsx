import { SkillDetailImageProps } from "@/types/props";
import Image from "next/image";

export default function SkillDetailImageItem({itemSize, skillItemsData, activeIndex}: SkillDetailImageProps) {
	return (
		<div className="skill_detail_image" style={{ 
			width: `${itemSize * 1.2}px`, height: `${itemSize * 1.2}px`,
			filter: `drop-shadow(0px 12px 16px ${skillItemsData[activeIndex].shadowColors})`,
		}}>
			<Image src={skillItemsData[activeIndex].src} alt={skillItemsData[activeIndex].src} fill draggable={false}
				sizes={`${itemSize * 1.2}px`}
				style={{ objectFit: 'cover' }}
				onDragStart={(e) => e.preventDefault()}
				onContextMenu={(e) => e.preventDefault()}
			/>
		</div>
	)
}
