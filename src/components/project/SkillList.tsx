import { SkillListProps } from "@/types/projectProps";
import Image from 'next/image';

export default function SkillList({ title, images }: SkillListProps) {
  return (
    <div className="skill_container">
      <div className="skill_title" style={{ color: 'var(--black)' }}>{title}</div>
      <div className="skill_list">
        {images.map((skill, index) => (
          <div key={index} className="skill_item" style={{ backgroundColor: 'var(--themaDeep)' }}>
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
            <div className="skill_name_text" style={{ color: 'var(--whiteBg)' }}>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 