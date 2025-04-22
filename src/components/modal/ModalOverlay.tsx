import { ModalOverlayProps } from "@/types/modalProps";

export default function ModalOverlay({ children, onClose, className }: ModalOverlayProps) {
  return (
    <div className={`modal_overlay ${className ?? ''}`} onClick={onClose}>
      {children}
    </div>
  );
}