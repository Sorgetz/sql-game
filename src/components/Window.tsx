import { useContext, useEffect, useState } from "react";
import { useDragger } from "../hook/useDragger";
import { File } from "../workspace/File";
import { WindowContent } from "./WindowContent";
import { WindowContext } from "../contexts/WindowContext";

interface IProps {
  name: string;
  children: React.ReactNode;
  src?: string;
  open?: boolean;
  notificationCount?: number;
}

export function Window({
  name,
  children,
  src,
  open: defaultOpen = false,
  notificationCount = 0,
}: IProps) {
  const { positions, setPositions } = useContext(WindowContext)!;
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showNotification, setShowNotification] = useState(notificationCount);

  function closeWindow() {
    setIsOpen(false);
  }

  useEffect(() => {
    setShowNotification(notificationCount);
  }, [notificationCount]);

  function handleIsOpenWindow() {
    const index = positions.findIndex(
      (posisition) => posisition == `content-${name}`
    );
    if (index !== -1) {
      setPositions((prev) => {
        const newPositions = prev.filter((pos) => pos !== `content-${name}`);
        return [...newPositions, `content-${name}`];
      });
    }

    setIsOpen(!isOpen);
    setShowNotification(0);
  }

  useDragger(`content-${name}`, `tab-${name}`);

  useEffect(() => {
    function handleCloseAll() {
      setIsOpen(false);
    }

    if (!positions.includes(`content-${name}`)) {
      console.log(name + "aidiconado!!");
      setPositions((prev) => [...prev, `content-${name}`]);
    }

    window.addEventListener("closeAllWindows", handleCloseAll);
    return () => {
      window.removeEventListener("closeAllWindows", handleCloseAll);
    };
  }, []);

  return (
    <>
      {src && (
        <div className="relative w-fit">
          {showNotification > 0 && (
            <span className="absolute top-5 right-6 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs px-2 rounded-full">
              {showNotification}
            </span>
          )}
          <File name={name} src={src} openWindow={handleIsOpenWindow} />
        </div>
      )}
      {isOpen && (
        <WindowContent name={name} onClose={closeWindow}>
          {children}
        </WindowContent>
      )}
    </>
  );
}
