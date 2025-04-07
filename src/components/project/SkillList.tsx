import { SkillListProps } from "@/types/projectProps";
import Image from 'next/image';

export default function SkillList({ project, title, images }: SkillListProps) {
  return (
    <div className="skill_container">
      <div className="skill_title" style={{ color: project?.fontColor }}>{title}</div>
      <div className="skill_list">
        {images.map((skill, index) => (
          <div key={index} className="skill_item" style={{ backgroundColor: project?.skillBoxColor }}>
            <div className="skill_icon">
              <Image 
                src={skill.src} 
                alt={skill.alt} 
                draggable={false} 
                fill
                sizes="2rem"
                style={{ objectFit: 'cover' }}
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div className="skill_name_text" style={{ color: project?.skillFontColor }}>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 