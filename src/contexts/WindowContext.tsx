import { createContext, useState } from "react";

interface IWindowContext {
  positions: string[];
  setPositions: React.Dispatch<React.SetStateAction<string[]>>;
}

export const WindowContext = createContext<IWindowContext | null>(null);

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [positions, setPositions] = useState<string[]>([]);

  return (
    <WindowContext.Provider value={{ positions, setPositions }}>
      {children}
    </WindowContext.Provider>
  );
}
