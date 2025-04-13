import { ProjectCardProps } from "@/types/projectProps";

// 프로젝트 데이터 배열 START!!
export const projectData: ProjectCardProps[] = [
	{
    title: "T Portfolio",
		className: "tportfolio",
		type: "개인",
		boxColor: "var(--black)",
		fontColor: "var(--whiteDE)",
		skillBoxColor: "var(--black333)",
		skillFontColor: "var(--whiteEB)",
		badgeBoxColor: "var(--black333)",
		badgeFontColor: "var(--whiteEB)",
		linkBoxColor: "var(--black333)",
		linkFontColor: "var(--whiteEB)",
    techStack: {
      rows: [
        {
          title: "디바이스",
          items: ["PC"]
        },
				{
          title: "프레임워크",
          items: ["NextJS"]
        },
        {
          title: "개발 언어",
          items: ["TypeScript"]
        },
        {
          title: "라이브러리",
          items: ["Gsap", "Swiper"]
        },
				{
          title: "기여도",
          items: ["전체 100%"]
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
					src: "/images/skill/skill_typescript.png",
					alt: "skill_typescript",
					name: "TypeScript"
				},
				{
					src: "/images/skill/skill_nextjs.png",
					alt: "skill_nextjs",
					name: "NextJS"
				},
			]
		},
    features: {
			title: "프로젝트 설명",
			body: [
				"엔아이 자사웹 사이트는 Next.js 기반으로 제작된 반응형 공식 웹사이트로 주식회사 엔아이의 브랜딩과 비전, 마케팅 역량을 소개하는 마케팅 중심의 기업 사이트입니다.",
			],
		},
		contribution: {
			title: "기여도",
			body: [
				"디자인 100%: 웹사이트 UI/UX 전체 디자인, 반응형 구조 설계, 스타일 가이드 적용 등",
				"프론트 100%: Next.js 구조 설계, Swiper 슬라이더, AOS 애니메이션, TailwindCSS 기반 반응형 구현, 카카오 지도 연동, Channel Talk 연동 등 모든 페이지 및 주요 인터랙션 구현",
				"배포 및 테스트 100%: Vercel 배포, 기기별 크로스브라우징 테스트 및 버그 수정 등",
				"백엔드 연동 제외: 이메일 전송 기능인 Nodemailer + MongoDB 연동은 타 개발자 담당",
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/niweb1.jpg",
					alt: "niweb1"
				},
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
	{
    title: "KRMX",
		className: "krmx",
		type: "회사",
		boxColor: "var(--themaSub)",
		fontColor: "var(--black)",
		skillBoxColor: "var(--thema)",
		skillFontColor: "var(--black)",
		badgeBoxColor: "var(--thema)",
		badgeFontColor: "var(--black)",
		linkBoxColor: "var(--thema)",
		linkFontColor: "var(--black)",
    techStack: {
      rows: [
        {
          title: "디바이스",
          items: ["반응형"]
        },
				{
          title: "프레임워크",
          items: ["NextJS"]
        },
        {
          title: "개발 언어",
          items: ["JavaScript", "PHP"]
        },
        {
          title: "라이브러리",
          items: ["Swiper", "NextAuth"]
        },
				{
          title: "기여도",
          items: ["디자인 90%", "프론트 50%"]
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
					src: "/images/skill/skill_typescript.png",
					alt: "skill_typescript",
					name: "TypeScript"
				},
				{
					src: "/images/skill/skill_nextjs.png",
					alt: "skill_nextjs",
					name: "NextJS"
				},
			]
		},
    features: {
			title: "프로젝트 개요",
			body: [
				"KRMX는 골프장 회원권 매매 중개 전문 플랫폼으로, 회원권 시세 정보 제공, 매매 등록 및 관리, 관심 리스트, 1:1 문의 기능 등 거래 중심 기능과 함께 회원가입부터 탈퇴까지의 전반적인 회원 프로세스를 포함한 기업형 B2C 웹서비스입니다. Next.js 기반으로 설계된 이 프로젝트는 관리자 없이 사용자가 직접 회원권을 등록하고 매매할 수 있는 구조로, 직관적인 UI/UX와 실시간 시세 차트, 단계별 거래 절차 안내 등을 제공합니다.",
			],
		},
		contribution: {
			title: "기여도",
			body: [
				"디자인 90%: 메인 비주얼, 아이콘 구성, 프로세스 안내 시각화, 페이지 스타일링 등 서비스 중심의 디자인 영역 담당",
				"프론트 50%: HTML 구조 및 CSS Module 스타일링 작업, 페이지 내 실시간 시세 차트 및 거래 상태 시각화, 로그인(NextAuth)/회원가입/정보수정/탈퇴 등 회원 프로세스 페이지 구조 설계 및 마크업 전반 작업, 반응형 구조 설계 및 크로스 브라우징 테스트",
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/krmx1.jpg",
					alt: "krmx1"
				},
				{
					src: "/images/project/krmx2.jpg",
					alt: "krmx2"
				},
				{
					src: "/images/project/krmx3.jpg",
					alt: "krmx3"
				},
				{
					src: "/images/project/krmx4.jpg",
					alt: "krmx4"
				},
				{
					src: "/images/project/krmx5.jpg",
					alt: "krmx5"
				},
				{
					src: "/images/project/krmx6.jpg",
					alt: "krmx6"
				},
				{
					src: "/images/project/krmx7.jpg",
					alt: "krmx7"
				},
				{
					src: "/images/project/krmx8.jpg",
					alt: "krmx8"
				},
				{
					src: "/images/project/krmx9.jpg",
					alt: "krmx9"
				},
				{
					src: "/images/project/krmx10.jpg",
					alt: "krmx10"
				},
				{
					src: "/images/project/krmx11.jpg",
					alt: "krmx11"
				},
				{
					src: "/images/project/krmx12.jpg",
					alt: "krmx12"
				},
				{
					src: "/images/project/krmx13.jpg",
					alt: "krmx13"
				},
				{
					src: "/images/project/krmx14.jpg",
					alt: "krmx14"
				},
				{
					src: "/images/project/krmx15.jpg",
					alt: "krmx15"
				},
				{
					src: "/images/project/krmx16.jpg",
					alt: "krmx16"
				},
				{
					src: "/images/project/krmx17.jpg",
					alt: "krmx17"
				},
				{
					src: "/images/project/krmx18.jpg",
					alt: "krmx18"
				},
				{
					src: "/images/project/krmx19.jpg",
					alt: "krmx19"
				},
				{
					src: "/images/project/krmx20.jpg",
					alt: "krmx20"
				},
				{
					src: "/images/project/krmx21.jpg",
					alt: "krmx21"
				},
				{
					src: "/images/project/krmx22.jpg",
					alt: "krmx22"
				},
			]
    },
  },
	{
    title: "hivu",
		className: "hivu",
		type: "회사",
		boxColor: "var(--themaDark)",
		fontColor: "var(--whiteDE)",
		skillBoxColor: "var(--themaDeep)",
		skillFontColor: "var(--whiteDE)",
		badgeBoxColor: "var(--themaDeep)",
		badgeFontColor: "var(--whiteDE)",
		linkBoxColor: "var(--themaDeep)",
		linkFontColor: "var(--whiteDE)",
    techStack: {
      rows: [
        {
          title: "디바이스",
          items: ["적응형(PC/Mobile)"]
        },
        {
          title: "개발 언어",
          items: ["JavaScript", "PHP"]
        },
        {
          title: "라이브러리",
          items: ["Clipboard", "ApexCharts"]
        },
				{
          title: "기여도",
          items: ["디자인 30%", "퍼블리싱 30%"]
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
			title: "프로젝트 개요",
			body: [
				"hivu는 다양한 지역 기반 체험형 마케팅 캠페인을 제공하는 플랫폼으로, 기업과 인플루언서를 연결하여 실시간 리뷰, 참여형 이벤트, 지도 기반 검색, 리뷰 통계 등 다양한 기능을 제공합니다. 신규 캠페인과 추천 캠페인 등 마케팅 콘텐츠를 시각적으로 풍부하게 구성하였으며, 슈퍼리뷰어 전용 페이지와 사용자 커뮤니티가 포함되어 있습니다.",
			],
		},
		contribution: {
			title: "기여도",
			body: [
				"디자인 30%: 캠페인 및 메인 배너 등 상시 작업, 플랫폼 UI 요소 중 아이콘 리디자인, 슈페리어 크리에이터 페이지 디자인",
				"퍼블리싱 30%: HTML 구조 및 CSS 스타일링 일부 참여, 캠페인 뷰 및 메인 UI 마크업 일부 작업, Clipboard 위치 및 스타일링, ApexCharts 마크업 및 퍼블리싱 작업 등",
				"프론트 및 백엔드: 제외"
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/hivu1.jpg",
					alt: "hivu1"
				},
				{
					src: "/images/project/hivu2.jpg",
					alt: "hivu2"
				},
				{
					src: "/images/project/hivu3.jpg",
					alt: "hivu3"
				},
				{
					src: "/images/project/hivu4.jpg",
					alt: "hivu4"
				},
				{
					src: "/images/project/hivu5.jpg",
					alt: "hivu5"
				},
				{
					src: "/images/project/hivu6.jpg",
					alt: "hivu6"
				},
				{
					src: "/images/project/hivu7.jpg",
					alt: "hivu7"
				},
				{
					src: "/images/project/hivu8.jpg",
					alt: "hivu8"
				},
				{
					src: "/images/project/hivu9.jpg",
					alt: "hivu9"
				},
				{
					src: "/images/project/hivu10.jpg",
					alt: "hivu10"
				},
			]
    },
    links: {
      site: {
        href: "https://www.hivu.co.kr/index.php",
        text: "사이트"
      }
    }
  },
	{
    title: "엔아이 자사웹",
		className: "niweb",
		type: "회사",
		boxColor: "var(--thema)",
		fontColor: "var(--black)",
		skillBoxColor: "var(--whiteDE)",
		skillFontColor: "var(--black)",
		badgeBoxColor: "var(--whiteDE)",
		badgeFontColor: "var(--black)",
		linkBoxColor: "var(--whiteDE)",
		linkFontColor: "var(--black)",
    techStack: {
      rows: [
        {
          title: "디바이스",
          items: ["반응형"]
        },
				{
          title: "프레임워크",
          items: ["NextJS"]
        },
        {
          title: "개발 언어",
          items: ["TypeScript"]
        },
				{
          title: "API",
          items: ["KakaoMaps", "Channel Talk"]
        },
        {
          title: "라이브러리",
          items: ["AOS", "Swiper"]
        },
				{
          title: "기여도",
          items: ["디자인 100%", "프론트 100%"]
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
					src: "/images/skill/skill_tailwind.png",
					alt: "skill_tailwind",
					name: "Tailwind CSS"
				},
				{
					src: "/images/skill/skill_javascript.png",
					alt: "skill_javascript",
					name: "JavaScript"
				},
				{
					src: "/images/skill/skill_typescript.png",
					alt: "skill_typescript",
					name: "TypeScript"
				},
				{
					src: "/images/skill/skill_nextjs.png",
					alt: "skill_nextjs",
					name: "NextJS"
				},
			]
		},
    features: {
			title: "프로젝트 설명",
			body: [
				"엔아이 자사웹 사이트는 Next.js 기반으로 제작된 반응형 공식 웹사이트로 주식회사 엔아이의 브랜딩과 비전, 마케팅 역량을 소개하는 마케팅 중심의 기업 사이트입니다.",
			],
		},
		contribution: {
			title: "기여도",
			body: [
				"디자인 100%: 웹사이트 UI/UX 전체 디자인, 반응형 구조 설계, 스타일 가이드 적용 등",
				"프론트 100%: Next.js 구조 설계, Swiper 슬라이더, AOS 애니메이션, TailwindCSS 기반 반응형 구현, 카카오 지도 연동, Channel Talk 연동 등 모든 페이지 및 주요 인터랙션 구현",
				"배포 및 테스트 100%: Vercel 배포, 기기별 크로스브라우징 테스트 및 버그 수정 등",
				"백엔드 연동 제외: 이메일 전송 기능인 Nodemailer + MongoDB 연동은 타 개발자 담당",
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/niweb1.jpg",
					alt: "niweb1"
				},
				{
					src: "/images/project/niweb2.jpg",
					alt: "niweb2"
				},
				{
					src: "/images/project/niweb3.jpg",
					alt: "niweb3"
				},
				{
					src: "/images/project/niweb4.jpg",
					alt: "niweb4"
				},
				{
					src: "/images/project/niweb5.jpg",
					alt: "niweb5"
				},
				{
					src: "/images/project/niweb6.jpg",
					alt: "niweb6"
				},
			]
    },
    links: {
      site: {
        href: "https://www.nimarketing.co.kr/",
        text: "사이트"
      },
    }
  },
	{
    title: "TYCODE",
		className: "tycode",
		type: "개인",
		boxColor: "var(--black)",
		fontColor: "var(--whiteDE)",
		skillBoxColor: "var(--black333)",
		skillFontColor: "var(--whiteEB)",
		badgeBoxColor: "var(--black333)",
		badgeFontColor: "var(--whiteEB)",
		linkBoxColor: "var(--black333)",
		linkFontColor: "var(--whiteEB)",
    techStack: {
      rows: [
        {
          title: "디바이스",
          items: ["반응형"]
        },
				{
          title: "프레임워크",
          items: ["React"]
        },
        {
          title: "개발 언어",
          items: ["JavaScript"]
        },
        {
          title: "라이브러리",
          items: ["Firebase"]
        },
				{
          title: "기여도",
          items: ["전체 100%"]
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
					src: "/images/skill/skill_react.png",
					alt: "skill_react",
					name: "React"
				},
				{
					src: "/images/skill/skill_firebase.png",
					alt: "skill_firebase",
					name: "Firebase"
				},
			]
		},
    features: {
			title: "프로젝트 설명",
			body: [
				"TYCODE는 React 기반 SPA 포트폴리오 웹사이트로 다양한 애니메이션과 텍스트 키프레임 등 동적인 시각 효과를 활용하였고 자기소개, 프로젝트 기술 스택 및 아이콘을 시각적으로 표현한 프로젝트 페이지와 이메일 및 댓글 폼을 통한 콘텍트 페이지로 구성되어있어 역량을 확인하실 수 있습니다.",
				"SCSS 기반의 컴포넌트 스타일링, json 파일을 활용한 프로젝트 데이터 렌더링, 자체 구현한 프로젝트 상세 페이지 UI, Firestore 기반 댓글 폼 처리, 404 에러페이지를 포함한 SPA 구조, 반응형 UI 지원 등 다양한 기능을 갖춘 포트폴리오 웹사이트입니다.",
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/tycode1.jpg",
					alt: "tycode1"
				},
				{
					src: "/images/project/tycode2.jpg",
					alt: "tycode2"
				},
				{
					src: "/images/project/tycode3.jpg",
					alt: "tycode3"
				},
				{
					src: "/images/project/tycode4.jpg",
					alt: "tycode4"
				},
				{
					src: "/images/project/tycode5.jpg",
					alt: "tycode5"
				},
			]
    },
    links: {
      site: {
        href: "https://tycode-portfolio.web.app/",
        text: "사이트"
      },
      github: {
        href: "https://github.com/2taeyoon/TYCODE_portfolio_old",
        text: "깃허브"
      }
    }
  },
	{
    title: "MyDays",
		className: "mydays",
		type: "개인",
		boxColor: "var(--themaSub)",
		fontColor: "var(--black)",
		skillBoxColor: "var(--thema)",
		skillFontColor: "var(--black)",
		badgeBoxColor: "var(--thema)",
		badgeFontColor: "var(--black)",
		linkBoxColor: "var(--thema)",
		linkFontColor: "var(--black)",
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
          items: ["Firebase", "Service Worker"]
        },
        {
          title: "라이브러리",
          items: ["Swiper", "jQuery UI"]
        },
				{
          title: "기여도",
          items: ["전체 100%"]
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
			title: "프로젝트 설명",
			body: [
				"MyDays는 사용자가 중요한 날짜를 추적하고 관리할 수 있는 웹 애플리케이션입니다. 이 앱은 기념일, 생일, 나이 계산 등 다양한 날짜를 관리할 수 있는 기능을 제공합니다. 사용자는 날짜를 선택하고 디데이를 확인하며 이벤트를 추가하고 관리할 수 있습니다. Swiper 인터페이스로 원활한 네비게이션이 가능하며 Firebase를 사용하여 이메일로 가입하고 로그인할 수 있습니다.",
				"Firebase 기반의 시스템을 통해 관리자는 콘텐츠와 사용자 상호작용을 쉽게 관리할 수 있으며 다양한 디데이와 관련된 이벤트를 추가하고 관리할 수 있는 기능을 제공합니다. 또한, 날짜 기반 정보를 계산하여 사용자에게 시각적으로 제공함으로써 더 나은 개인화된 경험을 제공합니다. MyDays는 중요한 날짜를 효율적으로 관리하고 추적할 수 있는 도구로 실시간 데이터 갱신을 제공합니다.",
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/mydays1.jpg",
					alt: "mydays1"
				},
				{
					src: "/images/project/mydays2.jpg",
					alt: "mydays2"
				},
				{
					src: "/images/project/mydays3.jpg",
					alt: "mydays3"
				},
				{
					src: "/images/project/mydays4.jpg",
					alt: "mydays4"
				},
				{
					src: "/images/project/mydays5.jpg",
					alt: "mydays5"
				},
				{
					src: "/images/project/mydays6.jpg",
					alt: "mydays6"
				},
				{
					src: "/images/project/mydays7.jpg",
					alt: "mydays7"
				},
				{
					src: "/images/project/mydays8.jpg",
					alt: "mydays8"
				},
				{
					src: "/images/project/mydays9.jpg",
					alt: "mydays9"
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
		className: "yoondesign",
		type: "개인",
		boxColor: "var(--themaDark)",
		fontColor: "var(--whiteDE)",
		skillBoxColor: "var(--themaDeep)",
		skillFontColor: "var(--whiteDE)",
		badgeBoxColor: "var(--themaDeep)",
		badgeFontColor: "var(--whiteDE)",
		linkBoxColor: "var(--themaDeep)",
		linkFontColor: "var(--whiteDE)",
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
          items: ["전체 100%"]
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
			title: "프로젝트 설명명",
			body: [
				"YOONDESIGN은 자사 웹사이트 개발 프로젝트입니다. 해당 프로젝트에서는 웹사이트의 디자인과 기능을 구축하여 회사의 브랜드를 온라인에서 효과적으로 전달하고, 사용자 경험을 최적화하는 데 초점을 맞추었습니다.",
				"반응형 웹 디자인을 적용하여 다양한 기기에서 최적화된 사용자 경험을 제공합니다. 고정형 헤더와 푸터를 구현하여 직관적인 네비게이션을 제공하며 햄버거 메뉴와 드롭다운 메뉴로 모바일에서도 원활한 네비게이션을 지원합니다. 슬라이더를 메인 페이지에 추가하여 주요 비전과 이미지를 강조했습니다. AOS 애니메이션을 사용해 스크롤 시 시각적 효과를 추가하여 페이지의 동적 요소를 강화했습니다.",
			]
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/yoondesign1.jpg",
					alt: "screenshot1"
				},
				{
					src: "/images/project/yoondesign2.jpg",
					alt: "screenshot2"
				},
				{
					src: "/images/project/yoondesign3.jpg",
					alt: "screenshot3"
				},
				{
					src: "/images/project/yoondesign4.jpg",
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
		className: "netmarble",
		type: "개인",
		boxColor: "var(--thema)",
		fontColor: "var(--black)",
		skillBoxColor: "var(--whiteDE)",
		skillFontColor: "var(--black)",
		badgeBoxColor: "var(--whiteDE)",
		badgeFontColor: "var(--black)",
		linkBoxColor: "var(--whiteDE)",
		linkFontColor: "var(--black)",
    techStack: {
      rows: [
        {
          title: "디바이스",
          items: ["적응형(PC, Mobile)"]
        },
        {
          title: "개발 언어",
          items: ["JavaScript"]
        },
        {
          title: "라이브러리",
          items: ["Swiper"]
        },
				{
          title: "기여도",
          items: ["전체 100%"]
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
			title: "프로젝트 설명",
			body: [
				"netmarble 프로젝트는 클론 코딩 프로젝트로, 웹사이트의 특정 기능이나 디자인을 실제 사이트를 모델로 구현한 것입니다. 해당 프로젝트에서는 적응형 웹 디자인을 적용하여 PC와 모바일 기기에서 최적화가 되어있습니다. 웹사이트의 헤더 및 네비게이션 바는 모바일 및 데스크탑 화면에서 모두 적절하게 표시되며, 서브 메뉴와 언어 선택 기능을 포함한 상단 메뉴를 구현했습니다.",
				"슬라이더 기능을 메인 페이지에 추가하여 시각적으로 매력적인 콘텐츠를 제공합니다. 각 슬라이드는 이미지와 텍스트가 포함되어 있으며 버튼을 클릭하거나 슬라이드 박스를 통해 콘텐츠를 탐색할 수 있습니다. 상세 페이지에서는 서비스 목록을 제공하며 각 게임과 관련된 정보는 아이콘과 텍스트로 정리되어 있습니다."
			]
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project/netmarble1.jpg",
					alt: "screenshot1"
				},
				{
					src: "/images/project/netmarble2.jpg",
					alt: "screenshot2"
				},
				{
					src: "/images/project/netmarble3.jpg",
					alt: "screenshot3"
				},
				{
					src: "/images/project/netmarble4.jpg",
					alt: "screenshot4"
				},
				{
					src: "/images/project/netmarble5.jpg",
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