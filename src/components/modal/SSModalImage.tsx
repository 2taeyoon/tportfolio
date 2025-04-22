import { SSModalImageProps } from "@/types/modalProps";
import Image from 'next/image';

export default function SSModalImage({ src, alt, onClick }: SSModalImageProps) {
  return (
    <div className="modal_image" onClick={onClick}>
      <Image src={src} alt={alt} draggable={false} fill
        sizes="100%"
        style={{ objectFit: 'contain' }}
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}