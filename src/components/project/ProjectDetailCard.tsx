import { useImageModal } from "@/hooks/useImageModal";
import TechStack from "@/components/project/TechStack";
import SkillList from "@/components/project/SkillList";
import ScreenshotGallery from "@/components/project/ScreenshotGallery";
import ProjectLinks from "@/components/project/ProjectLinks";
import { ProjectDetailCardProps } from "@/types/projectProps";
import DescriptionList from "@/components/project/DescriptionList";

export default function ProjectDetailCard({ project, index }: ProjectDetailCardProps) {
	const { isModalOpen, currentImageIndex, handleImageClick, handlePrevImage, handleNextImage, handleCloseModal } = useImageModal();

	const getCardClass = (baseClass: string) => {
		if (project?.className === 'typortfolio'){
      return `${baseClass} typortfolio`;
    }
		if (project?.className === '2taeyoon'){
      return `${baseClass} 2taeyoon`;
    }
		if (project?.className === 'krmx'){
      return `${baseClass} krmx`;
    }
		if (project?.className === 'hivu'){
      return `${baseClass} hivu`;
    }
		if (project?.className === 'niweb'){
      return `${baseClass} niweb`;
    }
    if (project?.className === 'tycode'){
      return `${baseClass} tycode`;
    }
    if (project?.className === 'mydays'){
      return `${baseClass} mydays`;
    }
		if (project?.className === 'yoondesign'){
      return `${baseClass} yoondesign`;
    }
		if (project?.className === 'netmarble'){
      return `${baseClass} netmarble`;
    }
    return baseClass;
  };

	return (
		<div key={index} className={getCardClass('project_card')} style={{ backgroundColor: project.boxColor }}>
			<div className="project_card_title" style={{ color: project.fontColor }}>{project.title}</div>
			<div className="project_card_type" style={{ backgroundColor: project.badgeBoxColor, color: project.badgeFontColor }}>{project.type}</div>
			<TechStack project={project} rows={project.techStack.rows}/>
			<SkillList project={project} title={project.skills.title} images={project.skills.images}/>
			<DescriptionList project={project} title={project.features.title || ''} body={project.features.body || []} listType="features"/>
			{project.contribution && (
				<DescriptionList project={project} title={project.contribution.title || ''} body={project.contribution.body || []} listType="contributions"/>
			)}
			<ScreenshotGallery project={project} title={project.screenshots.title} images={project.screenshots.images}
				modalProps={{ isModalOpen, currentImageIndex, handleCloseModal, handlePrevImage, handleNextImage }}
				onImageClick={handleImageClick}
			/>
			<ProjectLinks project={project} site={project.links?.site} github={project.links?.github}/>
		</div>
	)
}
