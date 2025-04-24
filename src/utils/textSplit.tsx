export function characterTextSplit(text: string, className: string = "") {
  return text.split("").map((char, index) => (
    <span key={index} className={className} style={{ display: 'inline-block', width: char === ' ' ? '8rem' : 'auto' }}>
      {char}
    </span>
  ));
}

export function spaceTextSplit(text: string, className?: string) {
  const words = text.split(" ");
  return words.flatMap((word, index) => [
    <span key={`word_${index}`} className={className}>
      {word}
    </span>,
    index !== words.length - 1 && " ", // 마지막 단어 뒤엔 공백 안 넣음
  ]);
}