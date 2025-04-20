import { useEffect, useState } from "react";
import { FriendMessage } from "./FriendMessage";
import { UserMessage } from "./UserMessage";
import { dialog_first_character, IMessages } from "./Dialogs";

export function Messages({ newWord }: { newWord: (text: string) => void }) {
  const initalMessages: IMessages[] = [
    {
      user: "Outro",
      messages: [
        "Cara, finalmente encontrei o nosso suspeito daquele caso de roubo digital de Robux! Ele está na tabela [&top_5_jogadores_roblox_brasil&]",
      ],
    },
  ];

  const [choices, setChoices] = useState([
    "Claro, claro, claro. Mas como que eu acesso esses dados?",
  ]);
  const [messages, setMessages] = useState(initalMessages);
  useEffect(() => {}, [choices, messages]);

  function choseOption(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const choice = e.currentTarget.textContent as string;
    const index = dialog_first_character.findIndex(
      (option) => option.name == choice
    );
    const newUserMessage = {
      user: "Usuario",
      messages: [choice],
    };
    const newOtherMessage = {
      user: "Outro",
      messages: dialog_first_character[index].sendMessages,
    };
    setMessages((prevMessages) => [
      ...prevMessages,
      newUserMessage,
      newOtherMessage,
    ]);
    setChoices(dialog_first_character[index].choices);
    console.log(messages);
  }

  return (
    <>
      <div className="overflow-y-auto">
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
                <UserMessage key={index} message={msg} />
              ));
        })}

        {choices != null && (
          <div className="flex flex-col items-end">
            {choices.map((choice) => (
              <>
                <button
                  onClick={choseOption}
                  className="cursor-pointer rounded-xl rounded-tr-none hover:bg-amber-950 bg-amber-600 p-2 mx-2 text-white max-w-[70%] wrap-break-word"
                >
                  {choice}
                </button>
                <br />
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
