import IntroduceList from "../list/IntroduceList";
import ProfileCard from "@/components/ui/ProfileCard";

export default function ProfileIntroduction() {
	return (
		<div className="introduce_wrap pd_box">
			<IntroduceList/>
			<ProfileCard/>
		</div>
	)
}