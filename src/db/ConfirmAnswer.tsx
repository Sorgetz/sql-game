import { SetStateAction, useState } from "react";
import { Window } from "../components/Window";
import { Button } from "../components/Button";

interface IProps {
  closeModal: () => void;
  setConfetti: React.Dispatch<SetStateAction<boolean>>;
  guess: initSqlJs.SqlValue[];
  correctAnswer: string[];
}

export function ConfirmAnswer({
  closeModal,
  setConfetti,
  guess,
  correctAnswer,
}: IProps) {
  const [isWrong, setIsWrong] = useState(false);

  function validateAnswer() {
    if (`${guess}` == "DITTO") {
      console.log("GANHAMO");
    }
    if (`${guess}` == "DITTO-KILL") {
      console.log("DEAD DITTO");
    }
    let checker = (arr: string[], target: string[]) => {
      return target.every((v) => arr.includes(v));
    };
    const guessAnswer: string[] = [];
    guess.map((g) => guessAnswer.push(String(g)));

    if (!checker(guessAnswer, correctAnswer)) {
      console.log("EROWWWWWWWWWWWWWWWWWWWWWWWWWWW");
      setIsWrong(true);
    } else {
      closeModal();
      setConfetti(true);
    }
  }
  return (
    <>
      {!isWrong ? (
        <div className="w-screen h-screen bg-black/25 flex justify-center items-center fixed z-[1000]">
          <Window open={true} name="confirm">
            <div className="border-2 border-black w-50 p-4 bg-white">
              <p>Tem certezas?</p>
              <Button onClick={validateAnswer}>Sim</Button>
              <Button onClick={closeModal}>Não</Button>
            </div>
          </Window>
        </div>
      ) : (
        <div className="w-screen h-screen bg-black/25 flex justify-center items-center fixed z-[1000]">
          <Window open={true} name="confirm">
            <div className="border-2 border-black w-50 p-4 bg-white">
              <p>ERRRROWWWWWWW?</p>
              <Button onClick={closeModal}>Sair</Button>
            </div>
          </Window>
        </div>
      )}
    </>
  );
}
