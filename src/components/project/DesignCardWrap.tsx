import { characterTextSplit } from '@/utils/textSplit';
import TextSplitWrap from '@/components/common/TextSplitWrap';
import { projectDesignData } from "@/data/projectData";
import DesignCard from "./DesignCard";

export default function DesignCardWrap() {
	const title = `DESIGN`;
	const subTitle = `PORTFOLIO`;

	return (
		<div className="design_card_wrap">
			<TextSplitWrap text={title} className="design_card_title" splitFunction={characterTextSplit}/>
			<TextSplitWrap text={subTitle} className="design_card_subtitle" splitFunction={characterTextSplit}/>
			{projectDesignData.map((project, index) => (
				<DesignCard key={index} project={project}/>
			))}

		</div>
	);
}