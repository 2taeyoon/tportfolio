'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import Noise from '@/components/common/Noise';
import ProjectCardWrap from "../project/CodeCardWrap";

export default function ProjectSection() {
	const projectScrollRef = useRef<HTMLDivElement | null>(null); // 스크롤 애니메이션이 적용될 요소

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const q = gsap.utils.selector(projectScrollRef.current);
			const codeCardTitleRef = q('.code_card_title');
			const codeCardSubtitleRef = q('.code_card_subtitle');
			const codeCardTitleCharRef = q('.code_card_title .char');
			const codeCardSubtitleCharRef = q('.code_card_subtitle .char');

			const projectScroll = gsap.timeline({
				scrollTrigger: {
					trigger: projectScrollRef.current,
					start: "top top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "bottom bottom", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(codeCardTitleRef, {
				scale: '1',
				scrollTrigger: {
					trigger: codeCardTitleRef,
					start: "top+=100 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=400", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(codeCardSubtitleRef, {
				scale: '1',
				scrollTrigger: {
					trigger: codeCardSubtitleRef,
					start: "top+=200 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=500", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});


			projectScroll.to(codeCardTitleCharRef, {
				left: '0',
				rotate: '0',
				stagger: 0.3,
				scrollTrigger: {
					trigger: codeCardTitleCharRef,
					start: "top+=100 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=400", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(codeCardSubtitleCharRef, {
				right: '0',
				rotate: '0',
				stagger: 0.3,
				scrollTrigger: {
					trigger: codeCardSubtitleCharRef,
					start: "top+=200 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=500", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

		});

		return () => ctx.revert();
	}, []);

  return (
    <div className="project_section section inner" ref={projectScrollRef}>
			<ProjectCardWrap/>
      <Noise />
    </div>
  );
}