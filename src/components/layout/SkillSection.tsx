'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';
import SkillCircle from "@/components/skill/SkillCircle";
import SkillDetail from "@/components/skill/SkillDetail";
import DividerWithIcons from "@/components/common/DividerWithIcons";
import RadialGradient from "@/components/common/RadialGradient";
import useMouseEffect from "@/hooks/useMouseEffect";
import Wave from "../common/Wave";
import { spaceTextSplit } from "@/utils/textSplit";
import TextSplitWrap from "../common/TextSplitWrap";

export default function SkillSection({skillScrollRef}: {skillScrollRef: React.RefObject<HTMLDivElement | null>}) {
	const title = `MY SKILL`;
  const body = `시맨틱 태그를 활용한 구조적인 마크업 작성에 능숙하며 CSS(SCSS, Tailwind CSS)를 통해 반응형 웹, 애니메이션, 일관된 디자인 시스템을 구현할 수 있습니다. JavaScript와 TypeScript를 활용한 동적 UI 및 사용자 인터랙션 구현이 가능하며 React와 Next.js 기반의 컴포넌트 중심 개발과 SSR/SSG 최적화 경험을 갖추고 있습니다. Webpack을 통한 빌드 환경을 구성할 수 있으며 Git과 GitHub을 활용한 협업에도 익숙합니다. Firebase 및 Supabase를 통한 백엔드 연동도 경험해 보았습니다. Photoshop, Illustrator로 시각적 콘텐츠를 제작할 수 있으며 Markdown으로 Notion 문서 및 콘텐츠 작성도 가능합니다.`;

	const [activeIndex, setActiveIndex] = useState(0); // 현재 가장 위에 있는 이미지 인덱스 (0번부터 시작)
	const [radius, setRadius] = useState(400); // skill 원의 반지름 (이미지들이 얼마나 퍼져 있을지)
  const [itemSize, setItemSize] = useState(100); // 각 이미지의 크기 (정사각형)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1536) {
        setRadius(350);
        setItemSize(80);
      } else {
        setRadius(400);
        setItemSize(100);
      }
    };

    handleResize(); // 처음 마운트 시 실행
    window.addEventListener('resize', handleResize); // 창 크기 변경 시 반응

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			if (!skillScrollRef?.current) return;

			const q = gsap.utils.selector(skillScrollRef.current);
			const titleCharRef = q('.my_skill_title .char'); // MySkillText 컴포넌트의 my_skill_title 클래스의 span과 my_skill_body 클래스의 span
			const bodyCharRef = q('.my_skill_body .char'); // MySkillText 컴포넌트의 my_skill_title 클래스의 span과 my_skill_body 클래스의 span
			const skillCircleWrapRef = q('.skill_circle_wrap');  // SkillCircle 컴포넌트의 skill_circle_wrap 클래스스

			const skillScroll = gsap.timeline({
				scrollTrigger: {
					trigger: skillScrollRef.current,
					start: "top top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "bottom bottom", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			skillScroll.to(titleCharRef, {
				transform: 'translateY(0%) skewY(0deg)',
				stagger: 0.3,
				scrollTrigger: {
					trigger: titleCharRef,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top top+=300", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			skillScroll.to(bodyCharRef, {
				transform: 'translateY(0%) skewY(0deg)',
				stagger: 0.3,
				scrollTrigger: {
					trigger: bodyCharRef,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top top+=300", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			skillScroll.to(skillCircleWrapRef, {
				bottom: '-45rem',
				scrollTrigger: {
					trigger: skillCircleWrapRef,
					start: "top-=1200 center", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top-=900 center", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

		});

		return () => ctx.revert();
	}, [skillScrollRef]);

	const { translate2, handleMouseMove } = useMouseEffect(); // 마우스 이펙트 훅

  return (
    <div className="skill_section section inner" ref={skillScrollRef} onMouseMove={handleMouseMove}>
			<DividerWithIcons/>
			<div className="my_skill_wrap pd_box">
				<TextSplitWrap text={title} className="my_skill_title" wrap={true} splitFunction={spaceTextSplit}/>
				<TextSplitWrap text={body} className="my_skill_body" wrap={true} splitFunction={spaceTextSplit}/>
			</div>
			<RadialGradient translate2={translate2} className="left"/>
			<RadialGradient translate2={translate2} className="right"/>
      <div className="skill_circle_wrap">
				<SkillCircle radius={radius} itemSize={itemSize} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
				<SkillDetail radius={radius} itemSize={itemSize} activeIndex={activeIndex}/>
      </div>
			<Wave />
    </div>
  );
}