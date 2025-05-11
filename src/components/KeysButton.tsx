interface IProps {
  keys: Set<string> | undefined;
  translate: boolean;
  handleButton: (word: string) => void;
}

const TableTranslation = [
  { name: "TopFiveBr", translation: "Top 5 Jogadores BR" },
  {
    name: "TopFiveBrBanckAccount",
    translation: "Conta bancária dos Top 5 Jogadores BR",
  },
  { name: "FROM", translation: "DE" },
];

export function KeysButton({ keys, translate, handleButton }: IProps) {
  function getTranslation(word: string) {
    return TableTranslation.find((w) => w.name == word)?.translation;
  }

  return (
    <>
      {keys &&
        Array.from(keys).map((word, index) => (
          <button
            key={index}
            className="bg-[#00C2FA] border-1 border-b-3 border-r-3 border-black text-white p-2 m-1 rounded cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#00A1D8] hover:scale-105"
            onClick={() => handleButton(word)}
          >
            {translate ? getTranslation(word) : word}
          </button>
        ))}
    </>
  );
}
