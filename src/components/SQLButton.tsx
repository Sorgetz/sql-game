import { Button } from "./Button";

interface IProps {
  sqlWords: Set<string>;
  handleButton: (word: string) => void;
  translate: boolean;
}

const SQLTranslation = [
  { name: "SELECT", translation: "SELCIONAR" },
  { name: "*", translation: "TUDO" },
  { name: "FROM", translation: "DE" },
];

export function SQLButton({ sqlWords, handleButton, translate }: IProps) {
  function getTranslation(word: string) {
    return SQLTranslation.find((w) => w.name == word)?.translation;
  }

  return (
    <>
      {Array.from(sqlWords).map((word, index) => (
        <Button key={index} onClick={() => handleButton(word)}>
          {translate ? getTranslation(word) : word}
        </Button>
      ))}
    </>
  );
}
