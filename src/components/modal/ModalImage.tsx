import { ModalImageProps } from "@/types/modalProps";
import Image from 'next/image';

export default function ModalImage({ src, alt, onClick }: ModalImageProps) {
  return (
    <div className="modal_image_container" onClick={onClick}>
      <Image src={src} alt={alt ?? 'modal image'} draggable={false} fill
        sizes="100%"
        style={{ objectFit: 'contain' }}
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
