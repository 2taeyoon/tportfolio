'use client';

import { useParams } from 'next/navigation';

const DpContents = () => {
	const params = useParams(); // URL에서 동적 파라미터 추출
  const title = params.title || '없음'; // title 추출 (경로가 없으면 '없음')

  return (
    <div>
      <h1>디자인인 상세 페이지</h1>
			<p>현재 URL: {title}</p>
    </div>
  );
};

export default DpContents;
