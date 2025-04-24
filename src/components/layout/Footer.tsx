'use client';

import Copyright from "@/components/common/Copyright"
import { ScrollRefProps } from "@/types/props";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import Image from "next/image"

export default function Footer({profileScrollRef, skillScrollRef, projectScrollRef}: ScrollRefProps) {
  const { scrollToSection } = useScrollToSection();

	return (
		<footer className="footer pd_box section inner">
			<div className="content">
				<div className="logo_section">
					<div className="logo">
						<Image src="/favicon/favicon-96x96.png" alt="logo" fill draggable={false}
							sizes="100%"
							style={{ objectFit: 'cover' }}
							onDragStart={(e) => e.preventDefault()}
							onContextMenu={(e) => e.preventDefault()}
						/>
					</div>
					<div className="contact">
						<div className="comment">&#47;&#47; SHOOT US AN EMAIL</div>
						<div className="email">vpdlvj90@naver.com</div>
					</div>
				</div>
				<div className="nav_wrap">
					<div className="nav_header">
						<div className="circle"></div>
						<div className="nav_title">NAVIGATION</div>
					</div>
					<nav className="nav">
						<ul>
							{/* MainSection에서는 pin을 이용하여 스크롤 트리거를 적용중이라 scrollIntoView를 적용하면 */}
							{/* 해당 요소의 끝에서 멈추므로 부득이하게 a태그의 #으로 대체 */}
							<li><a href="#">Main</a></li>
              <li onClick={() => profileScrollRef && scrollToSection(profileScrollRef)}>Profile</li>
              <li onClick={() => skillScrollRef && scrollToSection(skillScrollRef)}>Skill</li>
              <li onClick={() => projectScrollRef && scrollToSection(projectScrollRef)}>Project</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="thank_you">
				<p>LOCATED IN KOREA, // 37.409810°, 127.258260° // 1:56 AM</p>
				<h1>THANK YOU</h1>
			</div>
			<div className="line"></div>
			<div className="credits">
				<Copyright/>
				<div className="byline">WEBSITE BY 2taeyoon</div>
			</div>
  </footer>
	)
}