import { SquareGridProps } from "@/types/props";

export default function SquareGrid({ direction, count = 12 }: SquareGridProps) {
  const lines = Array.from({ length: count });

  return (
    <div className={`square_grid ${direction === "horizontal" ? "horizontal" : "vertical"}`}>
      {lines.map((_, index) => (
        <div key={index} className={ direction === "horizontal" ? "line_horizontal" : "line_vertical" }></div>
      ))}
    </div>
  );
}
