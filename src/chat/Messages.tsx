import { FriendMessage } from "./FriendMessage";
import { UserMessage } from "./UserMessage";
import { ICharacter, IMessages } from "./Dialogs";

interface MessageInfo {
  newWord: (text: string) => void;
  character: ICharacter;
  messages: IMessages[];
  setMessages: (newMessages: IMessages[]) => void;
  choices: string[] | null;
  setChoices: React.Dispatch<React.SetStateAction<string[] | null>>;
}

export function Messages({
  newWord,
  character,
  messages,
  setMessages,
  choices,
  setChoices,
}: MessageInfo) {
  function choseOption(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const choice = e.currentTarget.textContent as string;
    const index = character.dialog_options.findIndex(
      (option) => option.name === choice
    );

    const newUserMessage = {
      user: "Usuario",
      messages: [choice],
    };
    const newOtherMessage = {
      user: "Outro",
      messages: character.dialog_options[index].sendMessages,
    };

    const updatedMessages = [...messages, newUserMessage, newOtherMessage];
    setMessages(updatedMessages);
    setChoices(character.dialog_options[index].choices);
  }

  return (
    <>
      <div className="overflow-y-auto w-250">
        {messages.map((obj, index) => {
          return obj.user === "Outro"
            ? obj.messages.map((msg, idx) => (
                <FriendMessage
                  key={`${index}-${idx}`}
                  message={msg}
                  newWord={newWord}
                />
              ))
            : obj.messages.map((msg, idx) => (
                <UserMessage key={idx} message={msg} />
              ));
        })}

        {choices != null && (
          <div className="flex flex-col items-end gap-2">
            {choices.map((choice, index) => (
              <button
                key={index}
                onClick={choseOption}
                className="mt-4 cursor-pointer rounded-xl rounded-tr-none hover:bg-amber-950 bg-amber-600 p-2 mx-2 text-white max-w-[70%] wrap-break-word animate-bounce"
              >
                {choice}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
