import { FeatureListProps } from "@/types/projectProps";

export default function FeatureList({ project, title, body }: FeatureListProps) {
  return (
    <div className="features_container">
      <div className="features_title" style={{ color: project?.fontColor }}>{title}</div>
      <div className="features">
        {body.map((body, index) => (
          <div key={index} className="features_item" style={{ color: project?.fontColor }}>{body}</div>
        ))}
      </div>
    </div>
  );
} 