import { CSSProperties } from "react";

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

export interface UseDashAnimationProps {
	delay?: number;        // 애니메이션 시작 전 대기 시간 (기본값 2000ms)
	duration?: number;     // 애니메이션 실행 시간 (기본값 2000ms)
	intervalTime?: number; // 업데이트 간격 (기본값 20ms)
	startValue?: number;   // startValue 초기 dashArray 값은 stroke-dasharray 값 확인해보고 결정 (기본값 20)
	intervalCount?: number; // 원하는 dashArray 값만큼 감소 (기본값 0)
}