import { ProjectLinksProps } from "@/types/projectProps";
import Link from 'next/link';

export default function ProjectLinks({ project, site, github }: ProjectLinksProps) {
  if (!site && !github) return null;

  const getLinkClass = (baseClass: string) => {
		const widthClass = site && github ? 'width49' : 'width100'
		let themaClass = '';

    if (project?.linkBoxColor === 'var(--whiteDE)') {
      themaClass = 'whiteDE';
    } else if (project?.linkBoxColor === 'var(--themaDeep)') {
      themaClass = 'themaDeep';
    } else if (project?.linkBoxColor === 'var(--thema)') {
      themaClass = 'thema';
    } else if (project?.linkBoxColor === 'var(--black333)') {
      themaClass = 'black333';
    }
    return `${baseClass} ${themaClass} ${widthClass}`;
  };

  return (
    <div className="link_shortcut">
      {site && (
        <Link href={site.href} className={getLinkClass('site')} target="_blank" rel="noopener noreferrer"
					style={{ backgroundColor: project?.linkBoxColor, color: project?.linkFontColor, }}>
          {site.text}
        </Link>
      )}
      {github && (
        <Link href={github.href} className={getLinkClass('github')} target="_blank" rel="noopener noreferrer"
					style={{ backgroundColor: project?.linkBoxColor, color: project?.linkFontColor, }}>
          {github.text}
        </Link>
      )}
    </div>
  );
} 