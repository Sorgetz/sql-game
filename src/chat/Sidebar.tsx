import { ICharacter } from "./Dialogs";

interface IProps {
  dialogs: ICharacter[];
  changeChat: (character: ICharacter) => void;
  currentChar: ICharacter;
}

export function Sidebar({ changeChat, currentChar, dialogs }: IProps) {
  return (
    <>
      <div className="border-r-2 w-100">
        <div>
          {dialogs.map((char) =>
            char.name == currentChar.name ? (
              <div
                key={char.name}
                onClick={() => changeChat(char)}
                className="bg-[#7A86EC] cursor-pointer flex p-2 border-b-2"
              >
                <div>
                  <img
                    className="rounded-full bg-indigo-500  w-10 h-10"
                    src={char.profile_picture}
                  />
                </div>
                <h1 className="m-2">{char.name}</h1>
              </div>
            ) : (
              <div
                key={char.name}
                onClick={() => changeChat(char)}
                className="cursor-pointer flex p-2 border-b-2"
              >
                <img
                  className="rounded-full bg-indigo-500  w-10 h-10"
                  src={char.profile_picture}
                />{" "}
                <h1 className="m-2">{char.name}</h1>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
