import { SkillCircleImageItemProps } from "@/types/skillProps";
import Image from "next/image";

export default function SkillImageItem({ items, index, angleStep, isDraggingRef, radius, itemSize, rotation, activeIndex }: SkillCircleImageItemProps) {
  const angle = angleStep * index - 90;
  const radian = (angle * Math.PI) / 180;
  const x = Math.cos(radian) * radius;
  const y = Math.sin(radian) * radius;

	const isActive = isDraggingRef || activeIndex === index;

  const className = `skill_image ${items.src.split("/").pop()?.split(".")[0]} ${isActive ? "active" : ""}`;

  return (
    <div
      className={className}
      style={{ width: `${isActive ? itemSize * 1.2 : itemSize}px`, height: `${isActive ? itemSize * 1.2 : itemSize}px`,
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
        filter: isActive ? `drop-shadow(0px 12px 16px ${items.shadowColors})` : "none",
      }}
    >
      <Image src={items.src} alt={items.src} fill draggable={false}
				sizes={`${itemSize * 1.2}px`}
        style={{ objectFit: "cover" }}
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
