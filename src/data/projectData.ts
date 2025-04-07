import { ProjectCardProps } from "@/types/projectProps";

// 프로젝트 데이터 배열 START!!
export const projectData: ProjectCardProps[] = [
	{
    title: "MyDays",
		type: "개인",
		boxColor: "var(--themaSub)",
		fontColor: "var(--black)",
		skillBoxColor: "var(--themaDeep)",
		skillFontColor: "var(--whiteEB)",
		badgeBoxColor: "var(--thema)",
		badgeFontColor: "var(--black)",
		linkBoxColor: "var(--thema)",
    techStack: {
      rows: [
        {
          title: "디바이스",
          items: ["PWA"]
        },
        {
          title: "개발 언어",
          items: ["JavaScript"]
        },
				{
          title: "API",
          items: ["Service Worker"]
        },
        {
          title: "라이브러리",
          items: ["Swiper", "Firebase", "jQuery UI"]
        },
				{
          title: "기여도",
          items: ["100%"]
        }
      ]
    },
    skills: {
			title: "사용 기술",
			images: [
				{
					src: "/images/skill/skill_html.png",
					alt: "skill_html",
					name: "HTML"
				},
				{
					src: "/images/skill/skill_css.png",
					alt: "skill_css",
					name: "CSS"
				},
				{
					src: "/images/skill/skill_scss.png",
					alt: "skill_scss",
					name: "SCSS"
				},
				{
					src: "/images/skill/skill_javascript.png",
					alt: "skill_javascript",
					name: "JavaScript"
				},
				{
					src: "/images/skill/skill_jquery.png",
					alt: "skill_jquery",
					name: "jQuery"
				},
				{
					src: "/images/skill/skill_firebase.png",
					alt: "skill_firebase",
					name: "Firebase"
				},
			]
		},
    features: {
			title: "프로젝트 개요",
			body: [
				"MyDays는 사용자가 중요한 날짜를 추적하고 관리할 수 있는 웹 애플리케이션입니다. 이 앱은 기념일, 생일, 나이 계산 등 다양한 날짜를 관리할 수 있는 기능을 제공합니다. 사용자는 날짜를 선택하고 디데이를 확인하며 이벤트를 추가하고 관리할 수 있습니다. 스와이퍼 인터페이스로 원활한 네비게이션이 가능하며 Firebase를 사용하여 이메일로 가입하고 로그인할 수 있습니다.",
				"Firebase 기반의 시스템을 통해 관리자는 콘텐츠와 사용자 상호작용을 쉽게 관리할 수 있으며 다양한 디데이와 관련된 이벤트를 추가하고 관리할 수 있는 기능을 제공합니다. 또한, 날짜 기반 정보를 계산하여 사용자에게 시각적으로 제공함으로써 더 나은 개인화된 경험을 제공합니다. MyDays는 중요한 날짜를 효율적으로 관리하고 추적할 수 있는 도구로 실시간 데이터 갱신을 제공합니다.",
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/mydays/screenshot1.jpg",
					alt: "screenshot1"
				},
				{
					src: "/images/project/mydays/screenshot2.jpg",
					alt: "screenshot2"
				},
				{
					src: "/images/project/mydays/screenshot3.jpg",
					alt: "screenshot3"
				},
				{
					src: "/images/project/mydays/screenshot4.jpg",
					alt: "screenshot4"
				},
				{
					src: "/images/project/mydays/screenshot5.jpg",
					alt: "screenshot5"
				},
				{
					src: "/images/project/mydays/screenshot6.jpg",
					alt: "screenshot6"
				},
				{
					src: "/images/project/mydays/screenshot7.jpg",
					alt: "screenshot7"
				},
				{
					src: "/images/project/mydays/screenshot8.jpg",
					alt: "screenshot8"
				},
				{
					src: "/images/project/mydays/screenshot9.jpg",
					alt: "screenshot9"
				},
			]
    },
    links: {
      site: {
        href: "https://2taeyoon.github.io/task/MyDays/",
        text: "사이트"
      },
      github: {
        href: "https://github.com/2taeyoon/task/tree/master/MyDays",
        text: "깃허브"
      }
    }
  },
  {
    title: "YOONDESIGN",
		type: "개인",
		boxColor: "var(--themaDark)",
		fontColor: "var(--whiteDE)",
		skillBoxColor: "var(--themaSub)",
		skillFontColor: "var(--black)",
		badgeBoxColor: "var(--themaSub)",
		badgeFontColor: "var(--black)",
		linkBoxColor: "var(--themaDeep)",
    techStack: {
      rows: [
        {
          title: "디바이스",
          items: ["반응형"]
        },
        {
          title: "개발 언어",
          items: ["JavaScript"]
        },
        {
          title: "라이브러리",
          items: ["AOS"]
        },
				{
          title: "기여도",
          items: ["100%"]
        }
      ]
    },
    skills: {
			title: "사용 기술",
			images: [
				{
					src: "/images/skill/skill_html.png",
					alt: "skill_html",
					name: "HTML"
				},
				{
					src: "/images/skill/skill_css.png",
					alt: "skill_css",
					name: "CSS"
				},
				{
					src: "/images/skill/skill_scss.png",
					alt: "skill_scss",
					name: "SCSS"
				},
				{
					src: "/images/skill/skill_javascript.png",
					alt: "skill_javascript",
					name: "JavaScript"
				},
			]
		},
    features: {
			title: "프로젝트 개요",
			body: [
				"YOONDESIGN은 자사 웹사이트 개발 프로젝트입니다. 해당 프로젝트에서는 웹사이트의 디자인과 기능을 구축하여 회사의 브랜드를 온라인에서 효과적으로 전달하고, 사용자 경험을 최적화하는 데 초점을 맞추었습니다.",
				"반응형 웹 디자인을 적용하여 다양한 기기에서 최적화된 사용자 경험을 제공합니다. 고정형 헤더와 푸터를 구현하여 직관적인 네비게이션을 제공하며 햄버거 메뉴와 드롭다운 메뉴로 모바일에서도 원활한 네비게이션을 지원합니다. 슬라이더를 메인 페이지에 추가하여 주요 비전과 이미지를 강조했습니다. AOS 애니메이션을 사용해 스크롤 시 시각적 효과를 추가하여 페이지의 동적 요소를 강화했습니다.",
			]
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/yoondesign/screenshot1.jpg",
					alt: "screenshot1"
				},
				{
					src: "/images/project/yoondesign/screenshot2.jpg",
					alt: "screenshot2"
				},
				{
					src: "/images/project/yoondesign/screenshot3.jpg",
					alt: "screenshot3"
				},
				{
					src: "/images/project/yoondesign/screenshot4.jpg",
					alt: "screenshot4"
				},
			]
    },
    links: {
      site: {
        href: "https://2taeyoon.github.io/task/YOONDESIGN/",
        text: "사이트"
      },
      github: {
        href: "https://github.com/2taeyoon/task/tree/master/YOONDESIGN",
        text: "깃허브"
      }
    }
  },
	{
    title: "netmarble",
		type: "개인",
		boxColor: "var(--thema)",
		fontColor: "var(--black)",
		skillBoxColor: "var(--whiteDE)",
		skillFontColor: "var(--black)",
		badgeBoxColor: "var(--themaDark)",
		badgeFontColor: "var(--whiteDE)",
		linkBoxColor: "var(--whiteDE)",
    techStack: {
      rows: [
        {
          title: "디바이스",
          items: ["PC", "모바일"]
        },
        {
          title: "개발 언어",
          items: ["JavaScript"]
        },
        {
          title: "라이브러리",
          items: ["Swiper", "prefixfree"]
        },
				{
          title: "기여도",
          items: ["100%"]
        }
      ]
    },
    skills: {
			title: "사용 기술",
			images: [
				{
					src: "/images/skill/skill_html.png",
					alt: "skill_html",
					name: "HTML"
				},
				{
					src: "/images/skill/skill_css.png",
					alt: "skill_css",
					name: "CSS"
				},
				{
					src: "/images/skill/skill_javascript.png",
					alt: "skill_javascript",
					name: "JavaScript"
				},
			]
		},
    features: {
			title: "주요 기능 및 특징",
			body: [
				"netmarble 프로젝트는 클론 코딩 프로젝트로, 웹사이트의 특정 기능이나 디자인을 실제 사이트를 모델로 구현한 것입니다. 해당 프로젝트에서는 적응형 웹 디자인을 적용하여 PC와 모바일 기기에서 최적화가 되어있습니다. 웹사이트의 헤더 및 네비게이션 바는 모바일 및 데스크탑 화면에서 모두 적절하게 표시되며, 서브 메뉴와 언어 선택 기능을 포함한 상단 메뉴를 구현했습니다.",
				"슬라이더 기능을 메인 페이지에 추가하여 시각적으로 매력적인 콘텐츠를 제공합니다. 각 슬라이드는 이미지와 텍스트가 포함되어 있으며 버튼을 클릭하거나 슬라이드 박스를 통해 콘텐츠를 탐색할 수 있습니다. 상세 페이지에서는 서비스 목록을 제공하며 각 게임과 관련된 정보는 아이콘과 텍스트로 정리되어 있습니다."
			]
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/netmarble/screenshot1.jpg",
					alt: "screenshot1"
				},
				{
					src: "/images/project/netmarble/screenshot2.jpg",
					alt: "screenshot2"
				},
				{
					src: "/images/project/netmarble/screenshot3.jpg",
					alt: "screenshot3"
				},
				{
					src: "/images/project/netmarble/screenshot4.jpg",
					alt: "screenshot4"
				},
				{
					src: "/images/project/netmarble/screenshot5.jpg",
					alt: "screenshot5"
				}
			]
    },
    links: {
      site: {
        href: "https://2taeyoon.github.io/task/netmable/",
        text: "사이트"
      },
      github: {
        href: "https://github.com/2taeyoon/task/tree/master/netmable",
        text: "깃허브"
      }
    }
  },
]; 
// 프로젝트 데이터 배열 END!!