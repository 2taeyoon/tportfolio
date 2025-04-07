import 'swiper/css';
import 'swiper/css/pagination';

import { projectData } from "@/data/projectData";
import ProjectCardItem from "@/components/project/ProjectCardItem";

export default function ProjectCard() {
	return (
		<div className="project_card_wrap">
			{projectData.map((project, index) => (
				<ProjectCardItem key={index} index={index} project={project}/>
			))}
		</div>
	)
}