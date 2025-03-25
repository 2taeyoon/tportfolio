export default function QuotesSvg({className}: {className?: string}) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 41 37" className={`quotes_svg ${className}`}>
			<path style={{ transition: 'stroke .3s' }} className="quotes_svg_path" stroke="var(--themaDark)" strokeWidth="1" d="M30.597 17.923h-7.914V.5H40.5v19.47c0 5.31-1.683 9.42-4.769 12.208-3.005 2.716-7.404 4.234-13.048 4.318v-7.828c2.67-.083 4.753-.84 6.185-2.289 1.52-1.538 2.229-3.775 2.229-6.563v-1.893h-.5Zm-22.183 0H.5V.5h17.817v19.47c0 5.31-1.683 9.42-4.769 12.208C10.543 34.894 6.144 36.412.5 36.496v-7.828c2.671-.083 4.753-.84 6.185-2.289 1.52-1.538 2.23-3.775 2.23-6.563v-1.893h-.5Z"></path>
		</svg>
	)
}