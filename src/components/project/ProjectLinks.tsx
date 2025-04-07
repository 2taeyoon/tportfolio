import { ProjectLinksProps } from "@/types/projectProps";
import Link from 'next/link';

export default function ProjectLinks({ project, site, github }: ProjectLinksProps) {
  if (!site && !github) return null;

  const getLinkClass = (baseClass: string) => {
    if (project?.linkBoxColor === 'var(--thema)') {
      return `${baseClass} thema`;
    }
    if (project?.linkBoxColor === 'var(--themaDeep)') {
      return `${baseClass} themaDeep`;
    }
		if (project?.linkBoxColor === 'var(--whiteDE)') {
      return `${baseClass} whiteDE`;
    }
    return baseClass;
  };

  return (
    <div className="link_shortcut">
      {site && (
        <Link href={site.href} className={getLinkClass('site')} target="_blank" rel="noopener noreferrer"
					style={{ backgroundColor: project?.linkBoxColor, color: project?.fontColor, }}>
          {site.text}
        </Link>
      )}
      {github && (
        <Link href={github.href} className={getLinkClass('github')} target="_blank" rel="noopener noreferrer"
					style={{ backgroundColor: project?.linkBoxColor, color: project?.fontColor, }}>
          {github.text}
        </Link>
      )}
    </div>
  );
} 