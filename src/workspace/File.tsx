import { useState } from "react";

interface IProps {
  src: string;
  name: string;
  openWindow: () => void;
}

export function File({ src, name, openWindow }: IProps) {
  const [isSelected, setIsSelected] = useState(false);

  function select() {
    setIsSelected(!isSelected);
  }

  return isSelected ? (
    <div
      onClick={select}
      onDoubleClick={openWindow}
      className="mx-4 m-2 cursor-pointer w-25 flex flex-col py-2 px-5 text-white border border-white bg-[#00c2fa]/50"
    >
      <img src={src}></img>
      {name}
    </div>
  ) : (
    <div
      onClick={select}
      onDoubleClick={openWindow}
      className="mx-4 m-2 cursor-pointer w-25 flex flex-col py-2 px-5"
    >
      <img src={src}></img>
      {name}
    </div>
  );
}
