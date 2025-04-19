import { SSModalOverlayProps } from "@/types/modalProps";

export default function SSModalOverlay({ children, onClose, className }: SSModalOverlayProps) {
  return (
    <div className={`modal_overlay ${className ?? ''}`} onClick={onClose}>
      {children}
    </div>
  );
}