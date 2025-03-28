'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import Noise from '@/components/common/Noise';

export default function ProjectSection() {
	const projectScrollRef = useRef<HTMLDivElement | null>(null); // 스크롤 애니메이션이 적용될 요소

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const q = gsap.utils.selector(projectScrollRef.current);
			//const titleCharRef = q('.my_skill_title .char');

			const skillScroll = gsap.timeline({
				scrollTrigger: {
					trigger: projectScrollRef.current,
					start: "top top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "bottom bottom", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			// skillScroll.to(titleCharRef, {
			// 	transform: 'translateY(0%) skewY(0deg)',
			// 	stagger: 0.3,
			// 	scrollTrigger: {
			// 		trigger: titleCharRef,
			// 		start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
			// 		end: "top top+=400", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
			// 		scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
			// 		markers: true, // 스크롤 확인용(개발 모드에서만 사용)
			// 	},
			// });

		});

		return () => ctx.revert();
	}, []);

  return (
    <div className="project_section section inner" ref={projectScrollRef}>

      <Noise/>
    </div>
  );
}