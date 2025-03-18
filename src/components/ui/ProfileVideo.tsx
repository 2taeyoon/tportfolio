import useMouseEffect from "@/hooks/useMouseEffect";

export default function ProfileVideo() {
	const { blendMode, handleMouseMove, videoHandleMouseLeave } = useMouseEffect();
	return (
		<div className="video_wrap" onMouseMove={handleMouseMove} onMouseLeave={videoHandleMouseLeave}>
			<video muted autoPlay playsInline loop onContextMenu={(e) => e.preventDefault()} style={{ mixBlendMode: blendMode }}>
				<source src="/videos/profile_video-muted.mp4" type="video/mp4"/>
				해당 브라우저에서는 video가 재생되지 않습니다.
			</video>
			<div className="video_overlay"></div>
		</div>
	)
}
