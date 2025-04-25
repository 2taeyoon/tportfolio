'use client';

import Copyright from "@/components/common/Copyright"
import { ScrollRefProps } from "@/types/commonProps";
import Image from "next/image"
import { useKoreanTime } from "@/hooks/useKoreanTime";
import Navigation from "@/components/common/Navigation";
import TextSplitWrap from "../common/TextSplitWrap";
import { characterTextSplit } from "@/utils/textSplit";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer({profileScrollRef, skillScrollRef, projectScrollRef, footerScrollRef}: ScrollRefProps) {
	const currentTime = useKoreanTime();
	const title = "THANK YOU";

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			if (!footerScrollRef?.current) return;

			const q = gsap.utils.selector(footerScrollRef.current); // footerScrollRef.current 내부에서 CSS 선택자를 기반으로 요소 선택하는 함수
			const thankCharRefs = q('.thank_you .char'); // thank_you_wrap 클래스의 스플릿 텍스트

			thankCharRefs.forEach((char: HTMLSpanElement, index: number) => {
				gsap.to(char, {
					filter: `blur(3px)`,
					delay: index * 0.25,
					duration: 1.5,
					repeat: -1,
					yoyo: true,
					ease: "power1.inOut"
				});
			});

		});

		return () => ctx.revert();
	}, [footerScrollRef]);

	return (
		<footer className="footer pd_box section inner" ref={footerScrollRef}>
			<div className="content">
				<div className="logo_section">
					<div className="logo">
						<Image src="/images/logo.png" alt="logo" fill draggable={false}
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
					<Navigation profileScrollRef={profileScrollRef} skillScrollRef={skillScrollRef} projectScrollRef={projectScrollRef}/>
				</div>
			</div>
			<div className="thank_you_wrap">
				<div className="box_animation">
					<Image src="/images/box_animation.gif" alt="box_animation" fill draggable={false}
						sizes="100%"
						style={{ objectFit: 'cover' }}
						onDragStart={(e) => e.preventDefault()}
						onContextMenu={(e) => e.preventDefault()}
					/>
				</div>
				<p>LOCATED IN KOREA, // 37.409810°, 127.258260° // {currentTime}</p>
				<TextSplitWrap text={title} className="thank_you" splitFunction={characterTextSplit}/>
			</div>
			<div className="line"></div>
			<div className="credits">
				<Copyright/>
				<div className="byline">WEBSITE BY 2taeyoon</div>
			</div>
  </footer>
	)
}