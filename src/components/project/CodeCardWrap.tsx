import 'swiper/css';
import 'swiper/css/pagination';

import { projectCodeData } from "@/data/projectData";
import CodeCard from "@/components/project/CodeCard";
import { characterTextSplit } from '@/utils/textSplit';
import TextSplitWrap from '@/components/common/TextSplitWrap';

export default function ProjectCardWrap() {
	const title = `PROJECT`;
	const subTitle = `PORTFOLIO`;

	return (
		<div className="project_card_wrap">
			<div className="code_card_list">
				<TextSplitWrap text={title} className="code_card_title" splitFunction={characterTextSplit}/>
				<TextSplitWrap text={subTitle} className="code_card_subtitle" splitFunction={characterTextSplit}/>
				{projectCodeData.map((project, index) => (
					<CodeCard key={index} index={index} project={project}/>
				))}
			</div>
		</div>
	)
}