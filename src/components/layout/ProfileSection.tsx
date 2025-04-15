'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Noise from "@/components/common/Noise";
import ProfileIntroduction from "@/components/profile/ProfileIntroduction";
import { characterTextSplit } from "@/utils/textSplit";
import ProfileVideo from "@/components/profile/ProfileVideo";
import ExperienceList from "@/components/profile/list/ExperienceList";
import DividerWithIcons from "@/components/common/DividerWithIcons";
import TextSplitWrap from "../common/TextSplitWrap";

export default function ProfileSection() {
	const title = `PROFILE`;
	const profileScrollRef = useRef<HTMLDivElement | null>(null); // 스크롤 애니메이션이 적용될 요소

	const [dividerSrc, setDividerSrc] = useState('/images/divider_dark.png'); // 초기 이미지

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const q = gsap.utils.selector(profileScrollRef.current);
			const profileWrapRef = q('.profile_wrap'); 
			const profileTitleRef = q('.profile_title'); // profile_title 클래스 텍스트
			const profileTitleCharRef = q('.profile_title .char'); // profile_title_span 클래스 텍스트
			const clipRef = q('.clip'); // IntroduceItem 컴포넌트의 clip 클래스 텍스트
			const profileCardRef = q('.profile_card'); // IntroduceItem 컴포넌트의 profile_card 클래스
			const profileCardNameRef = q('.name'); // IntroduceItem 컴포넌트의 name 클래스
			const profileCardAgeRef = q('.age'); // IntroduceItem 컴포넌트의 age 클래스
			const profileCardLocationRef = q('.location'); // IntroduceItem 컴포넌트의 location 클래스
			const profileCardContactRef = q('.contact'); // IntroduceItem 컴포넌트의 contact 클래스
			const quotesSvgPathRef = q('.quotes_svg_path'); // QuotesSvg 컴포넌트의 quotes_svg_path 클래스
			const dividerBarRef = q('.divider_bar'); // DividerWithIcons 컴포넌트의 divider_bar 클래스
			const dividerImgRef = q('.divider_img'); // DividerWithIcons 컴포넌트의 divider_img 클래스
			const experienceTitleRef = q('.experience_title'); // ExperienceItem 컴포넌트의 experience_title 클래스
			const contentSubTitleRef = q('.content_sub_title'); // ExperienceItem 컴포넌트의 content_sub_title 클래스
			const contentDetailRef = q('.content_detail'); // ExperienceItem 컴포넌트의 content_detail 클래스
			const contentMetaItemRef = q('.content_meta_item'); // ExperienceItem 컴포넌트의 content_meta_item 클래스

			const profileScroll = gsap.timeline({
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "bottom top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			// PROFILE 텍스트 참조(profile_title 클래스)
			profileScroll.to(profileTitleRef, {
				left: '50%',
				transform: 'translate(-50%)',
				duration: 3,
				scrollTrigger: {
					trigger: profileTitleRef,
					start: "bottom-=100 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top-=100 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			// PROFILE 텍스트 참조(profile_title_span 클래스)
			profileScroll.to(profileTitleCharRef, {
				visibility: 'visible',
				transform: 'scale(1.5) rotate(0deg)',
				stagger: 0.3,
				duration: 3,
				scrollTrigger: {
					trigger: profileTitleCharRef,
					start: "bottom-=100 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top-=200 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			// IntroduceItem 컴포넌트의 clip 클래스 텍스트(텍스트 채워지는 애니메이션션)
			profileScroll.to(clipRef, {
				backgroundSize: '100%',
				duration: 10,
				stagger: 1,
				scrollTrigger: {
					trigger: clipRef,
					start: "bottom+=300 bottom", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top top+=200", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: 3, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			// 📌 프로필 섹션 색상 변경 START!!
			profileScroll.to(profileScrollRef.current, { // selector로 선택하면 profileScrollRef와 중복되서 그런지 적용이 안된다
				backgroundColor: 'var(--black)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(profileWrapRef, {
				backgroundColor: 'var(--black)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(clipRef, {
				backgroundImage: 'linear-gradient(to right, var(--thema), var(--thema))',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(profileCardRef, {
				backgroundColor: 'var(--black333)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(profileCardNameRef, {
				color: 'var(--black999)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(profileCardAgeRef, {
				color: 'var(--black666)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(profileCardLocationRef, {
				color: 'var(--black666)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(profileCardContactRef, {
				color: 'var(--black666)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(quotesSvgPathRef, {
				stroke: 'var(--themaSubDark)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(dividerBarRef, {
				borderTopColor: 'var(--themaSubDark)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(dividerImgRef, {
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					onEnter: () => setDividerSrc('/images/divider_sub_dark.png'),  // 스크롤 트리거 도달 시 이미지 변경
          onLeaveBack: () => setDividerSrc('/images/divider_dark.png'), // 스크롤을 위로 올리면 원래 이미지로 복귀
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(experienceTitleRef, {
				color: 'var(--themaSubDark)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(contentSubTitleRef, {
				color: 'var(--themaDeep)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(contentDetailRef, {
				color: 'var(--thema)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});

			profileScroll.to(contentMetaItemRef, {
				backgroundColor: 'var(--thema)',
				color: 'var(--themaDark)',
				scrollTrigger: {
					trigger: profileScrollRef.current,
					start: "top+=900 top", // 트리거 요소의 A가 뷰포트(windiw)의 B에 닿을 때 시작
					end: "top+=900 top", // 트리거 요소의 A가 뷰포트(window)의 B에 닿을 때 종료					
					scrub: true, // 값이 클수록 더 부드럽게 움직임(기본값 true)(스크롤 반대 시에도 애니메이션 작동)
					//markers: true, // 스크롤 확인용(개발 모드에서만 사용)
				},
			});
			// 📌 프로필 섹션 색상 변경 END!!
		});

		return () => ctx.revert();
	}, []);

	return (
		<div className="profile_section section inner" ref={profileScrollRef}>
			<TextSplitWrap text={title} className="profile_title" splitFunction={characterTextSplit}/>
			<div className="profile_wrap">
				<ProfileVideo/>
				<ProfileIntroduction/>
				<DividerWithIcons dividerSrc={dividerSrc}/>
				<ExperienceList/>
			</div>
			<Noise/>
		</div>
	)
}