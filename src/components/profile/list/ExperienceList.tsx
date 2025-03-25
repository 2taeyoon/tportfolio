import React from "react";
import ExperienceItem from "@/components/profile/list/ExperienceItem";
import useMouseEffect from "@/hooks/useMouseEffect";
import ShapeQuoteDots from "@/components/profile/ShapeQuoteDots";
import Copyright from "@/components/common/Copyright";

const schoolData = [
  {
    subTitle: "신구대학교 그래픽아츠과(4년제)",
    body: "그래픽아츠과는 인쇄공학과 디자인이 결합된 학문으로, 인쇄 및 디자인 제작 전반의 실무 역량을 학습하였습니다. 인쇄 미디어 기술과 컴퓨터 그래픽 응용을 통해 기획, 디자인, 제작의 전반적인 과정을 학습하여 전문적인 직무 수행 능력을 함양하였습니다.",
    meta: {
      first: "2021.03 ~ 2023.02",
      second: "공학사",
      third: "학점: 3.6/4.5",
    },
  },
  {
    subTitle: "신구대학교 그래픽아츠과(2년제)",
    body: "그래픽아츠과는 인쇄공학과 디자인이 결합된 학문으로, 인쇄 및 디자인 제작 전반의 실무 역량을 학습하였습니다. 인쇄 미디어 기술과 컴퓨터 그래픽 응용을 통해 기획, 디자인, 제작의 전반적인 과정을 학습하여 전문적인 직무 수행 능력을 함양하였습니다.",
    meta: {
      first: "2015.03 ~ 2021.02",
      second: "전문공학사",
      third: "학점: 3.1/4.5",
    },
  },
];

const careerData = [
  {
    subTitle: "주식회사 엔아이",
    body: "주식회사 엔아이에서 웹 퍼블리셔로 근무하며 사용자 경험 개선을 목표로 웹사이트 디자인 및 퍼블리싱 업무를 수행하였으며 React, Next.js 프레임워크를 활용한 반응형 웹 최적화 작업을 진행하였습니다. 이와 더불어, 서비스 및 제품 홍보를 위한 사진 수집 및 정리, 이미지 자료 관리 등의 보조 업무를 수행하며 웹사이트에 적합한 비주얼 콘텐츠를 구성하였습니다.",
    meta: {
      first: "2023.10 ~ 2024.05",
      second: "경영악화로 인한 비자발적 퇴사",
      third: "퍼블리셔",
    },
  },
];

const educationData = [
	{
    subTitle: "웹 개발부터 웹앱까지 프론트엔드의 모든 것",
    body: "React 및 Next.js를 활용한 프론트엔드 개발을 학습하였으며 HTML, CSS, JavaScript, TypeScript를 기반으로 웹 UI 및 반응형 웹사이트를 구현하였습니다. API 연동 및 백엔드 통신(SSR, SSG, React-Query)을 통해 데이터를 효율적으로 관리하였습니다. 또한, 성능 최적화(Streaming, Server Components)를 적용해 보았습니다.",
    meta: {
			first: "2023.07 ~ 2023.09",
      second: "패스트캠프",
      third: "수료",
    },
  },
  {
    subTitle: "프론트엔드(React) 웹&앱 SW개발자 양성과정",
    body: "React를 활용한 프론트엔드 개발과 웹표준(HTML, CSS) 및 웹 프로그래밍을 익히며 UI/UX 웹 퍼블리싱, 하이브리드 앱(PWA) 개발, SPA 프로젝트 등을 수행하여 컴포넌트 기반 개발과 전반적인 웹 개발 기술을 습득하였습니다. 또한, 팀 프로젝트를 통해 GitHub을 활용한 협업 프로세스를 경험하였으며 코드 리뷰 및 Git Flow 기반의 브랜치 전략을 적용하여 체계적인 개발 및 배포 관리 방법을 익혔습니다.",
    meta: {
      first: "2023.01 ~ 2023.07",
      second: "그린컴퓨터아카데미",
      third: "수료",
    },
  },
];

export default function ExperienceList() {
	const { translate, handleMouseMove } = useMouseEffect(); // 마우스 이펙트 훅
  return (
    <div className="experience_wrap pd_box" onMouseMove={handleMouseMove}>
      <ExperienceItem title="학력사항" items={schoolData} translate={translate}/>
      <ExperienceItem title="경력사항" extra="(8개월)" items={careerData} translate={translate}/>
      <ExperienceItem title="교육사항" items={educationData} translate={translate}/>
			<Copyright translate={translate}/>
			<div className="shape_quote_dots_wrap">
				<ShapeQuoteDots translate={translate} className="left"/>
				<ShapeQuoteDots translate={translate} className="right"/>
			</div>
    </div>
  );
}