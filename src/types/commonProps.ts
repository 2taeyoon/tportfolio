import { RefObject } from "react";

export interface GsabRefProps {
	firstTextRefs?: RefObject<(HTMLDivElement | null)[]>;
	secondTextRefs?: RefObject<(HTMLDivElement | null)[]>;
	textRef?: RefObject<(HTMLDivElement | null)[]>;
}

export interface ScrollRefProps {
	mainScrollRef?: React.RefObject<HTMLDivElement | null>;
	profileScrollRef?: React.RefObject<HTMLDivElement | null>;
	skillScrollRef?: React.RefObject<HTMLDivElement | null>;
  projectScrollRef?: React.RefObject<HTMLDivElement | null>;
	footerScrollRef?: React.RefObject<HTMLDivElement | null>;
}