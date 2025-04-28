import Navigation from "@/components/common/Navigation"
import { useHeaderToggle } from "@/hooks/useHeaderToggle";
import { ScrollRefProps } from "@/types/commonProps"

export default function Header({profileScrollRef, skillScrollRef, projectScrollRef}: ScrollRefProps) {
	const { toggleClick, removeClick } = useHeaderToggle();

	return (
		<header className="header inner" onMouseLeave={removeClick}>
			<div className="nav_wrap">
				<div className="nav_item" onClick={toggleClick}>MENU</div>
				<Navigation profileScrollRef={profileScrollRef} skillScrollRef={skillScrollRef} projectScrollRef={projectScrollRef}/>
			</div>
		</header>
	)
}