export const dialog_first_character: IDialogOptions[] = [
  {
    name: "Claro, claro, claro. Mas como que eu acesso esses dados?",
    sendMessages: [
      "Tá vendo aquele ícone na área de trabalho, abre ele. A senha é 6969",
      "Você sabe como usar ainda né?",
      "Você parece meio perdida kkkk brincadeira",
      "Qualquer coisa só acessar a aba de “ajuda” e ver o que cada um faz",
    ],
    choices: ["Ah, blz"],
  },
  {
    name: "Ah, blz",
    sendMessages: ["Qualquer coisa só perguntar o/"],
    choices: [
      "Você lembra do nickname dele?",
      "Você lembra a idade dele?",
      "Quantos Robux foram roubados?",
    ],
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
