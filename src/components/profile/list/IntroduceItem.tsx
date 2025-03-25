import { spaceTextSplit } from "@/util/textSplit";

export default function IntroduceItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="qa_item">
      <div className="title">
				{spaceTextSplit(question, "clip")}
      </div>
      <div className="text">
				{spaceTextSplit(answer, "clip")}
      </div>
    </div>
  );
}
