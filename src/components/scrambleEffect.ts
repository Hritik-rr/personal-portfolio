import { useEffect } from "react";
import { scrambleText } from "./scrambleFunction";

interface ScrambleElement {
  id: string;
  originalText: string;
  duration?: number;
}

export const useScrambleEffect = (elements: ScrambleElement[]) => {
  useEffect(() => {
    elements.forEach(({ id, originalText, duration = 800 }) => {
      const element = document.getElementById(id);

      const handleMouseOver = () => {
        if (element) {
          scrambleText(element, originalText, duration);
        }
      };

      element?.addEventListener("mouseover", handleMouseOver);

      // Cleanup function to remove the event listener
      return () => {
        element?.removeEventListener("mouseover", handleMouseOver);
      };
    });
  }, [elements]);
};
