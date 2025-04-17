import { ModalButtonsProps } from "@/types/modalProps";

export default function ModalButtons({ currentIndex, max, isZoomed, onPrev, onNext }: ModalButtonsProps) {
  return (
    <>
      {!isZoomed && currentIndex > 0 && (
        <button className="modal_prev" onClick={onPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="var(--whiteE)" viewBox="0 0 256 256">
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
          </svg>
        </button>
      )}
      {!isZoomed && currentIndex < max - 1 && (
        <button className="modal_next" onClick={onNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="var(--whiteE)" viewBox="0 0 256 256">
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
          </svg>
        </button>
      )}
    </>
  );
}