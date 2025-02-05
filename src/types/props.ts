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
}

export interface BgSmallCompassProps {
  rotation: number;
}

export interface BgBigCompassProps {
  gMatrix: Matrix;
	circleMatrix: Matrix;
}

export interface SlotMachineTextProps {
	firstText: string;
	secondText: string;
	IterationCount: number;
	RunningInterval: number;
}