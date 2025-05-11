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
}

export function Window({
  name,
  children,
  src,
  open: defaultOpen = false,
}: IProps) {
  const { positions, setPositions } = useContext(WindowContext)!;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  function closeWindow() {
    setIsOpen(false);
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
        <File name={name} src={src} openWindow={() => setIsOpen(!isOpen)} />
      )}
      {isOpen && (
        <WindowContent name={name} onClose={closeWindow}>
          {children}
        </WindowContent>
      )}
    </>
  );
}
