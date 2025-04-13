import { ContributionProps } from "@/types/projectProps";

export default function ContributionList({ project, title, body }: ContributionProps) {
  return (
    <div className="contributions_container">
      <div className="contributions_title" style={{ color: project?.fontColor }}>{title}</div>
      <ol className="contributions">
        {body.map((body, index) => (
          <li key={index} className="contributions_item" style={{ color: project?.fontColor }}>{body}</li>
        ))}
      </ol>
    </div>
  );
}