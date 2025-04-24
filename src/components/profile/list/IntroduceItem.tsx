import TextSplitWrap from "@/components/common/TextSplitWrap";
import { spaceTextSplit } from "@/utils/textSplit";

export default function IntroduceItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="qa_item">
			<TextSplitWrap text={question} className="title" splitFunction={spaceTextSplit}/>
			<TextSplitWrap text={answer} className="text" splitFunction={spaceTextSplit}/>
    </div>
  );
}