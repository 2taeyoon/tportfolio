import { useScrollToSection } from "@/hooks/useScrollToSection";
import { ScrollRefProps } from "@/types/commonProps";
import Link from "next/link";

export default function Navigation({ profileScrollRef, skillScrollRef, projectScrollRef }: ScrollRefProps) {
  const { scrollToSection } = useScrollToSection();

	// MainSection에서는 pin을 이용하여 스크롤 트리거를 적용중이라 scrollIntoView를 적용하면
	// 해당 요소의 끝에서 멈추므로 부득이하게 scrollTo로 대체
  const navItems = [
    { label: 'MAIN', class: 'scroll', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'PROFILE', class: 'scroll', action: () => profileScrollRef && scrollToSection(profileScrollRef) },
    { label: 'SKILL', class: 'scroll', action: () => skillScrollRef && scrollToSection(skillScrollRef) },
    { label: 'PROJECT', class: 'scroll', action: () => projectScrollRef && scrollToSection(projectScrollRef) }
  ];

	const anotherNavItems = [
		{ label: 'GITHUB', class: 'another', href: 'https://github.com/2taeyoon' },
		{ label: 'BLOG', class: 'another', href: 'https://www.2taeyoon.com/' }
	];

  return (
    <nav className="nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.label} onClick={item.action}>
            <div className={item.class}>
							{item.label}
						</div>
          </li>
        ))}
				{anotherNavItems.map((item) => (
					<li key={item.label}>
						<Link href={item.href} className={item.class} target="_blank" rel="noopener noreferrer">
							{item.label}
						</Link>
					</li>
				))}
      </ul>
    </nav>
  );
}