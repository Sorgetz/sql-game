import { useEffect, useState } from "react";
import { Choices } from "./choices";
import { FriendMessage } from "./friendMessage";
import { UserMessage } from "./UserMessage";
import { dialog_first_character, IMessages } from "./dialogs";

export function Messages( {newWord} : {newWord: (text: string) => void} ) {
	const initalMessages : IMessages[] = [{
		user: 'Outro',
		messages: ['Eae, campeão, tudo bueno?', 'Como vais?', 'fiquei sabendo de algo top']
	}]

	const [choice, setChoices] = useState('opcao1')
	const [messages, setMessages] = useState(initalMessages)
	useEffect(() => {
	}, [choice, messages])

	function choseOption(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		const choice = e.currentTarget.textContent as string;
		const index = dialog_first_character.findIndex(option => option.name == choice)
		const newUserMessage = {
			user: 'Usuario',
			messages: [choice]
		}
		const newOtherMessage = {
			user: 'Outro',
			messages: dialog_first_character[index].sendMessages
		}
		setMessages(prevMessages => [...prevMessages, newUserMessage, newOtherMessage]);
		console.log(messages);
	}

	function getChoicesOptions() {
		const index = dialog_first_character.findIndex(option => option.name == choice)
		return dialog_first_character[index].choices
	}

	return (
		<>
			<div className="border-2 border-amber-950 w-[70%] h-screen" >
				{messages.map((obj, index) => {
					return obj.user === 'Outro' ? (
						obj.messages.map((msg, idx) => (
							<FriendMessage key={`${index}-${idx}`} message={msg} />
						))
					) : (
						obj.messages.map((msg, idx) => (
							<UserMessage key={index} message={msg} />
						))
					);
				})}

				{choice != null &&
					<div className="flex flex-col items-end">
						{getChoicesOptions().map(choice =>
							<>
								<button onClick={choseOption} className="cursor-pointer rounded-xl rounded-tr-none hover:bg-amber-950 bg-amber-600 p-2 mx-2 text-white max-w-[70%] wrap-break-word">
									{choice}
								</button>
								<br />
							</>
						)}
					</div>
				}
				<span className="text-red">halo</span>
			</div>
		</>
	)
}