export function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      className="bg-indigo-500 border-1 border-b-3 border-r-3 border-black text-white p-2 m-1 rounded cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
