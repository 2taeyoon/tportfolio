import { ModalInfoProps } from "@/types/modalProps";

export default function ModalInfo({ title, date, type, contribution }: ModalInfoProps) {
  return (
    <div className="modal_info">
      {title && <h2>{title}</h2>}
			{(date || type || contribution) &&
				<div className="modal_details">
					{date && <span className="date">{date}</span>}
					{type && <span className="type">{type}</span>}
					{contribution && <span className="contribution">{contribution}</span>}
				</div>
			}
    </div>
  );
}
