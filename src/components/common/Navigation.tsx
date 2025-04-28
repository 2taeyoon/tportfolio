import { useScrollToSection } from "@/hooks/useScrollToSection";
import { ScrollRefProps } from "@/types/commonProps";

export default function Navigation({ profileScrollRef, skillScrollRef, projectScrollRef }: ScrollRefProps) {
  const { scrollToSection } = useScrollToSection();

	// MainSection에서는 pin을 이용하여 스크롤 트리거를 적용중이라 scrollIntoView를 적용하면
	// 해당 요소의 끝에서 멈추므로 부득이하게 scrollTo로 대체
  const navItems = [
    { label: 'MAIN', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'PROFILE', action: () => profileScrollRef && scrollToSection(profileScrollRef) },
    { label: 'SKILL', action: () => skillScrollRef && scrollToSection(skillScrollRef) },
    { label: 'PROJECT', action: () => projectScrollRef && scrollToSection(projectScrollRef) }
  ];

  return (
    <nav className="nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.label} onClick={item.action}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}