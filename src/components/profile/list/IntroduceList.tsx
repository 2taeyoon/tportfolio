import IntroduceItem from "@/components/profile/list/IntroduceItem";
import QuotesSvg from "@/components/profile/QuotesSvg";
import { introduceData } from "@/data/profileData";

export default function IntroduceList() {
	return (
		<div className="introduce_list">
			<div className="quotes_wrap left">
				<QuotesSvg/>
				<QuotesSvg className="margin"/>
			</div>
			{introduceData.map((item, index)=>(
				<IntroduceItem key={index} question={item.question} answer={item.answer}/>
			))}
			<div className="quotes_wrap right">
				<QuotesSvg/>
				<QuotesSvg className="margin"/>
			</div>
		</div>
	)
}
