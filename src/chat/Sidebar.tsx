import { ICharacter, testDialogs } from "./Dialogs";

export function Sidebar({
  changeChat,
}: {
  changeChat: (character: ICharacter) => void;
}) {
  return (
    <>
      <div className="border-r-2 w-full">
        <div>
          {testDialogs.map((char, index) => (
            <div
              key={index}
              onClick={() => changeChat(char)}
              className="cursor-pointer flex p-2 border-b-2"
            >
              <div className="rounded-full bg-indigo-500  w-10 h-10"></div>
              <h1 className="m-2">{char.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
