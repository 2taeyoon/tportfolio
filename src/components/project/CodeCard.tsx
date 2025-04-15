import { useImageModal } from "@/hooks/useImageModal";
import TechStack from "@/components/project/TechStack";
import SkillList from "@/components/project/SkillList";
import ScreenshotGallery from "@/components/project/ScreenshotGallery";
import ProjectLinks from "@/components/project/ProjectLinks";
import { CodeCardProps } from "@/types/projectProps";
import DescriptionList from "@/components/project/DescriptionList";
import getClassName from "@/utils/getClassName";

export default function CodeCard({ project, index }: CodeCardProps) {
	const { isModalOpen, currentImageIndex, handleImageClick, handlePrevImage, handleNextImage, handleCloseModal } = useImageModal();

	return (
		<div key={index} className={getClassName('code_card', project)} style={{ backgroundColor: project.boxColor }}>
			<div className="card_title" style={{ color: project.fontColor }}>{project.title}</div>
			<div className="card_type" style={{ backgroundColor: project.badgeBoxColor, color: project.badgeFontColor }}>{project.type}</div>
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
