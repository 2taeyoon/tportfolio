import { CodeCardDataType, DesignCardDataType } from "@/types/projectProps";

// project code 데이터 배열 START!!
export const projectCodeData: CodeCardDataType[] = [
	{
    title: "TY Portfolio",
		date: "2025년 4월",
		className: "typortfolio",
		type: "개인",
		boxColor: "var(--thema)",
		fontColor: "var(--black)",
		skillBoxColor: "var(--whiteD)",
		skillFontColor: "var(--black)",
		badgeBoxColor: "var(--whiteD)",
		badgeFontColor: "var(--black)",
		linkBoxColor: "var(--whiteD)",
		linkFontColor: "var(--black)",
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
				"TY Portfolio 프로젝트는 NextJS 기반의 반응형 SPA 포트폴리오 웹사이트로, 자기소개, 기술 스택, 프로젝트, 경험 등 개발자의 역량을 시각적으로 표현하기 위해 제작되었습니다.",
				"다양한 애니메이션 효과(스크롤 트리거, 텍스트 타이핑, 키프레임 효과 등)와 함께, SVG 일러스트 및 커스텀 레이아웃 구성요소(Wave, RadialGradient, ShapeQuote 등)를 통해 감각적인 사용자 경험을 제공합니다. 또한 JSON 기반의 데이터 구조를 활용하여 프로젝트 및 기술 스택 정보를 자동 렌더링하여 유지보수에 용이하도록 하였습니다.",
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project_code/niweb1.jpg",
					alt: "niweb1"
				},
			]
    },
    links: {
      site: {
        href: "https://typortfolio.vercel.app/",
        text: "사이트"
      },
      github: {
        href: "https://github.com/2taeyoon/typortfolio",
        text: "깃허브"
      }
    }
  },
	{
    title: "2taeyoon",
		date: "2024년 6월",
		className: "taeyoon",
		type: "개인",
		boxColor: "var(--black)",
		fontColor: "var(--whiteD)",
		skillBoxColor: "var(--black333)",
		skillFontColor: "var(--whiteE)",
		badgeBoxColor: "var(--black333)",
		badgeFontColor: "var(--whiteE)",
		linkBoxColor: "var(--black333)",
		linkFontColor: "var(--whiteE)",
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
				{
					src: "/images/skill/skill_markdown.png",
					alt: "skill_markdown",
					name: "Markdown"
				},
			]
		},
    features: {
			title: "프로젝트 설명",
			body: [
				"2taeyoon은 퍼블리셔 및 프론트엔드 개발자로서의 학습 및 프로젝트 결과물을 아카이빙한 개인 포트폴리오 웹사이트로 디자인 스터디, 퍼블리싱 스터디, 기타 기술 정리 등 실전 기반의 실습 내용과 프로젝트 사례를 분류해 보여주는 콘텐츠 중심형의 사이트입니다.",
				"App Router 기반으로 /ds, /ps, /es 경로별 스터디 구분과 JSON 기반 콘텐츠 자동 로딩, 디자인 중심의 Markdown 구성, 카드형 리스트 및 페이지네이션, SVG 기반 기술 스택 시각화, 통일된 Markdown 스타일링 적용을 구현한 프로젝트입니다.",
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project_code/2taeyoon1.jpg",
					alt: "2taeyoon1"
				},
				{
					src: "/images/project_code/2taeyoon2.jpg",
					alt: "2taeyoon2"
				},
				{
					src: "/images/project_code/2taeyoon3.jpg",
					alt: "2taeyoon3"
				},
				{
					src: "/images/project_code/2taeyoon4.jpg",
					alt: "2taeyoon4"
				},
			]
    },
    links: {
      site: {
        href: "https://www.2taeyoon.com/",
        text: "사이트"
      },
      github: {
        href: "https://github.com/2taeyoon/tyblog",
        text: "깃허브"
      }
    }
  },
	{
    title: "KRMX",
		date: "2024년 3월",
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
				"KRMX는 골프장 회원권 매매 중개 전문 플랫폼으로, 회원권 시세 정보 제공, 매매 등록 및 관리, 관심 리스트, 1:1 문의 기능 등 거래 중심 기능과 함께 회원가입부터 탈퇴까지의 전반적인 회원 프로세스를 포함한 기업형 B2C 웹서비스입니다. NextJS 기반으로 설계된 이 프로젝트는 관리자 없이 사용자가 직접 회원권을 등록하고 매매할 수 있는 구조로, 직관적인 UI/UX와 실시간 시세 차트, 단계별 거래 절차 안내 등을 제공합니다.",
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
					src: "/images/project_code/krmx1.jpg",
					alt: "krmx1"
				},
				{
					src: "/images/project_code/krmx2.jpg",
					alt: "krmx2"
				},
				{
					src: "/images/project_code/krmx3.jpg",
					alt: "krmx3"
				},
				{
					src: "/images/project_code/krmx4.jpg",
					alt: "krmx4"
				},
				{
					src: "/images/project_code/krmx5.jpg",
					alt: "krmx5"
				},
				{
					src: "/images/project_code/krmx6.jpg",
					alt: "krmx6"
				},
				{
					src: "/images/project_code/krmx7.jpg",
					alt: "krmx7"
				},
				{
					src: "/images/project_code/krmx8.jpg",
					alt: "krmx8"
				},
				{
					src: "/images/project_code/krmx9.jpg",
					alt: "krmx9"
				},
				{
					src: "/images/project_code/krmx10.jpg",
					alt: "krmx10"
				},
				{
					src: "/images/project_code/krmx11.jpg",
					alt: "krmx11"
				},
				{
					src: "/images/project_code/krmx12.jpg",
					alt: "krmx12"
				},
				{
					src: "/images/project_code/krmx13.jpg",
					alt: "krmx13"
				},
				{
					src: "/images/project_code/krmx14.jpg",
					alt: "krmx14"
				},
				{
					src: "/images/project_code/krmx15.jpg",
					alt: "krmx15"
				},
				{
					src: "/images/project_code/krmx16.jpg",
					alt: "krmx16"
				},
				{
					src: "/images/project_code/krmx17.jpg",
					alt: "krmx17"
				},
				{
					src: "/images/project_code/krmx18.jpg",
					alt: "krmx18"
				},
				{
					src: "/images/project_code/krmx19.jpg",
					alt: "krmx19"
				},
				{
					src: "/images/project_code/krmx20.jpg",
					alt: "krmx20"
				},
				{
					src: "/images/project_code/krmx21.jpg",
					alt: "krmx21"
				},
				{
					src: "/images/project_code/krmx22.jpg",
					alt: "krmx22"
				},
			]
    },
  },
	{
    title: "엔아이 자사웹",
		date: "2023년 11월",
		className: "niweb",
		type: "회사",
		boxColor: "var(--themaDark)",
		fontColor: "var(--whiteD)",
		skillBoxColor: "var(--themaDeep)",
		skillFontColor: "var(--whiteD)",
		badgeBoxColor: "var(--themaDeep)",
		badgeFontColor: "var(--whiteD)",
		linkBoxColor: "var(--themaDeep)",
		linkFontColor: "var(--whiteD)",
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
				"엔아이 자사웹 사이트는 NextJS 기반으로 제작된 반응형 공식 웹사이트로 주식회사 엔아이의 브랜딩과 비전, 마케팅 역량을 소개하는 마케팅 중심의 기업 사이트입니다.",
			],
		},
		contribution: {
			title: "기여도",
			body: [
				"디자인 100%: 웹사이트 UI/UX 전체 디자인, 반응형 구조 설계, 스타일 가이드 적용 등",
				"프론트 100%: NextJS 구조 설계, Swiper 슬라이더, AOS 애니메이션, TailwindCSS 기반 반응형 구현, 카카오 지도 연동, Channel Talk 연동 등 모든 페이지 및 주요 인터랙션 구현",
				"배포 및 테스트 100%: Vercel 배포, 기기별 크로스브라우징 테스트 및 버그 수정 등",
				"백엔드 연동 제외: 이메일 전송 기능인 Nodemailer + MongoDB 연동은 타 개발자 담당",
			],
		},
    screenshots: {
			title: "스크린샷",
			images: [
				{
					src: "/images/project_code/niweb1.jpg",
					alt: "niweb1"
				},
				{
					src: "/images/project_code/niweb2.jpg",
					alt: "niweb2"
				},
				{
					src: "/images/project_code/niweb3.jpg",
					alt: "niweb3"
				},
				{
					src: "/images/project_code/niweb4.jpg",
					alt: "niweb4"
				},
				{
					src: "/images/project_code/niweb5.jpg",
					alt: "niweb5"
				},
				{
					src: "/images/project_code/niweb6.jpg",
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
    title: "hivu",
		date: "2023년 10월",
		className: "hivu",
		type: "회사",
		boxColor: "var(--thema)",
		fontColor: "var(--black)",
		skillBoxColor: "var(--whiteD)",
		skillFontColor: "var(--black)",
		badgeBoxColor: "var(--whiteD)",
		badgeFontColor: "var(--black)",
		linkBoxColor: "var(--whiteD)",
		linkFontColor: "var(--black)",
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
					src: "/images/project_code/hivu1.jpg",
					alt: "hivu1"
				},
				{
					src: "/images/project_code/hivu2.jpg",
					alt: "hivu2"
				},
				{
					src: "/images/project_code/hivu3.jpg",
					alt: "hivu3"
				},
				{
					src: "/images/project_code/hivu4.jpg",
					alt: "hivu4"
				},
				{
					src: "/images/project_code/hivu5.jpg",
					alt: "hivu5"
				},
				{
					src: "/images/project_code/hivu6.jpg",
					alt: "hivu6"
				},
				{
					src: "/images/project_code/hivu7.jpg",
					alt: "hivu7"
				},
				{
					src: "/images/project_code/hivu8.jpg",
					alt: "hivu8"
				},
				{
					src: "/images/project_code/hivu9.jpg",
					alt: "hivu9"
				},
				{
					src: "/images/project_code/hivu10.jpg",
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
    title: "TYCODE",
		date: "2023년 7월",
		className: "tycode",
		type: "개인",
		boxColor: "var(--black)",
		fontColor: "var(--whiteD)",
		skillBoxColor: "var(--black333)",
		skillFontColor: "var(--whiteE)",
		badgeBoxColor: "var(--black333)",
		badgeFontColor: "var(--whiteE)",
		linkBoxColor: "var(--black333)",
		linkFontColor: "var(--whiteE)",
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
					src: "/images/project_code/tycode1.jpg",
					alt: "tycode1"
				},
				{
					src: "/images/project_code/tycode2.jpg",
					alt: "tycode2"
				},
				{
					src: "/images/project_code/tycode3.jpg",
					alt: "tycode3"
				},
				{
					src: "/images/project_code/tycode4.jpg",
					alt: "tycode4"
				},
				{
					src: "/images/project_code/tycode5.jpg",
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
		date: "2025년 6월",
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
					src: "/images/project_code/mydays1.jpg",
					alt: "mydays1"
				},
				{
					src: "/images/project_code/mydays2.jpg",
					alt: "mydays2"
				},
				{
					src: "/images/project_code/mydays3.jpg",
					alt: "mydays3"
				},
				{
					src: "/images/project_code/mydays4.jpg",
					alt: "mydays4"
				},
				{
					src: "/images/project_code/mydays5.jpg",
					alt: "mydays5"
				},
				{
					src: "/images/project_code/mydays6.jpg",
					alt: "mydays6"
				},
				{
					src: "/images/project_code/mydays7.jpg",
					alt: "mydays7"
				},
				{
					src: "/images/project_code/mydays8.jpg",
					alt: "mydays8"
				},
				{
					src: "/images/project_code/mydays9.jpg",
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
		date: "2023년 5월",
		className: "yoondesign",
		type: "개인",
		boxColor: "var(--themaDark)",
		fontColor: "var(--whiteD)",
		skillBoxColor: "var(--themaDeep)",
		skillFontColor: "var(--whiteDE)",
		badgeBoxColor: "var(--themaDeep)",
		badgeFontColor: "var(--whiteD)",
		linkBoxColor: "var(--themaDeep)",
		linkFontColor: "var(--whiteD)",
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
					src: "/images/project_code/yoondesign1.jpg",
					alt: "screenshot1"
				},
				{
					src: "/images/project_code/yoondesign2.jpg",
					alt: "screenshot2"
				},
				{
					src: "/images/project_code/yoondesign3.jpg",
					alt: "screenshot3"
				},
				{
					src: "/images/project_code/yoondesign4.jpg",
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
		date: "2023년 3월",
		className: "netmarble",
		type: "개인",
		boxColor: "var(--thema)",
		fontColor: "var(--black)",
		skillBoxColor: "var(--whiteD)",
		skillFontColor: "var(--black)",
		badgeBoxColor: "var(--whiteD)",
		badgeFontColor: "var(--black)",
		linkBoxColor: "var(--whiteD)",
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
					src: "/images/project_code/netmarble1.jpg",
					alt: "screenshot1"
				},
				{
					src: "/images/project_code/netmarble2.jpg",
					alt: "screenshot2"
				},
				{
					src: "/images/project_code/netmarble3.jpg",
					alt: "screenshot3"
				},
				{
					src: "/images/project_code/netmarble4.jpg",
					alt: "screenshot4"
				},
				{
					src: "/images/project_code/netmarble5.jpg",
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
// project code 데이터 배열 END!!


// project design 데이터 배열 START!!
export const projectDesignData: DesignCardDataType[] = [
	{
    thumbnail: "/images/project_design/niweb_thumbnail.jpg",
    date: "2023.11",
    type: "회사",
		contribution: "전체 100%",
		title: "엔아이 자사웹 웹페이지 디자인",
    description: "엔아이 홈페이지 디자인은 광고 회사의 중요점 중 하나인 '신뢰'를 바탕으로 파란색 계열의 시각적 통일과 요소의 일관성을 중심으로 디자인하였다. 이어서 브랜드의 통일성을 유지하고 직관적이며 깔끔한 레이아웃으로 사용자가 쉽게 탐색할 수 있는 디자인에 초첨을 맞췄다.",
		images: [
			{
				src: "/images/project_design/niweb1.jpg",
				alt: "niweb1"
			},
			{
				src: "/images/project_design/niweb2.jpg",
				alt: "niweb2"
			},
			{
				src: "/images/project_design/niweb3.jpg",
				alt: "niweb3"
			},
			{
				src: "/images/project_design/niweb4.jpg",
				alt: "niweb4"
			},
			{
				src: "/images/project_design/niweb5.webp",
				alt: "niweb5"
			},
			{
				src: "/images/project_design/niweb6.jpg",
				alt: "niweb6"
			},
			{
				src: "/images/project_design/niweb7.jpg",
				alt: "niweb7"
			},
			{
				src: "/images/project_design/niweb8.webp",
				alt: "niweb8"
			},
			{
				src: "/images/project_design/niweb9.jpg",
				alt: "niweb9"
			},
			{
				src: "/images/project_design/niweb10.jpg",
				alt: "niweb10"
			},
		],
  },
	{
    thumbnail: "/images/project_design/hivu_thumbnail.jpg",
    date: "2023.10",
    type: "회사",
		contribution: "디자인 30%",
		title: "하이뷰 웹사이트 리디자인",
    description: "hivu 웹사이트의 문제점을 분석하여 hivu만의 브랜드 일관성을 고려한 디자인으로 진행하였다. 주어진 레이아웃에 맞추어 웹사이트의 일관성과 시각적 매력을 개선하여 브랜드 일관성을 확보하는 것에 중점을 두었다. 아이디어 구상 단계에서 'hivu'만의 컬러로 현대적인 느낌을 가미하기 위해서, 간단한 3D 디자인과 실사 이미지를 활용하여 통일성을 주기 위한 디자인을 진행하였다.",
		images: [
			{
				src: "/images/project_design/hivu1.jpg",
				alt: "hivu1"
			},
			{
				src: "/images/project_design/hivu2.jpg",
				alt: "hivu2"
			},
			{
				src: "/images/project_design/hivu3.jpg",
				alt: "hivu3"
			},
			{
				src: "/images/project_design/hivu4.jpg",
				alt: "hivu4"
			},
			{
				src: "/images/project_design/hivu5.jpg",
				alt: "hivu5"
			},
		],
  },
	{
    thumbnail: "/images/project_design/cheonghada_thumbnail.jpg",
    date: "2023.01",
    type: "개인",
		contribution: "전체 100%",
    title: "청하다 브랜드 디자인",
    description: "'청하다' 브랜드는 자연 친화적 청량감을 전달하기 위한 이미지를 담은 디자인으로 고객에게 웰빙의 이미지를 전달해준다. 해당 과일 음료 브랜드는 전통과 현대가 어우러진 로고와 패키징 디자인을 통해 자연의 맛과 가치를 전달하며, 생생한 색상의 선택으로 제품의 신선함을 강조한다. '청하다'는 일상 속 작은 변화를 통해 삶에 활력을 불어넣는 브랜드가 되고자 한다.",
		images: [
			{
				src: "/images/project_design/cheonghada1.jpg",
				alt: "cheonghada1"
			},
			{
				src: "/images/project_design/cheonghada2.jpg",
				alt: "cheonghada2"
			},
			{
				src: "/images/project_design/cheonghada3.jpg",
				alt: "cheonghada3"
			},
			{
				src: "/images/project_design/cheonghada4.jpg",
				alt: "cheonghada4"
			},
			{
				src: "/images/project_design/cheonghada5.jpg",
				alt: "cheonghada5"
			},
			{
				src: "/images/project_design/cheonghada6.jpg",
				alt: "cheonghada6"
			},
		],
  },
	{
    thumbnail: "/images/project_design/wayfinding_thumbnail.jpg",
    date: "2022.09",
    type: "개인",
		contribution: "전체 100%",
    title: "Airport wayfinding iconography",
    description: "웨이파인딩 아이코노그라피란, 물리적인 공간에서 아이콘으로 스스로 위치를 찾고 한 장소에서 다른 장소로 이동하는 방법을 말한다. 따라서 공항 아이콘의 정체성과 방향성을 가장 명확하게 표현하는 것을 중점으로 하여 점진적 성장을 은유적으로 나타내는 '점선'이라는 조형적 요소를 전체 아이콘에 대입하여 반영하였다.",
		images: [
			{
				src: "/images/project_design/wayfinding1.jpg",
				alt: "wayfinding1"
			},
			{
				src: "/images/project_design/wayfinding2.jpg",
				alt: "wayfinding2"
			},
			{
				src: "/images/project_design/wayfinding3.webp",
				alt: "wayfinding3"
			},
			{
				src: "/images/project_design/wayfinding4.jpg",
				alt: "wayfinding4"
			},
			{
				src: "/images/project_design/wayfinding5.jpg",
				alt: "wayfinding5"
			},
			{
				src: "/images/project_design/wayfinding6.jpg",
				alt: "wayfinding6"
			},
			{
				src: "/images/project_design/wayfinding7.jpg",
				alt: "wayfinding7"
			},
			{
				src: "/images/project_design/wayfinding8.jpg",
				alt: "wayfinding8"
			},
			{
				src: "/images/project_design/wayfinding9.jpg",
				alt: "wayfinding9"
			},
		],
  },
	{
    thumbnail: "/images/project_design/medical_thumbnail.jpg",
    date: "2022.06",
    type: "개인",
		contribution: "디자인 100%",
		research: "자료조사 50%",
    title: "의료 기구의 두 얼굴",
    description: "일생을 살아가며 병원에서 검진받을 일은 무수히 많다. 하지만 무분별한 의료 검사로 의료 기구 사용량이 매년 증가함에 따라 우리는 의료 기구에 의한 방사선 피폭을 피할 수 없는 상황에 직면하게 되었다.",
		images: [
			{
				src: "/images/project_design/medical1.jpg",
				alt: "medical1"
			},
			{
				src: "/images/project_design/medical2.jpg",
				alt: "medical2"
			},
			{
				src: "/images/project_design/medical3.jpg",
				alt: "medical3"
			},
			{
				src: "/images/project_design/medical4.jpg",
				alt: "medical4"
			},
			{
				src: "/images/project_design/medical5.jpg",
				alt: "medical5"
			},
			{
				src: "/images/project_design/medical6.jpg",
				alt: "medical6"
			},
			{
				src: "/images/project_design/medical7.jpg",
				alt: "medical7"
			},
			{
				src: "/images/project_design/medical8.jpg",
				alt: "medical8"
			}
		],
  },
  {
    thumbnail: "/images/project_design/swiss_style_thumbnail.jpg",
    date: "2021.06",
    type: "개인",
		contribution: "디자인 100%",
    title: "Swiss modernism poster",
    description: "스위스 모더니즘은 명확성, 가독성의 질서 및 보편적으로 이해되는 시각적 언어라고 불린다. 이는 깨끗하고 장식이 없는, 불필요한 것을 제거하고 필요한 것만 강조하는 미니멀리즘을 선호한 디자인 스타일이다. 해당 작품에서는 스위스 모더니즘의 틀을 유지하며 포스터를 현대적으로 리디자인하였다.",
		images: [
			{
				src: "/images/project_design/swiss_style1.jpg",
				alt: "swiss_style1"
			},
			{
				src: "/images/project_design/swiss_style2.jpg",
				alt: "swiss_style2"
			},
			{
				src: "/images/project_design/swiss_style3.jpg",
				alt: "swiss_style3"
			},
			{
				src: "/images/project_design/swiss_style4.jpg",
				alt: "swiss_style4"
			},
			{
				src: "/images/project_design/swiss_style5.jpg",
				alt: "swiss_style5"
			},
		],
  },
];
// project design 데이터 배열 END!!