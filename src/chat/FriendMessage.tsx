export function FriendMessage({
  message,
  profilePic,
  newTableWord,
  newKeyWord,
  newSQLWord,
}: {
  message: string;
  profilePic: string;
  newTableWord: (text: string) => void;
  newKeyWord: (text: string) => void;
  newSQLWord: (text: string) => void;
}) {
  function convert() {
    const regex = /(\[\&(.*?)\&\]|\[\$(.*?)\$\]|\[\@(.*?)\@\])/g;

    const elements: React.ReactNode[] = [];
    let lastIndex = 0;

    for (const match of message.matchAll(regex)) {
      const fullMatch = match[0];
      const tableWord = match[2];
      const keyWord = match[3];
      const sqlWord = match[4];

      const matchIndex = match.index!;
      const before = message.slice(lastIndex, matchIndex);
      if (before) elements.push(<span key={lastIndex}>{before}</span>);

      const baseClasses =
        "inline-block px-2 py-1 rounded-sm font-semibold transition duration-150 cursor-pointer hover:brightness-125 hover:shadow-lg mx-1";

      if (tableWord) {
        elements.push(
          <button
            key={`${matchIndex}-table`}
            onClick={() => newTableWord(tableWord)}
            className={`${baseClasses} bg-[#FF0078] text-white hover:text-[#9B0032]`}
          >
            {tableWord}
          </button>
        );
      } else if (keyWord) {
        elements.push(
          <button
            key={`${matchIndex}-key`}
            onClick={() => newKeyWord(keyWord)}
            className={`${baseClasses} bg-amber-600 text-white hover:text-amber-800`}
          >
            {keyWord}
          </button>
        );
      } else if (sqlWord) {
        elements.push(
          <button
            key={`${matchIndex}-sql`}
            onClick={() => newSQLWord(sqlWord)}
            className={`${baseClasses} bg-indigo-500 text-white hover:text-indigo-700`}
          >
            {sqlWord}
          </button>
        );
      }

      lastIndex = matchIndex + fullMatch.length;
    }

    if (lastIndex < message.length) {
      elements.push(<span key={lastIndex}>{message.slice(lastIndex)}</span>);
    }

    return (
      <p className="wrap-break-word flex flex-wrap items-center leading-7 space-y-1">
        {elements}
      </p>
    );
  }

  return (
    <>
      <div className="flex items-start gap-2 m-2">
        <div className="rounded-full bg-indigo-500  w-10 h-10">
          {" "}
          <img className="rounded-full w-10 h-10" src={profilePic} />{" "}
        </div>
        <div className="rounded-es-xl rounded-e-xl bg-[#00c2fa] p-2 mt-4 text-white max-w-[70%] wrap-break-word">
          {convert()}
        </div>
      </div>
    </>
  );
}
