import { useEffect, RefObject } from "react";

export function useCloseOnOutsideClick(
  ref: RefObject<HTMLElement | null>,
  closeCallback: () => void,
) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeCallback();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref, closeCallback]);
}
