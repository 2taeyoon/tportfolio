import IntroduceList from "@/components/profile/list/IntroduceList";
import ProfileCard from "@/components/profile/ProfileCard";

export default function ProfileIntroduction() {
	return (
		<div className="introduce_wrap pd_box">
			<IntroduceList/>
			<ProfileCard/>
		</div>
	)
}