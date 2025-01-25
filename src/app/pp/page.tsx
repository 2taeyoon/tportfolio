'use client';

import { useRouter } from 'next/navigation';

const Pp = () => {
	const router = useRouter()
	const handleNavigation = () => {
		router.push('/pp/title'); // /pp/title 로 이동
	};

	return (
		<div>
			<h1>디자인 페이지</h1>
			<button onClick={handleNavigation}>상세로</button>
		</div>
	);
}

export default Pp;