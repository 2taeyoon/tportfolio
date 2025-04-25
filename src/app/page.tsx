'use client'

import "@/style/style.css";

import MainSection from "@/components/layout/MainSection";
import ProfileSection from "@/components/layout/ProfileSection";
import SkillSection from "@/components/layout/SkillSection";
import ProjectSection from "@/components/layout/ProjectSection";
import Footer from "@/components/layout/Footer";
import NoiseBackground from "@/components/common/Noise";
import { useRef } from "react";

export default function Home() {
	const mainScrollRef = useRef<HTMLDivElement | null>(null);
	const profileScrollRef = useRef<HTMLDivElement | null>(null);
	const skillScrollRef = useRef<HTMLDivElement | null>(null);
	const projectScrollRef = useRef<HTMLDivElement | null>(null);
	const footerScrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
			<main>
				<MainSection mainScrollRef={mainScrollRef}/>
				<ProfileSection profileScrollRef={profileScrollRef}/>
				<SkillSection skillScrollRef={skillScrollRef}/>
				<ProjectSection projectScrollRef={projectScrollRef}/>
			</main>
			<Footer mainScrollRef={mainScrollRef} profileScrollRef={profileScrollRef} skillScrollRef={skillScrollRef} projectScrollRef={projectScrollRef} footerScrollRef={footerScrollRef}/>
			<NoiseBackground/>
		</>
  );
}