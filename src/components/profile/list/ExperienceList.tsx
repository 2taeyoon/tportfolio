import React from "react";
import ExperienceItem from "@/components/profile/list/ExperienceItem";
import useMouseEffect from "@/hooks/useMouseEffect";
import ShapeQuoteDots from "@/components/profile/ShapeQuoteDots";
import Copyright from "@/components/common/Copyright";
import { careerData, educationData, schoolData } from "@/data/profileData";

export default function ExperienceList() {
	const { translate, handleMouseMove } = useMouseEffect(); // 마우스 이펙트 훅
  return (
    <div className="experience_wrap pd_box" onMouseMove={handleMouseMove}>
      <ExperienceItem title="학력사항" items={schoolData} translate={translate}/>
      <ExperienceItem title="경력사항" extra="(8개월)" items={careerData} translate={translate}/>
      <ExperienceItem title="교육사항" items={educationData} translate={translate}/>
			<Copyright translate={translate}/>
			<div className="shape_quote_dots_wrap">
				<ShapeQuoteDots translate={translate} className="left"/>
				<ShapeQuoteDots translate={translate} className="right"/>
			</div>
    </div>
  );
}