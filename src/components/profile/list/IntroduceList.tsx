import IntroduceItem from "@/components/profile/list/IntroduceItem";
import QuotesSvg from "@/components/profile/QuotesSvg";

const introduceData = [
  {
    question: "Q. 퍼블리셔를 선택한 이유는 무엇인가요?",
    answer: "웹 퍼블리싱은 코드 한 줄 한 줄이 즉각적으로 화면에 반영되는 과정이 매력적이었습니다. 디자인과 개발의 경계에서 사용자 경험을 더욱 직관적이고 아름답게 만드는 일이 흥미로웠고 특히 UI/UX 설계와 구현 과정에서 큰 보람을 느낍니다. 직접 구축한 화면이 사용자에게 전달되는 과정이 저를 퍼블리셔의 길로 이끌었습니다.",
  },
  {
    question: "Q. 어떤 강점을 가지고 있나요?",
    answer: "저는 그래픽아츠과(편집&인쇄) 전공을 바탕으로 시각적인 디자인 감각과 KDT 프론트엔드 수강 경험을 통해 퍼블리싱 기술을 함께 갖추고 있습니다. 프론트엔드 과정을 수강하며 HTML5, CSS3, JavaScript, TypeScript, React, Next.js 등의 기술을 익혔으며, 특히 UI/UX 개선을 위한 퍼블리싱 작업에 강점을 가지고 있습니다. 또한 실제 기업 프로젝트에서 웹사이트 리디자인, 퍼블리싱, 이메일 전송 시스템 구현 등의 경험을 쌓아 실무적인 감각도 익혔습니다.",
  },
  {
    question: "Q. 협업할 때 중요하게 생각하는 점은 무엇인가요?",
    answer: "퍼블리셔는 디자이너와 개발자 사이에서 소통하며 조화를 이루는 역할을 한다고 생각합니다. 저는 프로젝트 진행 시 의사소통을 중요하게 생각하며 팀원들의 피드백을 적극적으로 반영해 더 나은 결과물을 만들어내려고 노력하고 있습니다.",
  },
];

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
