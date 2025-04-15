import React from 'react';

export interface TextSplitWrapProps {
  text: string;
  className?: string;
	wrap?: boolean;
  splitFunction: (text: string, className?: string) => React.ReactNode[];
}

export default function TextSplitWrap({ text, className, wrap = false, splitFunction }: TextSplitWrapProps) {
  const splitText = splitFunction(text, 'char');

	if(wrap){
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

  return (
		<div className={className}>
			{splitText.map(char => char )}
		</div>
  );
} 