export function characterTextSplit(text: string, className: string = "") {
  return text.split("").map((char, index) => (
    <span key={index} className={className}>
      {char}
    </span>
  ));
}

export function spaceTextSplit(text: string, className: string = "") {
  return text.split(" ").map((word, index) => (
    <span key={index} className={className}>
			{`${word} `}
		</span>
  ));
}