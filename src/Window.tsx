import { useState, useEffect } from "react";
import { useDragger } from "./hook/useDragger";

export function Window({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {

  const colors = ["#FF0078", "#7A86EC", "#00C2FA", "#EA2FEA"];
  const [color, setColor] = useState("#FF0078");

  function getColor(){
    const randomNum = Math.round(Math.random() * colors.length);
    setColor(colors[randomNum]);
  }

  useEffect(() => {
    getColor();
  }, []);

  useDragger(`content-${id}`, `tab-${id}`);
  return (
    <div id={`content-${id}`} className="border-2 border-black absolute bg-white">
      <div
        id={`tab-${id}`}
        className='border-2 border-black h-[20px] cursor-pointer'
        style={{ backgroundColor: color }}
      />
      {children}
    </div>
  );
}
