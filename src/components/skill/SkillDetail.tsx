import { skillItemsData } from "@/data/skillData";
import { SkillDetailProps } from "@/types/props";
import SkillDetailImageItem from "./list/SkillDetailImageItem";

export default function SkillDetail({radius, itemSize, activeIndex}: SkillDetailProps) {
	return (
		<div className="skill_detail_wrap" style={{ width: `${radius * 2 -100}px`, height: `${radius * 2 -100}px`,}}>
			<div className="skill_detail">
				<SkillDetailImageItem itemSize={itemSize} skillItemsData={skillItemsData} activeIndex={activeIndex}/>
				<div className="skill_detail_text">
					<div className="skill_detail_title">{skillItemsData[activeIndex].title}</div>
					<div className="skill_detail_body">{skillItemsData[activeIndex].body}</div>
				</div>
			</div>
		</div>
	)
}
