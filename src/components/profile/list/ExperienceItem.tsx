import { ExperienceItemProps } from "@/types/profileProps";

export default function ExperienceItem({ title, items, extra, translate }: ExperienceItemProps) {
  return (
    <div className="experience_item" style={{ transform: `translate(${translate.x}, ${translate.y})` }}>
      <div className="experience_title">{title}{extra && <span>{extra}</span>}</div>
			<div className="content_wrap">
				{items.map((item, index) => (
					<div className="content" key={index}>
						<div className="content_sub_title">{item.subTitle}</div>
						<div className="content_detail">{item.body}</div>
						<div className="content_meta">
							{ item.meta.first && <div className="content_meta_item">{item.meta.first}</div> }
							{ item.meta.second && <div className="content_meta_item">{item.meta.second}</div> }
							{ item.meta.third && <div className="content_meta_item">{item.meta.third}</div> }
						</div>
					</div>
				))}
			</div>
    </div>
  );
}