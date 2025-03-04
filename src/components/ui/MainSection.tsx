'use client';

import Noise from "@/components/ui/Noise";
//import SlotMachineText from "@/components/ui/SlotMachineText";
import BigCompass from "@/components/ui/BigCompass";
import SmallCompass from "@/components/ui/SmallCompass";
import Wave from "@/components/ui/Wave";
import useMouseEffect from "@/hooks/useMouseEffect";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Grid from "@/components/ui/Grid";
import WordText from "@/components/ui/WordText";

export default function MainSection() {
	const { gMatrix, circleMatrix, rotation, handleMouseMove } = useMouseEffect(); // 마우스 이펙트 훅
	const mainScrollRef = useRef<HTMLDivElement | null>(null); // 스크롤 애니메이션이 적용될 요소

	// const textContents = useRef(null);
	// const firstTextRefs = useRef<(HTMLDivElement | null)[]>([]);
	// const secondTextRefs = useRef<(HTMLDivElement | null)[]>([]);
	
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const mm = gsap.matchMedia();

		const ctx = gsap.context(() => {
			const q = gsap.utils.selector(mainScrollRef.current); // mainScrollRef.current 내부에서 CSS 선택자를 기반으로 요소 선택하는 함수수
			const gridListRefs = q('.grid_list'); // Grid 컴포넌트의 grid_item의 ref 배열
			const wordRefs = q('.word_svg'); // WordText 컴포넌트의 word_svg 클래스(PUBLISHER)
			const typewriterRefs = q('.typewriter'); // Typewriter 컴포넌트의 typewriter 클래스
			const bigCompassRef = q('.big_compass'); // BigCompass 컴포넌트를 감싸는 big_compass 클래스
			const smallCompassRef = q('.small_compass'); // SmallCompass 컴포넌트를 감싸는 small_compass 클래스
			const smallCompassRef2 = q('.small_compass2'); // SmallCompass 컴포넌트를 감싸는 small_compass2 클래스
			const waveRef = q('.wave'); // Wave 컴포넌트의 wave 클래스
			const waveHeightRef = q('.height'); // Wave 컴포넌트의 height 클래스
			const waveLineBlockRef = q('.line_block'); // Wave 컴포넌트의 line_block 클래스

			// 초기 애니메이션 (스크롤 없이 실행)
			gsap.fromTo( // grid_list 클래스
				gridListRefs,
				{ opacity: 0 }, // 시작 상태
				{ opacity: 1, delay: 1, duration: 3, ease: "power2.out" } // 목표 상태
			);

			const mainScroll = gsap.timeline({
				scrollTrigger: {
					trigger: mainScrollRef.current,
					start: "top top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "bottom+=5000 bottom", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료 
					scrub: 5, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					pin: true, // 스크롤 애니메이션 진행 중 스크롤 고정
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			// Typewriter 컴포넌트의 typewriter 클래스 참조
			mainScroll.to(typewriterRefs, {
				opacity: 0,
				duration: 2,
			});

			// Grid 컴포넌트의의 grid_list 클래스 값 변경
			mainScroll.to(gridListRefs, {
				y: +1000,
				duration: 2, // 애니메이션 작동 시간간
				stagger: 0.2, // 요소들이 차례대로 작동
				ease: "power1.inOut",
			}, "<"); // "<" 이전 애니메이션과 동시에 실행

			// WordText 컴포넌트의 wordRefs strokeDasharray 값 변경
			mainScroll.to(wordRefs, {
				y: +1000,
				duration: 2, // 3초 애니메이션 실행
				stagger: 0.2,
				ease: "power1.inOut",
			}, "<");


			// big_compass rotate 변경
			mainScroll.to(bigCompassRef, {
				rotate: 180,
				duration: 2,
			})
			// small_compass 클래스 rotate 변경
			mainScroll.to(smallCompassRef, {
				rotate: 180,
				duration: 2,
			}, "<");
			// small_compass2 클래스 rotate 변경
			mainScroll.to(smallCompassRef2, {
				rotate: 270,
				duration: 2,
			}, "<");
			mm.add("(min-width: 1280px)", ()=>{
				// Wave 컴포넌트의 wave 클래스 참조
				mainScroll.to(waveRef, {
					height: '26rem',
				}, "<");
			});
			mm.add("(min-width: 1536px)", ()=>{
				// Wave 컴포넌트의 wave 클래스 참조
				mainScroll.to(waveRef, {
					height: '29rem',
				}, "<");
			});


			// big_compass rotate 변경
			mainScroll.to(bigCompassRef, {
				rotate: 360,
				duration: 2,
			})
			// small_compass 클래스 rotate 변경
			mainScroll.to(smallCompassRef, {
				rotate: 360,
				duration: 2,
			}, "<");
			// small_compass2 클래스 rotate 변경
			mainScroll.to(smallCompassRef2, {
				rotate: 450,
				duration: 2,
			}, "<");
			// Wave 컴포넌트의 height 클래스, line_black 클래스 참조
			mainScroll.to(waveHeightRef, {
				//height: '20rem',
				height: '80rem',
				duration: 2,
			}, "<");
			mainScroll.to(waveLineBlockRef, {
				//height: '21rem',
				height: '81rem',
				duration: 2,
			}, "<");

		});

		return () => ctx.revert();
	}, []);

	return (
		<div className="main_section section" onMouseMove={handleMouseMove} ref={mainScrollRef}>
			{/* <div className="slot_machine_text" ref={textContents}>
				<SlotMachineText firstTextRefs={firstTextRefs} secondTextRefs={secondTextRefs}/>
			</div> */}
			<div className="big_compass">
				<BigCompass gMatrix={gMatrix} circleMatrix={circleMatrix}/>
			</div>
			<div className="small_compass">
				<SmallCompass rotation={rotation}/>
				<SmallCompass rotation={rotation}/>
			</div>
			<div className="small_compass small_compass2">
				<SmallCompass rotation={rotation}/>
				<SmallCompass rotation={rotation}/>
			</div>
			<div className="wave_wrap">
				<Wave/>
			</div>
			<div className="grid_wrap">
				<Grid
					gridColumns={[
						{ gap: '10rem', paddingTop: '15rem', listConfig: [4, 2], mainScrollRef }, // 첫번째 grid_list에 grid_item 4개 두 번째 grid_list에 grid_item 2개
						{ gap: '15rem', paddingTop: '10rem', listConfig: [3, 3], mainScrollRef }, // 첫번째 grid_list에 grid_item 3개 두 번째 grid_list에 grid_item 3개
						{ gap: '20rem', paddingTop: '5rem', listConfig: [4, 3], mainScrollRef }, // 첫번째 grid_list에 grid_item 4개 두 번째 grid_list에 grid_item 3개
						{ gap: '10rem', paddingTop: '10rem', listConfig: [3, 3], mainScrollRef }, // 첫번째 grid_list에 grid_item 3개 두 번째 grid_list에 grid_item 3개
						{ gap: '20rem', paddingTop: '15rem', listConfig: [3, 2], mainScrollRef }, // 첫번째 grid_list에 grid_item 3개 두 번째 grid_list에 grid_item 2개
						{ gap: '25rem', paddingTop: '5rem', listConfig: [3, 3], mainScrollRef } // 첫번째 grid_list에 grid_item 3개 두 번째 grid_list에 grid_item 3개
					]}
				/>
			</div>
			<div className="word_wrap">
				<WordText/>
			</div>
			{/* <div className="typewriter_wrap">
				<Typewriter/>
			</div> */}
		<Noise/>
	</div>
	)
}
