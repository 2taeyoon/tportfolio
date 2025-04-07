export type SquareGridProps = {
	count?: number; // 기본값: 12줄
  direction: "horizontal" | "vertical";
};

export interface SlotMachineTextProps {
	firstText: string;
	secondText: string;
	IterationCount: number;
	RunningInterval: number;
	delay: number;
}