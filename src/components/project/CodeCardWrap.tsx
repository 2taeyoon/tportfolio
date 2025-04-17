import 'swiper/css';
import 'swiper/css/pagination';

import { projectCodeData } from "@/data/projectData";
import CodeCard from "@/components/project/CodeCard";
import { characterTextSplit } from '@/utils/textSplit';
import TextSplitWrap from '@/components/common/TextSplitWrap';

export default function CodeCardWrap() {
	const title = `PROJECT`;
	const subTitle = `PORTFOLIO`;

	return (
		<div className="code_card_wrap">
			<TextSplitWrap text={title} className="code_card_title" splitFunction={characterTextSplit}/>
			<TextSplitWrap text={subTitle} className="code_card_subtitle" splitFunction={characterTextSplit}/>
			{projectCodeData.map((project, index) => (
				<CodeCard key={index} project={project}/>
			))}
		</div>
	)
}