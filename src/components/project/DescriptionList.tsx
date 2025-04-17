import { CodeCardProps } from "@/types/projectProps";

export default function DescriptionList({ project, title, body, listType }: CodeCardProps) {
  const containerClass = `${listType}_container`;
  const titleClass = `${listType}_title`;
  const listClass = listType;
  const itemClass = `${listType}_item`;
  const ListContainer = listType === 'features' ? 'div' : 'ol';

  return (
    <div className={containerClass}>
      <div className={titleClass} style={{ color: project?.fontColor }}>{title}</div>
      <ListContainer className={listClass}>
        {body?.map((item, index) => (
          listType === 'features' ? (
            <div key={index} className={itemClass} style={{ color: project?.fontColor }}>{item}</div>
          ) : (
						<li key={index} className={itemClass} style={{ color: project?.fontColor }}>{item}</li>
          )
        ))}
      </ListContainer>
    </div>
  );
} 