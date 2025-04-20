import { useEffect, useState } from "react";
import { Statements } from "./db/Statements";
import { Sidebar } from "./chat/Sidebar";
import { Messages } from "./chat/Messages";
import { Window } from "./Window";
import { ConfirmAnswer } from "./db/ConfirmAnswer";
import Confetti from "react-confetti";

function App() {
  const [sqlQuery, setSqlQuery] = useState("");
  const [sqlWords, setSqlWords] = useState(
    new Set([
      "SELECT",
      "*",
      "FROM",
      "nome",
      "idade",
      "check_in_pet",
      "usuarios",
    ])
  );
  const [confirmAnswer, setConfirmAnswer] = useState(false);
  const [guess, setGuess] = useState<initSqlJs.SqlValue[]>([]);

  const width = window.innerWidth;
  const height = window.innerHeight;
  const [confetti, setConfetti] = useState(false);

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

      <div id="container" className="bg-[#CCA3FF] w-300 h-150">
          <Window id="sql-ui">
            <textarea className="border-2 border-black" value={sqlQuery} />
            <div className="flex">
              {Array.from(sqlWords).map((word) => (
                <button
                  className="bg-indigo-500 text-white p-4 m-1 rounded"
                  onClick={handleButton}
                >
                  {word}
                </button>
              ))}

              <button
                className="bg-indigo-500 text-white p-4 m-1 rounded"
                onClick={() => setSqlQuery("")}
              >
                LIMPAR
              </button>
              <button
                className="bg-indigo-500 text-white font-bold p-4 m-1 rounded"
                onClick={handleRemove}
              >{`<`}</button>
            </div>

            <Statements sqlQuery={sqlQuery} validateAnswer={openModal} />
          </Window>

        <Window id="chat">
          <div className="w-100 h-100 flex">
            <Sidebar />
            <Messages newWord={newWord} />
          </div>
        </Window>
      </div>
    </>
  );
}

export default App;
