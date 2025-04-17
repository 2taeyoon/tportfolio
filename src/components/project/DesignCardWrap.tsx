import { characterTextSplit } from '@/utils/textSplit';
import TextSplitWrap from '@/components/common/TextSplitWrap';
import { projectDesignData } from "@/data/projectData";
import DesignCard from "./DesignCard";
import ImageModal from "@/components/modal/ImageModal";
import { useImageModal } from "@/hooks/useImageModal";

export default function DesignCardWrap() {
	const title = `DESIGN`;
	const subTitle = `PORTFOLIO`;

	const { isModalOpen, currentImageIndex, handleImageClick, handlePrevImage, handleNextImage, handleCloseModal } = useImageModal();

	return (
		<div className="design_card_wrap">
			<TextSplitWrap text={title} className="design_card_title" splitFunction={characterTextSplit}/>
			<TextSplitWrap text={subTitle} className="design_card_subtitle" splitFunction={characterTextSplit}/>
			{projectDesignData.map((project, index) => (
				<DesignCard key={index} project={project} index={index} onClick={() => handleImageClick(index)}/>
			))}
			{isModalOpen && (
				<ImageModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					imageUrl={projectDesignData.map(item => item.thumbnail)}
					title={projectDesignData[currentImageIndex].title}
					date={projectDesignData[currentImageIndex].date}
					type={projectDesignData[currentImageIndex].type}
					contribution={projectDesignData[currentImageIndex].contribution}
					currentImageIndex={currentImageIndex}
					onPrev={handlePrevImage}
					onNext={handleNextImage}
					className="design"
				/>
			)}
		</div>
	);
}