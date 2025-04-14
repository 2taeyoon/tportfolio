import React from 'react';

export interface TextSplitWrapProps {
  text: string;
  className?: string;
  splitFunction: (text: string, className?: string) => React.ReactNode[];
}

export default function TextSplitWrap({ text, className, splitFunction }: TextSplitWrapProps) {
  const splitText = splitFunction(text, 'char');

  return (
    <div className={className}>
      {splitText.map((char, index) => (
        <div key={index} style={{ overflow: 'hidden' }}>
          {char}
        </div>
      ))}
    </div>
  );
} 