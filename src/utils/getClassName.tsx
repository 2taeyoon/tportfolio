import { ProjectDataType } from "@/types/projectProps";

export default function getClassName(baseClass: string, project?: ProjectDataType){
	if (!project) return baseClass;

// ProjectLinks 컴포넌트에서 site와 github에 대한 width 클래스 처리
if (baseClass === 'site' || baseClass === 'github') {
	const widthClass = project.links?.site && project.links?.github ? 'width49' : 'width100';
	if (project.linkBoxColor === 'var(--whiteDE)') return `${baseClass} ${widthClass} whiteDE`;
	if (project.linkBoxColor === 'var(--themaDeep)') return `${baseClass} ${widthClass} themaDeep`;
	if (project.linkBoxColor === 'var(--thema)') return `${baseClass} ${widthClass} thema`;
	if (project.linkBoxColor === 'var(--black333)') return `${baseClass} ${widthClass} black333`;
	return `${baseClass} ${widthClass}`;
}

	// ProjectCard 컴포넌트에 프로젝트에 알맞는 클래스 추가
	if (project.className === 'typortfolio') return `${baseClass} typortfolio`;
	if (project.className === '2taeyoon') return `${baseClass} 2taeyoon`;
	if (project.className === 'krmx') return `${baseClass} krmx`;
  if (project.className === 'hivu') return `${baseClass} hivu`;
	if (project.className === 'niweb') return `${baseClass} niweb`;
  if (project.className === 'tycode') return `${baseClass} tycode`;
  if (project.className === 'mydays') return `${baseClass} mydays`;
  if (project.className === 'yoondesign') return `${baseClass} yoondesign`;
  if (project.className === 'netmarble') return `${baseClass} netmarble`;

  return baseClass;
}