import { ProjectLinksProps } from "@/types/projectProps";
import getClassName from "@/utils/getClassName";
import Link from 'next/link';

export default function ProjectLinks({ project, site, github }: ProjectLinksProps) {
  return (
    <div className="link_shortcut">
      {site && (
        <Link href={site.href} className={getClassName('site', project)} target="_blank" rel="noopener noreferrer"
					style={{ backgroundColor: project?.linkBoxColor, color: project?.linkFontColor, }}>
          {site.text}
        </Link>
      )}
      {github && (
        <Link href={github.href} className={getClassName('github', project)} target="_blank" rel="noopener noreferrer"
					style={{ backgroundColor: project?.linkBoxColor, color: project?.linkFontColor, }}>
          {github.text}
        </Link>
      )}
    </div>
  );
} 