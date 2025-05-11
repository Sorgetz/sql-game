import { useState, useEffect, useContext } from "react";
import { useDragger } from "../hook/useDragger";
import { WindowContext } from "../contexts/WindowContext";

interface IProps {
  name: string;
  children: React.ReactNode;
  onClose: () => void;
}

export function WindowContent({ name, children, onClose }: IProps) {
  const { positions } = useContext(WindowContext)!;
  const colors = ["#FF0078", "#7A86EC", "#00C2FA", "#EA2FEA"];
  const [color, setColor] = useState("#FF0078");

  function getColor() {
    const randomNum = Math.floor(Math.random() * colors.length);
    setColor(colors[randomNum]);
  }

  useEffect(() => {
    const window = document.getElementById(`content-${name}`);
    if (!window) {
      return;
    }
    window.style.scale = "1";
    window.style.transition = "0s";
    getColor();
  }, []);

  useDragger(`content-${name}`, `tab-${name}`);

  function getPosition() {
    const index = positions.findIndex(
      (position) => position == `content-${name}`
    );
    return index !== -1 ? index + 1 : 0;
  }

  return (
    <div
      id={`content-${name}`}
      className="border-2 border-black border-b-3 border-r-3 absolute bg-white"
      style={{ transition: "0.5s", zIndex: getPosition() }}
      onClick={() => console.log(positions)}
    >
      <div
        id={`tab-${name}`}
        className="border-black border-b-2 cursor-pointer px-2 py-1 text-white flex justify-between w-full"
        style={{ backgroundColor: color }}
      >
        {`${name}`}
        {name !== "confirm" && (
          <div
            onClick={() => {
              const window = document.getElementById(`content-${name}`)!;
              window.style.transition = "0.5s";
              window.style.scale = "0";
              setTimeout(() => {
                onClose();
              }, 500);
            }}
            className="border-2 border-black px-2"
          >
            X
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
