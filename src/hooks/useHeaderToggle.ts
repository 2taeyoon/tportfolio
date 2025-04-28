import { useCallback } from 'react';

export function useHeaderToggle() {
	const toggleClick = useCallback(() => {
		const navWrap = document.querySelector('.nav_wrap');
		if (!navWrap) return;

		if (navWrap.classList.contains('click')) {
			navWrap.classList.remove('click');
		} else {
			navWrap.classList.add('click');
		}
	}, []);

	const removeClick = useCallback(() => {
		const navWrap = document.querySelector('.nav_wrap');
		if (!navWrap) return;

		navWrap.classList.remove('click');
	}, []);

	return {
		toggleClick,
		removeClick,
	};
}