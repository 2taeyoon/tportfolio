'use client';

import SlotMachineText from "@/components/ui/SlotMachineText";
import BgBigCompass from "./BgBigCompass";
import BgSmallCompass from "./BgSmallCompass";
import useMouseEffect from "@/hooks/useMouseEffect";

export default function BgElem() {
	const { gMatrix, circleMatrix, rotation, handleMouseMove } = useMouseEffect();

	return (
		<div className="bg_elem" onMouseMove={handleMouseMove}>
			<div className="slot_machine_text">
				<SlotMachineText/>
			</div>
			<div className="bg_big_compass">
				<BgBigCompass gMatrix={gMatrix} circleMatrix={circleMatrix}/>
			</div>
			<div className="bg_small_compass">
				<BgSmallCompass rotation={rotation}/>
				<BgSmallCompass rotation={rotation}/>
			</div>
			<div className="bg_noise"></div>
	</div>
	)
}
