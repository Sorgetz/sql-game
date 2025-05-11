import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import {
  ICharacter,
  IMessages,
  fifthLevelDialogs,
  firstLevelDialogs,
  fourthLevelDialogs,
  secondLevelDialogs,
  thirdLevelDialogs,
} from "./chat/Dialogs";
import { Messages } from "./chat/Messages";
import { Sidebar } from "./chat/Sidebar";
import { SQLButton } from "./components/SQLButton";
import { TablesButton } from "./components/TablesButton";
import { Window } from "./components/Window";
import { ConfirmAnswer } from "./db/ConfirmAnswer";
import { Statements } from "./db/Statements";
import ComputerIcon from "./img/computer_icon.png";
import Ditto from "./img/ditto.gif";
import PictureIcon from "./img/picture.png";
import BookWordsIcon from "./img/word-book.png";
import WordIcon from "./img/world.png";
import { KeysButton } from "./components/KeysButton";
import { Button } from "./components/Button";
import { WindowProvider } from "./contexts/WindowContext";

function App() {
  const [sqlQuery, setSqlQuery] = useState("");
  const [sqlWords, setSqlWords] = useState(new Set(["SELECT", "*", "FROM"]));
  const [tableWords, setTableWords] = useState<Set<string> | null>(null);
  const [aliasWords, setAliasWords] = useState<Set<string> | null>(null);
  const [keyWords, setKeyWords] = useState<Set<string> | null>(null);
  const [confirmAnswer, setConfirmAnswer] = useState(false);
  const [guess, setGuess] = useState<initSqlJs.SqlValue[]>([]);
  const [charactersInfo, setCharactersInfo] =
    useState<ICharacter[]>(firstLevelDialogs);
  const [character, setCharacter] = useState<ICharacter>(charactersInfo[0]);

  const [password, setPassword] = useState("");
  const [translate, setTranslate] = useState(false);
  const [runQuery, setRunQuery] = useState(false);

  const width = window.innerWidth;
  const height = window.innerHeight;
  const [confetti, setConfetti] = useState(false);

  const [currentLevel, setCurrentLevel] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState(["puss_in_boots_2"]);

  const isCorrectPassword = password == "6969";

  const [allMessages, setAllMessages] = useState<Record<string, IMessages[]>>(
    () => {
      const firstChar = charactersInfo[0];
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

  function nextLevel() {
    setConfetti(false);
    console.log("passando de nivel");
    let nextLevel = currentLevel + 1;
    setTableWords(null);
    setKeyWords(null);
    setSqlQuery("");
    setRunQuery(false);
    window.dispatchEvent(new Event("closeAllWindows"));
    switch (nextLevel) {
      case 5:
        setCorrectAnswer(["D.I.T.T.O"]);
        setCharactersInfo(secondLevelDialogs);
        break;
      case 3:
        setCorrectAnswer(["Débora Machado"]);
        setCharactersInfo(thirdLevelDialogs);
        break;
      case 4:
        setCorrectAnswer(["Débora Machado"]);
        setCharactersInfo(fourthLevelDialogs);
        break;
      case 2:
        setCharactersInfo(fifthLevelDialogs);
        setCorrectAnswer([]);
        break;
      default:
        break;
    }
    setCurrentLevel(nextLevel);
  }

  const [choices, setChoices] = useState<string[] | null>(
    charactersInfo[0].dialog_options[0].choices
  );

  function handleButton(word: string) {
    if (sqlQuery.length > 0) {
      const lastWord = sqlQuery.split(" ").slice(-1)[0];
      if (keyWords?.has(lastWord) && keyWords?.has(word)) {
        setSqlQuery(sqlQuery + ", " + word);
        return;
      } else if (aliasWords?.has(lastWord) && keyWords?.has(word)) {
        setSqlQuery(sqlQuery + "." + word);
        return;
      }
      setSqlQuery(sqlQuery + " " + word);
    } else {
      setSqlQuery(sqlQuery + word);
    }
  }

  function handleRemove() {
    setSqlQuery(sqlQuery.split(" ").slice(0, -1).join(" "));
    setRunQuery(false);
  }

  function newTableWord(text: string) {
    setTableWords((prev) => new Set([...(prev ?? new Set()), text]));
    setAliasWords(
      (prev) =>
        new Set([...(prev ?? new Set()), text.slice(0, 2).toUpperCase()])
    );
  }

  function newKeyWord(text: string) {
    setKeyWords((prev) => new Set([...(prev ?? new Set()), text]));
  }

  function newSQLWord(text: string) {
    setSqlWords((prev) => new Set([...(prev ?? new Set()), text]));
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

  function clear() {
    setSqlQuery("");
    setRunQuery(false);
  }

  useEffect(() => {}, [sqlWords, confetti]);

  return (
    <>
      {confirmAnswer && (
        <ConfirmAnswer
          correctAnswer={correctAnswer}
          closeModal={() => setConfirmAnswer(false)}
          setConfetti={setConfetti}
          guess={guess}
        />
      )}

      {confetti && (
        <div className="bg-[#CCA3FF] fixed z-[1000] w-full h-full flex flex-col justify-center items-center">
          <p className="text-[100px] text-white mb-8">Nível concluído!</p>
          <Confetti gravity={2} width={width} height={height} />
          <Button key={currentLevel} onClick={() => nextLevel()}>
            Próximo nível
          </Button>
        </div>
      )}
      <div
        id="container"
        className="relative z-10 border-2 border-black bg-[#CCA3FF] w-full h-150"
      >
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] text-white pointer-events-none -z-10 whitespace-nowrap">
          {`Level ${currentLevel}`}
        </p>

        <div className="flex flex-col z-10">
          <WindowProvider>
            <Window src={ComputerIcon} name="sql-ui.exe">
              {isCorrectPassword ? (
                <div
                  id="sql-ui-container"
                  className=" w-150 max-h-120 overflow-y-auto p-2"
                >
                  <div className="flex">
                    <div
                      className="border-2 border-black m-1 w-[95%] min-h-[10px] max-h-[200px] p-2 overflow-auto resize-none"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {sqlQuery}
                    </div>
                    <button
                      className="bg-green-500 border-1 border-b-3 border-r-3 border-black text-white p-2 px-6 m-1 rounded cursor-pointer"
                      onClick={() => setRunQuery(true)}
                    >
                      ▶
                    </button>
                    <button
                      className="bg-[#EA2FEA] border-1 border-b-3 border-r-3 border-black text-white p-1 m-1 rounded cursor-pointer"
                      onClick={() => clear()}
                    >
                      ⌧
                    </button>
                    <button
                      className="bg-[#EA2FEA] border-1 border-b-3 border-r-3 border-black text-white p-1 m-1 rounded cursor-pointer"
                      onClick={handleRemove}
                    >
                      ⌫
                    </button>
                  </div>

                  <Statements
                    run={runQuery}
                    sqlQuery={sqlQuery}
                    validateAnswer={openModal}
                  />
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

            <Window name="chat.exe" src={WordIcon}>
              <div className="w-140 h-100 flex">
                <Sidebar
                  dialogs={charactersInfo}
                  currentChar={character}
                  changeChat={changeChat}
                />
                <Messages
                  character={character}
                  messages={currentMessages}
                  setMessages={updateMessagesForCurrentCharacter}
                  choices={choices}
                  setChoices={setChoices}
                  newTableWord={newTableWord}
                  newKeyWord={newKeyWord}
                  newSQLWord={newSQLWord}
                />
              </div>
            </Window>

            {currentLevel == 2 && (
              <Window name="image.png" src={PictureIcon}>
                <img src={Ditto} />
              </Window>
            )}

            <Window name="words.exe" src={BookWordsIcon}>
              <div className="flex-wrap">
                <div className="p-2 flex gap-2">
                  <input
                    type="checkbox"
                    onClick={(e) => setTranslate(e.currentTarget.checked)}
                  />
                  <p>Mudar botões para Linguagem Natural</p>
                </div>

                <div className="p-2">
                  <p>Operacionaveis</p>
                  <SQLButton
                    sqlWords={sqlWords}
                    handleButton={handleButton}
                    translate={translate}
                  />
                </div>
                {tableWords && (
                  <div className="p-2">
                    <p>Tabelas</p>
                    <TablesButton
                      tables={tableWords}
                      handleButton={handleButton}
                      translate={translate}
                    />
                  </div>
                )}
                {keyWords && (
                  <div className="p-2">
                    <p>Palavras Chaves</p>
                    <KeysButton
                      keys={keyWords}
                      handleButton={handleButton}
                      translate={translate}
                    />
                  </div>
                )}
              </div>
            </Window>
          </WindowProvider>
        </div>
      </div>
      <footer className="border-b-2 border-x-2 border-black p-2 bg-[#00C2FA]">
        <div className="border-1 border-b-2 border-r-2 w-40 p-1 text-center">
          Só Quero Lembrar
        </div>
      </footer>
    </>
  );
}

export default App;
