import React, { useEffect } from 'react'
import { skillItemsData } from "@/data/skillData";
import { SkillCircleProps } from "@/types/props";
import { useSkillCircle } from "@/hooks/useSkillCircle";
import SkillCircleImageItem from "@/components/skill/list/SkillCircleImageItem";

export default function SkillCircle({ radius, itemSize, activeIndex, setActiveIndex }: SkillCircleProps) {
	const { angleStep, skillCircleRef, isDraggingRef, rotation, normalize, handleMouseDown, handleMouseMove, handleMouseUp } = useSkillCircle({setActiveIndex});

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	}, [handleMouseMove, handleMouseUp]);

	return (
		<div className="skill_circle" ref={skillCircleRef} onMouseDown={handleMouseDown}
			style={{
				width: `${radius * 2}px`, height: `${radius * 2}px`,
				transform: `rotate(${normalize(rotation)}deg)`
			}}
		>
			{skillItemsData.map((items, index) => (
				<SkillCircleImageItem key={index} items={items} index={index} angleStep={angleStep} isDraggingRef={isDraggingRef.current} radius={radius} itemSize={itemSize} rotation={rotation} activeIndex={activeIndex}/>
			))}
		</div>
	)
}