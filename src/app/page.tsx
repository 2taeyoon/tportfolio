'use client'

import "@/style/style.css";

import NoiseBackground from "@/components/common/Noise";
import MainSection from "@/components/layout/MainSection";
import ProfileSection from "@/components/layout/ProfileSection";
import SkillSection from "@/components/layout/SkillSection";
import ProjectSection from "@/components/layout/ProjectSection";
import Footer from "@/components/layout/Footer";
//import Header from "@/components/layout/Header";

import { useRef } from "react";
//import { useModalStore } from "@/hooks/useModalStore";

export default function Home() {
	const mainScrollRef = useRef<HTMLDivElement | null>(null);
	const profileScrollRef = useRef<HTMLDivElement | null>(null);
	const skillScrollRef = useRef<HTMLDivElement | null>(null);
	const projectScrollRef = useRef<HTMLDivElement | null>(null);
	const footerScrollRef = useRef<HTMLDivElement | null>(null);

	//const { isAnyModalOpen } = useModalStore();

  return (
    <>
			{/* {!isAnyModalOpen && <Header profileScrollRef={profileScrollRef} skillScrollRef={skillScrollRef} projectScrollRef={projectScrollRef}/>} */}
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