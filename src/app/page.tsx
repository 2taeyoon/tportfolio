'use client'

import "@/style/style.css";

import NoiseBackground from "@/components/common/Noise";
import MainSection from "@/components/layout/MainSection";
import ProfileSection from "@/components/layout/ProfileSection";
import SkillSection from "@/components/layout/SkillSection";
import ProjectSection from "@/components/layout/ProjectSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { useEffect, useRef } from "react";
import { useModalStore } from "@/hooks/useModalStore";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
	const mainScrollRef = useRef<HTMLDivElement | null>(null);
	const profileScrollRef = useRef<HTMLDivElement | null>(null);
	const skillScrollRef = useRef<HTMLDivElement | null>(null);
	const projectScrollRef = useRef<HTMLDivElement | null>(null);
	const footerScrollRef = useRef<HTMLDivElement | null>(null);

	const { isAnyModalOpen } = useModalStore();

  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAnyModalOpen]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);	
		const navWrap = document.querySelector('.nav_wrap'); // Header 컴포넌트의 nav_wrap
	
		if (!navWrap) return;

		ScrollTrigger.create({
			trigger: profileScrollRef.current,
			start: "top-=500 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
			end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료
			scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
			onEnter: () => navWrap.classList.add('profile'),       // 아래로 스크롤해서 들어올 때
			onEnterBack: () => navWrap.classList.add('profile'),   // 위로 스크롤해서 다시 들어올 때
			onLeave: () => navWrap.classList.remove('profile'),    // 아래로 나갈 때
			onLeaveBack: () => navWrap.classList.remove('profile'),// 위로 나갈 때
			//markers: true,
		});
	}, [profileScrollRef]);

  return (
    <>
			{!isAnyModalOpen && <Header profileScrollRef={profileScrollRef} skillScrollRef={skillScrollRef} projectScrollRef={projectScrollRef}/>}
			<main>
				<MainSection mainScrollRef={mainScrollRef}/>
				<ProfileSection profileScrollRef={profileScrollRef}/>
				<SkillSection skillScrollRef={skillScrollRef}/>
				<ProjectSection projectScrollRef={projectScrollRef}/>
			</main>
			<Footer profileScrollRef={profileScrollRef} skillScrollRef={skillScrollRef} projectScrollRef={projectScrollRef} footerScrollRef={footerScrollRef}/>
			<NoiseBackground/>
		</>
  );
}