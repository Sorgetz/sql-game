export const dialog_first_character: IDialogOptions[] = [
  {
    name: "PrimeiraMensagem",
    sendMessages: [
      "Cara, finalmente encontrei o nosso suspeito daquele caso de roubo digital de Robux! Ele está na tabela [&TopFiveBr&]",
    ],
    choices: ["Claro, claro, claro. Mas como que eu acesso esses dados?"],
  },
  {
    name: "Claro, claro, claro. Mas como que eu acesso esses dados?",
    sendMessages: [
      "Tá vendo aquele ícone na área de trabalho, abre ele. A senha é 6969",
      "Você sabe como usar ainda né?",
      "Você parece meio perdida kkkk brincadeira",
      "Qualquer coisa só acessar a aba de “ajuda” e ver o que cada um faz",
    ],
    choices: ["Tranquilo! Valeu"],
  },
  {
    name: "Tranquilo! Valeu",
    sendMessages: [
      "Que isso, nós somos colegas de trabalho né, qualquer coisa só chamar o/",
      "Ahh, lembrei agora. Nem todos os dados estão disponíveis somente naquela tabela",
      "Os dados 'bancários' de cada player está nessa outra aqui: [&TopFiveBrBanckAccount&]",
      "Então você vai precisar analisar as duas para poder achar o culpado, beleza?",
      "Mas acho que não preciso te explicar isso né, afinal, você é a expert do assunto",
    ],
    choices: [
      "Você lembra do nickname dele?",
      "Você lembra a idade dele?",
      "Quantos Robux foram roubados?",
    ],
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
    name: "Você lembra do nickname dele?",
    sendMessages: [
      "Cara, pior que não",
      "Mas eu me recordo de comentarem que tinha haver com algum superherói ou algum personagem que usava capa",
      "ou algo assim.",
    ],
    choices: [
      "Você lembra do nickname dele?",
      "Você lembra quando ele jogou pela última vez?",
      "Quantos Robux foram roubados?",
    ],
  },
  {
    name: "Você lembra quando ele jogou pela última vez?",
    sendMessages: [
      "Aqui no registro diz que o roubo ocorreu entre os dias 20 e 25 de Abril",
    ],
    choices: [
      "Você lembra do nickname dele?",
      "Você lembra quando ele jogou pela última vez?",
      "Quantos Robux foram roubados?",
    ],
  },
  {
    name: "Quantos Robux foram roubados?",
    sendMessages: [
      " O usuário que relatou o erro não quis dizer realmente a quantidade roubada",
      "mas deixou claro que ficou algo em torno dos 10.000",
      "Ele também enfatizou bastante o quanto ele havia investido no jogo e que agora estava pobre",
      "e que queria que tudo isso fosse resolvido rapidamente",
    ],
    choices: [
      "Você lembra do nickname dele?",
      "Você lembra quando ele jogou pela última vez?",
      "Quantos Robux foram roubados?",
    ],
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

export interface ICharacter {
  name: string;
  dialog_options: IDialogOptions[];
}

export const dialogs: ICharacter[] = [
  {
    name: "Josias",
    dialog_options: dialog_first_character,
  },
  {
    name: "Bianca",
    dialog_options: [
      {
        name: "PrimeiraMensagem",
        sendMessages: ["Testando ei som ei"],
        choices: ["ok"],
      },
      {
        name: "ok",
        sendMessages: ["concordo"],
        choices: ["Ah, blz"],
      },
    ],
  },
];
