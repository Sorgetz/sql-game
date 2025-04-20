export const dialog_first_character: IDialogOptions[] = [
  {
    name: "opcao1",
    sendMessages: ["teste"],
    choices: ["opcao2", "opcao3"],
  },
  {
    name: "opcao2",
    sendMessages: ["Vc [&escolhe&] a opcao 2, foda", ":)", "como faz emoji"],
    choices: ["opcao1", "opcao3"],
  },
  {
    name: "opcao3",
    sendMessages: ["Vc escolheu a opcao 3, foda", ":)", "COMO DIMINIU A FONTE"],
    choices: ["opcao1", "opcao2"],
  },
];

interface IDialogOptions {
  name: string;
  sendMessages: string[];
  choices: string[];
}

// interface IMessages {
//     charactherName : string,
//     messages : IDialogOptions[]
// }

export interface IMessages {
  user: string;
  messages: string[];
}
