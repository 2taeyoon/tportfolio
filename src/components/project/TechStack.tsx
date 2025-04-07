import { TechStackProps } from "@/types/projectProps";


export default function TechStack({ project, rows }: TechStackProps) {
  return (
    <div className="tech_stack">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="tech_row">
          <div className="tech_row_title" style={{ color: project.fontColor }}>{row.title}</div>
          {row.items.map((item, itemIndex) => (
            <div key={itemIndex} className="tech_row_text" style={{ color: project.fontColor }}>{item}</div>
          ))}
        </div>
      ))}
    </div>
  );
} 