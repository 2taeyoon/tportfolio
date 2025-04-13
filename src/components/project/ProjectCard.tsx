import 'swiper/css';
import 'swiper/css/pagination';

import { projectData } from "@/data/projectData";
import ProjectDetailCard from "@/components/project/ProjectDetailCard";

export default function ProjectCard() {
	return (
		<div className="project_card_wrap">
			{projectData.map((project, index) => (
				<ProjectDetailCard key={index} index={index} project={project}/>
			))}
		</div>
	)
}