import { RefObject, CSSProperties } from "react";

export interface Matrix {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}

export interface UseDashAnimationProps {
	delay?: number;        // 애니메이션 시작 전 대기 시간 (기본값 2000ms)
	duration?: number;     // 애니메이션 실행 시간 (기본값 2000ms)
	intervalTime?: number; // 업데이트 간격 (기본값 20ms)
	startValue?: number;   // startValue 초기 dashArray 값은 stroke-dasharray 값 확인해보고 결정 (기본값 20)
	intervalCount?: number; // 원하는 dashArray 값만큼 감소 (기본값 0)
}

export interface SlotMachineTextProps {
	firstText: string;
	secondText: string;
	IterationCount: number;
	RunningInterval: number;
	delay: number;
}

export interface GsabRefProps {
  firstTextRefs?: RefObject<(HTMLDivElement | null)[]>;
  secondTextRefs?: RefObject<(HTMLDivElement | null)[]>;
	textRef?: RefObject<(HTMLDivElement | null)[]>;
}

export interface GridColumnProps {
  gap: string; // 컬럼 간 간격 rem으로 정의
  paddingTop: string; // 상단 여백 rem으로 정의
  listConfig: number[]; // 각 grid_list 안에 몇 개의 grid_item을 넣을지 결정(ex: [3, 4] → 첫 번째 grid_list에 3개 두 번째 grid_list에 4개
	mainScrollRef: React.RefObject<HTMLDivElement | null>;
}

export interface GridProps {
  gridColumns: GridColumnProps[];
}

export interface TypewriterEffectProps {
  text?: string;
  textAlign?: CSSProperties["textAlign"]; // ✅ 올바른 타입 지정
	delay?: number;
}

export type SquareGridProps = {
	count?: number; // 기본값: 12줄
  direction: "horizontal" | "vertical";
	horRefs?: RefObject<(HTMLDivElement | null)[]>;
	verRefs?: RefObject<(HTMLDivElement | null)[]>;
};

export interface ExperienceItemProps {
  title: string;
	extra?: string;
  items: {
    subTitle: string;
    body: string;
    meta: {
      first?: string;
      second?: string;
      third?: string;
    };
  }[];
	translate: {
		x: string;
		y: string;
	}
}