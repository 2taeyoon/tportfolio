import { DesignCardProps } from "@/types/projectProps"
import Image from "next/image"

export default function DesignCard({ project }: DesignCardProps) {
	return (
		<div className="design_card">
			<div className="thumbnail">
				<Image src={project.thumbnail} alt={project.title} draggable={false} fill
					sizes="100%"
					style={{ objectFit: 'cover' }}
					onDragStart={(e) => e.preventDefault()}
					onContextMenu={(e) => e.preventDefault()}
				/>
			</div>
			<div className="content">
				<div className="date_type_wrap">
					<span className="type">{project.type}</span>
					<span className="date">{project.date}</span>
					<span className="contribution">{project.contribution}</span>
					{project.research && <span className="research">{project.research}</span>}
				</div>
				<div className="title">{project.title}</div>
				<p className="description">{project.description}</p>
			</div>
		</div>
	)
}