export function FriendMessage({
  message,
  newWord,
}: {
  message: string;
  newWord: (text: string) => void;
}) {
  function convert() {
    const regex = new RegExp(/\[\&(.*?)\&\]/g);
    if (message.match(regex)) {
      const spliMessage = message.split(regex);
      return (
        <p className="wrap-break-word">
          {spliMessage[0]}
          <button
            onClick={() => newWord(spliMessage[1])}
            className="cursor-pointer font-bold wrap-break-word"
          >
            {spliMessage[1]}
          </button>
          {spliMessage[2]}
        </p>
      );
    } else {
      return <p>{message}</p>;
    }
  }

  return (
    <>
      <div className="flex items-start gap-2 m-2">
        <div className="rounded-full bg-indigo-500  w-10 h-10"></div>
        <div className="rounded-es-xl rounded-e-xl  bg-indigo-500 p-2 mt-4 text-white max-w-[70%] wrap-break-word">
          {convert()}
        </div>
      </div>
    </>
  );
}
