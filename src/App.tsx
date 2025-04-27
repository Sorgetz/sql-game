import { useEffect, useState } from "react";
import { Statements } from "./db/Statements";
import { Sidebar } from "./chat/Sidebar";
import { Messages } from "./chat/Messages";
import { Window } from "./components/Window";
import { ConfirmAnswer } from "./db/ConfirmAnswer";
import Confetti from "react-confetti";
import { Button } from "./components/Button";
import { ICharacter, IMessages, dialogs } from "./chat/Dialogs";
import ComputerIcon from "./img/computer_icon.png";
import WordIcon from "./img/world.png";
import PictureIcon from "./img/picture.png";
import Ditto from "./img/ditto.gif";
import { File } from "./workspace/File";

function App() {
  const [sqlQuery, setSqlQuery] = useState("");
  const [sqlWords, setSqlWords] = useState(new Set(["SELECT", "*", "FROM"]));
  const [confirmAnswer, setConfirmAnswer] = useState(false);
  const [guess, setGuess] = useState<initSqlJs.SqlValue[]>([]);
  const [character, setCharacter] = useState<ICharacter>(dialogs[0]);
  const [isOpenSQL, setIsOpenSQL] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [isOpenPicture, setIsOpenPicture] = useState(false);
  const [password, setPassword] = useState("");

  const width = window.innerWidth;
  const height = window.innerHeight;
  const [confetti, setConfetti] = useState(false);

  const isCorrectPassword = password == "6969";

  const [allMessages, setAllMessages] = useState<Record<string, IMessages[]>>(
    () => {
      const firstChar = dialogs[0];
      return {
        [firstChar.name]: [
          {
            user: "Outro",
            messages: firstChar.dialog_options[0].sendMessages,
          },
        ],
      };
    }
  );

  const currentMessages = allMessages[character.name] || [];

  const [choices, setChoices] = useState<string[] | null>(
    dialogs[0].dialog_options[0].choices
  );

  function handleButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (sqlQuery.length > 0) {
      setSqlQuery(sqlQuery + " " + e.currentTarget.textContent);
    } else {
      setSqlQuery(sqlQuery + e.currentTarget.textContent);
    }
  }

  function handleRemove() {
    setSqlQuery(sqlQuery.split(" ").slice(0, -1).join(" "));
  }

  function newWord(text: string) {
    setSqlWords((prev) => new Set(prev.add(text)));
  }

  function openModal(row: initSqlJs.SqlValue[]) {
    setConfirmAnswer(true);
    setGuess(row);
  }

  function changeChat(newCharacter: ICharacter) {
    setCharacter(newCharacter);

    setAllMessages((prev) => {
      if (prev[newCharacter.name]) return prev;

      return {
        ...prev,
        [newCharacter.name]: [
          {
            user: "Outro",
            messages: newCharacter.dialog_options[0].sendMessages,
          },
        ],
      };
    });

    setChoices(newCharacter.dialog_options[0].choices);
  }

  function updateMessagesForCurrentCharacter(newMessages: IMessages[]) {
    setAllMessages((prev) => ({
      ...prev,
      [character.name]: newMessages,
    }));
  }

  useEffect(() => {}, [sqlWords]);

  return (
    <>
      {confirmAnswer && (
        <ConfirmAnswer
          closeModal={() => setConfirmAnswer(false)}
          setConfetti={setConfetti}
          guess={guess}
        />
      )}

      {confetti && <Confetti width={width} height={height} />}

      <div
        id="container"
        className="border-2 border-black bg-[#CCA3FF] w-full h-150"
      >
        <div className="flex flex-col">
          <File
            src={ComputerIcon}
            name="SQL.exe"
            openWindow={() => setIsOpenSQL(!isOpenSQL)}
          />
          <File
            src={WordIcon}
            name="chat.exe"
            openWindow={() => setIsOpenChat(!isOpenChat)}
          />
          <File
            src={PictureIcon}
            name="image.png"
            openWindow={() => setIsOpenPicture(!isOpenPicture)}
          />
        </div>

        {isOpenPicture && (
          <Window closeWindow={() => setIsOpenPicture(false)} id="ditto">
            <img src={Ditto} />
          </Window>
        )}
        {isOpenSQL && (
          <Window closeWindow={() => setIsOpenSQL(false)} id="sql-ui">
            {isCorrectPassword ? (
              <div
                id="sql-ui-container"
                className=" w-150 max-h-120 overflow-y-auto p-2"
              >
                <textarea
                  className="h-10 border-2 border-black m-1 w-[95%]"
                  rows={3}
                  value={sqlQuery}
                  readOnly={true}
                />
                <div className="flex-wrap">
                  {Array.from(sqlWords).map((word, index) => (
                    <Button key={index} onClick={handleButton}>
                      {word}
                    </Button>
                  ))}

                  <Button onClick={() => setSqlQuery("")}>LIMPAR</Button>
                  <Button onClick={handleRemove}>{`<`}</Button>
                </div>

                <Statements sqlQuery={sqlQuery} validateAnswer={openModal} />
              </div>
            ) : (
              <div className="p-2">
                <p>Insira a senha:</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="border-2"
                />
              </div>
            )}
          </Window>
        )}

        {isOpenChat && (
          <Window closeWindow={() => setIsOpenChat(false)} id="chat">
            <div className="w-120 h-100 flex">
              <Sidebar changeChat={changeChat} />
              <Messages
                character={character}
                messages={currentMessages}
                setMessages={updateMessagesForCurrentCharacter}
                choices={choices}
                setChoices={setChoices}
                newWord={newWord}
              />
            </div>
          </Window>
        )}
      </div>
      <footer className="border-b-2 border-x-2 border-black p-2 bg-[#00C2FA]">
        <div className="border-1 border-b-2 border-r-2 w-40 p-1 text-center">Só Quero Lembrar</div>
      </footer>
    </>
  );
}

export default App;
