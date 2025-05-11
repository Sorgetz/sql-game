interface IProps {
  tables: Set<string> | undefined;
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

export function TablesButton({ tables, translate, handleButton }: IProps) {
  function getTranslation(word: string) {
    return TableTranslation.find((w) => w.name == word)?.translation;
  }

  return (
    <>
      {tables &&
        Array.from(tables).map((word, index) => (
          <>
            <button
              key={index}
              className="bg-[#FF0078] border-1 border-b-3 border-r-3 border-black text-white p-2 m-1 rounded cursor-pointer"
              onClick={() => handleButton(word)}
            >
              {translate ? getTranslation(word) : word}
            </button>
            <button
              key={index}
              className="bg-[#FF0078] border-1 border-b-3 border-r-3 border-black text-white p-2 m-1 rounded cursor-pointer"
              onClick={() => handleButton(word.slice(0, 2).toUpperCase())}
            >
              {word.slice(0, 2).toUpperCase()}
            </button>
          </>
        ))}
    </>
  );
}
