'use client'

import React from 'react'
import { spaceTextSplit } from '@/util/textSplit' // 📌 spaceTextSplit 함수 import

export default function MySkillBody (){
	const title = `MY SKILL`;
  const body = `시맨틱 태그를 활용한 구조적인 마크업 작성에 능숙하며 CSS(SCSS, Tailwind CSS)를 통해 반응형 웹, 애니메이션, 일관된 디자인 시스템을 구현할 수 있습니다. JavaScript와 TypeScript를 활용한 동적 UI 및 사용자 인터랙션 구현이 가능하며 React와 Next.js 기반의 컴포넌트 중심 개발과 SSR/SSG 최적화 경험을 갖추고 있습니다. Webpack을 통한 빌드 환경을 구성할 수 있으며 Git과 GitHub을 활용한 협업에도 익숙합니다. Firebase 및 Supabase를 통한 백엔드 연동도 경험해 보았습니다. Photoshop, Illustrator로 시각적 콘텐츠를 제작할 수 있으며 Markdown으로 Notion 문서 및 콘텐츠 작성도 가능합니다.`;

	const titleSplitText = spaceTextSplit(title, 'char');
	const bodySplitText = spaceTextSplit(body, 'char');

  return (
		<>
			<div className="my_skill_title">
				{titleSplitText.map((word, index) => (
					<div key={index} style={{ overflow: 'hidden' }}>
						{word}
					</div>
				))}
			</div>
			<div className="my_skill_body">
				{bodySplitText.map((word, index) => (
					<div key={index} style={{ overflow: 'hidden', lineHeight: '180%' }}>
						{word}
					</div>
				))}
			</div>
		</>
  )
}