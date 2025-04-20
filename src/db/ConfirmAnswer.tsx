import { SetStateAction } from "react";

export function ConfirmAnswer({
  closeModal,
  setConfetti,
  guess,
}: {
  closeModal: () => void;
  setConfetti : React.Dispatch<SetStateAction<boolean>>;
  guess: initSqlJs.SqlValue[];
}) {
  function validateAnswer() {
    let checker = (arr: string[], target: string[]) => {
      return target.every((v) => arr.includes(v));
    };
    const correctAnswer = ["Julia", "19"];
    const guessAnswer: string[] = [];
    guess.map((g) => guessAnswer.push(String(g)));

    if (!checker(guessAnswer, correctAnswer)) {
      console.log("EROWWWWWWWWWWWWWWWWWWWWWWWWWWW");
    } else {
        closeModal();
      setConfetti(true);
    }
  }
  return (
    <>
      <div className="w-screen h-screen bg-black/25 flex justify-center items-center fixed z-[1000]">
        <div className="border-2 border-black w-50 p-4 bg-white">
          <p>Tem certezas? {guess.join(" - ")}</p>
          <button onClick={validateAnswer} className="cursor-pointer">
            Sim
          </button>
          <button onClick={closeModal} className="cursor-pointer">
            Não
          </button>
        </div>
      </div>
    </>
  );
}
