import 'swiper/css';
import 'swiper/css/pagination';

import { projectData } from "@/data/projectData";
import ProjectCard from "@/components/project/ProjectCard";
import { characterTextSplit } from '@/utils/textSplit';
import TextSplitWrap from '@/components/common/TextSplitWrap';

export default function ProjectCardWrap() {
	const title = `PROJECT`;
	const subTitle = `PORTFOLIO`;

	return (
		<div className="project_card_wrap">
			<TextSplitWrap text={title} className="project_card_title" splitFunction={characterTextSplit}/>
			<TextSplitWrap text={subTitle} className="project_card_subtitle" splitFunction={characterTextSplit}/>
			<div className="project_card_list">
				{projectData.map((project, index) => (
					<ProjectCard key={index} index={index} project={project}/>
				))}
			</div>
		</div>
	)
}