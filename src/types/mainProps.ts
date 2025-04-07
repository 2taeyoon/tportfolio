import { RefObject, CSSProperties } from "react";

export interface Matrix {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}

export interface Matrix {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}

export interface GsabRefProps {
  firstTextRefs?: RefObject<(HTMLDivElement | null)[]>;
  secondTextRefs?: RefObject<(HTMLDivElement | null)[]>;
  textRef?: RefObject<(HTMLDivElement | null)[]>;
}

export interface GridColumnProps {
  gap: string;
  paddingTop: string;
  listConfig: number[];
  mainScrollRef: React.RefObject<HTMLDivElement | null>;
}

export interface GridProps {
  gridColumns: GridColumnProps[];
}

export interface TypewriterEffectProps {
  text?: string;
  textAlign?: CSSProperties["textAlign"];
  delay?: number;
}