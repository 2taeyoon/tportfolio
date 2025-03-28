'use client'
import "@/style/style.css";
import MainSection from "@/components/layout/MainSection";
import ProfileSection from "@/components/layout/ProfileSection";
import SkillSection from "@/components/layout/SkillSection";
import ProjectSection from "@/components/layout/ProjectSection";
// import { useEffect } from "react";
// import gsap from "gsap";
export default function Home() {
/*
	useEffect(() => {
    // 클라이언트에서 실행되므로 `document` 사용 가능
    const gridContainer = document.querySelector(".grid-container");

    if (!gridContainer) return;

    const rows = 15;
    const cols = 30;
    const totalBoxes = rows * cols;
    const boxes = [];

    for (let i = 0; i < totalBoxes; i++) {
      const box = document.createElement("div");
      box.classList.add("grid-box");
      gridContainer.appendChild(box);
      boxes.push(box);
    }

    gsap.utils.shuffle(boxes);

    gsap.to(boxes, {
      opacity: 1,
      duration: 0.001,
      stagger: { each: 0.001, from: "random", },
    });
  }, []);
*/
  return (
    <div>
			<MainSection/>
			<ProfileSection/>
			<SkillSection/>
			<ProjectSection/>
			<div style={{ height: "100vh", backgroundColor: "blueviolet" }}></div>
			{/* <div className="grid-container"></div> */}
    </div>
  );
}