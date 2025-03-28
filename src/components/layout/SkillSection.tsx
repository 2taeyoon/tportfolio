'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from 'react';
import Noise from '@/components/common/Noise';
import SkillCircle from "@/components/skill/SkillCircle";
import SkillDetail from "@/components/skill/SkillDetail";
import DividerWithIcons from "@/components/common/DividerWithIcons";
import RadialGradient from "@/components/common/RadialGradient";
import useMouseEffect from "@/hooks/useMouseEffect";
import MySkillBody from "@/components/skill/MySkillText";
import Wave from "../common/Wave";

export default function SkillSection() {
	const skillScrollRef = useRef<HTMLDivElement | null>(null); // 스크롤 애니메이션이 적용될 요소

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
					end: "top top+=400", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			skillScroll.to(bodyCharRef, {
				transform: 'translateY(0%) skewY(0deg)',
				stagger: 0.3,
				scrollTrigger: {
					trigger: bodyCharRef,
					start: "top bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top top+=400", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					markers: true, // 스크롤 확인용(개발 모드에서만 사용)
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
	}, []);

	const { translate2, handleMouseMove } = useMouseEffect(); // 마우스 이펙트 훅

  return (
    <div className="skill_section section inner" ref={skillScrollRef} onMouseMove={handleMouseMove}>
			<DividerWithIcons/>
			<div className="my_skill_wrap pd_box">
				<MySkillBody/>
			</div>
			<RadialGradient translate2={translate2} className="left"/>
			<RadialGradient translate2={translate2} className="right"/>
      <div className="skill_circle_wrap">
				<SkillCircle radius={radius} itemSize={itemSize} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
				<SkillDetail radius={radius} itemSize={itemSize} activeIndex={activeIndex}/>
      </div>
			<Wave />
      <Noise/>
    </div>
  );
}