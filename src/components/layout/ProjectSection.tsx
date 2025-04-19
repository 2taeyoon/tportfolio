'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import Noise from '@/components/common/Noise';
import CodeCardWrap from "@/components/project/CodeCardWrap";
import DesignCardWrap from "../project/DesignCardWrap";

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
			const designCardTitleRef = q('.design_card_title');
			const designCardSubtitleRef = q('.design_card_subtitle');
			const designCardTitleCharRef = q('.design_card_title .char');
			const designCardSubtitleCharRef = q('.design_card_subtitle .char');
			const typortfolio = q('.typortfolio');
			const taeyoon = q('.taeyoon');
			const krmx = q('.krmx');
			const niweb = q('.niweb');
			const hivu = q('.hivu');
			const tycode = q('.tycode');
			const mydays = q('.mydays');
			const yoondesign = q('.yoondesign');
			const netmarble = q('.netmarble');

			const projectScroll = gsap.timeline({
				scrollTrigger: {
					trigger: projectScrollRef.current,
					start: "top top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "bottom bottom", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			//📌PUBLISHING PORTFOLIO, DESIGN PORTFOLIO 텍스트 애니메이션 START!!
			projectScroll.to(codeCardTitleRef, {
				scale: '1',
				scrollTrigger: {
					trigger: codeCardTitleRef,
					start: "top+=100 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=400", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(codeCardSubtitleRef, {
				scale: '1',
				scrollTrigger: {
					trigger: codeCardSubtitleRef,
					start: "top+=200 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=500", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
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
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
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
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(designCardTitleRef, {
				scale: '1',
				scrollTrigger: {
					trigger: designCardTitleRef,
					start: "top+=100 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=400", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(designCardSubtitleRef, {
				scale: '1',
				scrollTrigger: {
					trigger: designCardSubtitleRef,
					start: "top+=200 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=500", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(designCardTitleCharRef, {
				left: '0',
				rotate: '0',
				stagger: 0.3,
				scrollTrigger: {
					trigger: designCardTitleCharRef,
					start: "top+=100 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=400", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(designCardSubtitleCharRef, {
				right: '0',
				rotate: '0',
				stagger: 0.3,
				scrollTrigger: {
					trigger: designCardSubtitleCharRef,
					start: "top+=200 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=500", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});
			// PUBLISHING PORTFOLIO, DESIGN PORTFOLIO 텍스트 애니메이션 END!!


			// 📌포트폴리오 카드 애니메이션 START!!
			projectScroll.to(typortfolio, {
				left: '0',
				scrollTrigger: {
					trigger: typortfolio,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top center", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(taeyoon, {
				right: '0',
				scrollTrigger: {
					trigger: taeyoon,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top center", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(krmx, {
				left: '0',
				scrollTrigger: {
					trigger: krmx,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=300", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(niweb, {
				right: '0',
				scrollTrigger: {
					trigger: niweb,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=300", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(hivu, {
				left: '0',
				scrollTrigger: {
					trigger: hivu,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=300", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(tycode, {
				right: '0',
				scrollTrigger: {
					trigger: tycode,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=300", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(mydays, {
				left: '0',
				scrollTrigger: {
					trigger: mydays,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=300", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(yoondesign, {
				right: '0',
				scrollTrigger: {
					trigger: yoondesign,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=300", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			projectScroll.to(netmarble, {
				left: '0',
				scrollTrigger: {
					trigger: netmarble,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top bottom-=300", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});
			// 포트폴리오 카드 애니메이션 END!!


		});

		return () => ctx.revert();
	}, []);

  return (
    <div className="project_section section inner" ref={projectScrollRef}>
			<CodeCardWrap/>
			<DesignCardWrap/>
      <Noise />
    </div>
  );
}