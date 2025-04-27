import { useState, useEffect } from "react";
import { useDragger } from "../hook/useDragger";

export function Window({
  id,
  children,
  closeWindow,
}: {
  id: string;
  children: React.ReactNode;
  closeWindow: () => void;
}) {
  const colors = ["#FF0078", "#7A86EC", "#00C2FA", "#EA2FEA"];
  const [color, setColor] = useState("#FF0078");

  function getColor() {
    const randomNum = Math.floor(Math.random() * colors.length);
    setColor(colors[randomNum]);
  }

  useEffect(() => {
    const window = document.getElementById(`content-${id}`)!;
    window.style.scale = "1";
    window.style.transition = "0s";
    getColor();
  }, []);

  useDragger(`content-${id}`, `tab-${id}`);
  return (
    <div
      id={`content-${id}`}
      className="border-2 border-black border-b-3 border-r-3 absolute bg-white"
      style={{ transition: "0.5s" }}
    >
      <div
        id={`tab-${id}`}
        className="border-black border-b-2 cursor-pointer px-2 py-1 text-white flex justify-between w-full"
        style={{ backgroundColor: color }}
      >
        {`${id}`}
        <div
          onClick={() => {
            const window = document.getElementById(`content-${id}`)!;
            window.style.transition = "0.5s";
            window.style.scale = "0";
            setTimeout(() => {
              closeWindow();
            }, 500);
          }}
          className="border-2 border-black px-2"
        >
          X
        </div>
      </div>
      {children}
    </div>
  );
}
