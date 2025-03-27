export function characterTextSplit(text: string, className: string = "") {
  return text.split("").map((char, index) => (
    <span key={index} className={className} style={{ display: 'inline-block' }}>
      {char}
    </span>
  ));
}

export function spaceTextSplit(text: string, className: string = "") {
  return text.split(" ").map((word, index) => (
    <span key={index} className={className} style={{ display: 'inline-block' }}>
			{`${word} `}
		</span>
  ));
}