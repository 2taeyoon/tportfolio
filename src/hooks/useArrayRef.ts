import { useCallback } from "react";

export function useRegisterHTMLRef<T extends HTMLElement | null>(refArray: React.RefObject<T[]>) {
  return useCallback((el: T | null) => {
    if (el && !refArray.current?.includes(el)) { // el이 존재하고(ref가 null이 아니고), refArray.current 배열에 아직 추가되지 않은 경우 실행
      refArray.current?.push(el); // el을 refArray.current 배열에 추가
    }
  }, [refArray]); // refArray이 변경될 때 실행
}

export function useRegisterSVGRef<T extends SVGLinearGradientElement | null>(refArray: React.RefObject<T[]>) {
  return useCallback((el: T | null) => {
    if (el && !refArray.current?.includes(el)) { // el이 존재하고(ref가 null이 아니고), refArray.current 배열에 아직 추가되지 않은 경우 실행
      refArray.current?.push(el); // el을 refArray.current 배열에 추가
    }
  }, [refArray]); // refArray이 변경될 때 실행
}