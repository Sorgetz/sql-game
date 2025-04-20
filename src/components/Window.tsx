import { useState, useEffect } from "react";
import { useDragger } from "../hook/useDragger";

export function Window({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const colors = ["#FF0078", "#7A86EC", "#00C2FA", "#EA2FEA"];
  const [color, setColor] = useState("#FF0078");

  function getColor() {
    const randomNum = Math.floor(Math.random() * colors.length);
    setColor(colors[randomNum]);
  }

  useEffect(() => {
    getColor();
  }, []);

  useDragger(`content-${id}`, `tab-${id}`);
  return (
    <div
      id={`content-${id}`}
      className="border-2 border-black border-b-3 border-r-3 absolute bg-white"
    >
      <div
        id={`tab-${id}`}
        className="border-black border-b-2 cursor-pointer px-2 text-white"
        style={{ backgroundColor: color }}
      >
        {id}
      </div>
      {children}
    </div>
  );
}
