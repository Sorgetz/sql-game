import { useContext, useEffect, useRef } from "react";
import { WindowContext } from "../contexts/WindowContext";

export function useDragger(id: string, tab: string): void {
  const { positions, setPositions } = useContext(WindowContext)!;
  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const target = document.getElementById(id);
    const buttonTarget = document.getElementById(tab);
    if (!target) return;
    if (!buttonTarget) return;

    const container = target.parentElement;
    if (!container) throw new Error("target element must have a parent");

    const centerX = (window.innerWidth - target.offsetWidth) / 2;
    const centerY = (window.innerHeight - target.offsetHeight) / 2;

    target.style.top = `${centerY}px`;
    target.style.left = `${centerX}px`;

    const onMouseDown = (e: MouseEvent) => {
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;

      const index = positions.findIndex((posisition) => posisition == id);
      if (index !== -1) {
        setPositions((prev) => {
          const newPositions = prev.filter((pos) => pos !== id);
          return [...newPositions, id];
        });
      }
    };

    const onMouseUp = (_e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    };

    buttonTarget.addEventListener("mousedown", onMouseDown);
    target.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      buttonTarget.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, [id]);
}
