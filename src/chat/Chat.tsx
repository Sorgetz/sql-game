// export function Chat() {
//   const [character, setCharacter] = useState<ICharacter>(testDialogs[0]);

//   const [allMessages, setAllMessages] = useState<Record<string, IMessages[]>>(
//     () => {
//       const firstChar = testDialogs[0];
//       return {
//         [firstChar.name]: [
//           {
//             user: "Outro",
//             messages: firstChar.dialog_options[0].sendMessages,
//           },
//         ],
//       };
//     }
//   );

//   const currentMessages = allMessages[character.name] || [];

//   const [choices, setChoices] = useState<string[] | null>(
//     testDialogs[0].dialog_options[0].choices
//   );

//   function changeChat(newCharacter: ICharacter) {
//     setCharacter(newCharacter);

//     setAllMessages((prev) => {
//       if (prev[newCharacter.name]) return prev;

//       return {
//         ...prev,
//         [newCharacter.name]: [
//           {
//             user: "Outro",
//             messages: newCharacter.dialog_options[0].sendMessages,
//           },
//         ],
//       };
//     });

//     setChoices(newCharacter.dialog_options[0].choices);
//   }

//   function updateMessagesForCurrentCharacter(newMessages: IMessages[]) {
//     setAllMessages((prev) => ({
//       ...prev,
//       [character.name]: newMessages,
//     }));
//   }

//   return (
//     <div className="w-100 h-100 flex">
//       <Sidebar changeChat={changeChat} />
//       <Messages
//         character={character}
//         messages={currentMessages}
//         setMessages={updateMessagesForCurrentCharacter}
//         choices={choices}
//         setChoices={setChoices}
//         newWord={newWord}
//       />
//     </div>
//   );
// }
