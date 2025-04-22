import { characterTextSplit } from '@/utils/textSplit';
import TextSplitWrap from '@/components/common/TextSplitWrap';
import { projectDesignData } from "@/data/projectData";
import DesignCard from "./DesignCard";
import PopupModal from '@/components/modal/PopupModal';
import { useImageModal } from "@/hooks/useImageModal";
import { useEffect } from 'react';

export default function DesignCardWrap() {
	const title = `DESIGN`;
	const subTitle = `PORTFOLIO`;

	const { isModalOpen, currentImageIndex, handleImageClick, handleCloseModal } = useImageModal();

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
			document.body.style.width = '100%';
			document.body.style.height = '100%';
			document.body.style.position = 'absolute';
		} else {
			document.body.style.overflow = 'unset';
			document.body.style.width = 'unset';
			document.body.style.height = 'unset';
			document.body.style.position = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
			document.body.style.width = 'unset';
			document.body.style.height = 'unset';
			document.body.style.position = 'unset';
		};
	}, [isModalOpen]);

	return (
		<div className="design_card_wrap">
			<TextSplitWrap text={title} className="design_card_title" splitFunction={characterTextSplit}/>
			<TextSplitWrap text={subTitle} className="design_card_subtitle" splitFunction={characterTextSplit}/>
			{projectDesignData.map((project, index) => (
				<DesignCard key={index} project={project} onClick={() => handleImageClick(index)}/>
			))}
			<PopupModal
				isOpen={isModalOpen}
				currentProject={projectDesignData[currentImageIndex]}
				onClose={handleCloseModal}
			/>
		</div>
	);
}