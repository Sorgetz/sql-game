export function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      className="bg-indigo-500 border-1 border-b-3 border-r-3 border-black text-white p-2 m-1 rounded cursor-pointer transition-all duration-200 ease-in-out hover:bg-indigo-600 hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
