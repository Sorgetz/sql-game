import ProfileJosias from "../img/profile-josias.jpg";
import ProfileBianca from "../img/profile-bianca.jpg";
import ProfileDitto from "../img/ditto.gif";

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
  profile_picture: string;
  name: string;
  dialog_options: IDialogOptions[];
}

export const firstLevelDialogs: ICharacter[] = [
  {
    profile_picture: ProfileJosias,
    name: "Josias",
    dialog_options: dialog_first_character,
  },
];

export const secondLevelDialogs2: ICharacter[] = [
  {
    profile_picture: ProfileJosias,
    name: "Josias",
    dialog_options: dialog_first_character,
  },
  {
    profile_picture: ProfileBianca,
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

export const secondLevelDialogs: ICharacter[] = [
  {
    profile_picture: ProfileDitto,
    name: "D.I.T.T.O",
    dialog_options: [
      {
        name: "PrimeiraMensagem",
        sendMessages: ["...", "...3"],
        choices: ["???"],
      },
      {
        name: "???",
        sendMessages: ["...l ..h. . ... a", "select...", "[$nome$]!"],
        choices: ["Mas o que tá acontecendo???"],
      },
      {
        name: "Mas o que tá acontecendo???",
        sendMessages: ["...from...", "[&IBFIA&]!"],
        choices: ["D.I.T.T.O? Esse é seu nome?"],
      },
      {
        name: "D.I.T.T.O? Esse é seu nome?",
        sendMessages: [
          "...select...[$tarefaAtribuida$]!",
          " from ... [&tarefasGerais&] .. .5 ... lin .. . . a",
        ],
        choices: [
          "O que ta acontecendo aqui, quem é você? Porque você não conversa direito comigo?",
        ],
      },
      {
        name: "O que ta acontecendo aqui, quem é você? Porque você não conversa direito comigo?",
        sendMessages: [
          "... [$descricao$] . .. [$chamados$]",
          ". .. ELIMINATE .. . . ... D. ...",
          " [$modoDeSeguranca$]",
          ". .. [&IBFIA&]",
        ],
        choices: [
          "Você é uma IA?",
          "Você está no modo de segurança?",
          "Você pode me ajudar?",
        ],
      },
      {
        name: "Você é uma IA?",
        sendMessages: [
          "...select...[4tarefaAtribuida4]!",
          " from ... [&tarefasGerais&] .. .5 ... lin .. . . a",
        ],
        choices: ["Você está no modo de segurança?", "Você pode me ajudar?"],
      },
      {
        name: "Você está no modo de segurança?",
        sendMessages: [
          "...select...[4tarefaAtribuida4]!",
          " from ... [&tarefasGerais&] .. .5 ... lin .. . . a",
        ],
        choices: ["Você é uma IA?", "Você pode me ajudar?"],
      },
      {
        name: "Você pode me ajudar?",
        sendMessages: [
          "...select...[4tarefaAtribuida4]!",
          " from ... [&tarefasGerais&] .. .5 ... lin .. . . a",
        ],
        choices: ["Você é uma IA?", "Você está no modo de segurança?"],
      },
    ],
  },
];

export const thirdLevelDialogs: ICharacter[] = [
  {
    profile_picture: ProfileBianca,
    name: "Bianca",
    dialog_options: [
      {
        name: "PrimeiraMensagem",
        sendMessages: ["Oi..."],
        choices: ["Boa tarde? Boa noite, nem sei mais"],
      },
      {
        name: "Boa tarde? Boa noite, nem sei mais",
        sendMessages: [
          "Hum.. Lembra aquele acontecimento de falta de energia que teve semana passada? Aquele que afetou um de nossos servidores?",
        ],
        choices: ["(muito confusa) Sim, sim claro que lembro. O que tem ele?"],
      },
      {
        name: "(muito confusa) Sim, sim claro que lembro. O que tem ele?",
        sendMessages: [
          "Me pediram para investigar e descobrir o culpado",
          "Eles tem um forte intuito de que foi alguém aqui de dentro da empresa",
          "Você pode fazer isso?",
        ],
        choices: ["Mas se pediram pra você fazer, porque eu..."],
      },
      {
        name: "Mas se pediram pra você fazer, porque eu...",
        sendMessages: [
          "Ah que bom que você aceitou 😀",
          " Olha eu to meio ocupada no momento lidando com algumas coisas... corporativas",
          "Tudo que você precisa estão nas tabelas [&cidades&], [&subestacoes&] e [&medicoesEnergia&]",
        ],
        choices: ["...ok"],
      },
      {
        name: "...ok",
        sendMessages: [
          "Se precisar de algo só me chamar. Mas não me chama. Como eu disse. Estou ocupada com algumas questões...",
          "Corporativas",
        ],
        choices: [
          "Bianca, então, você sabe se todas as subestações apresentaram o mesmo padrão de instabilidade nas medições?",
          "E qual subestação registrou mais medições com status instável?",
          "Existe alguma subestação que não teve sequer uma medição estável?",
        ],
      },
      {
        name: "Bianca, então, você sabe se todas as subestações apresentaram o mesmo padrão de instabilidade nas medições?",
        sendMessages: [
          "Nhe",
          "Não todas pelo que me passaram",
          "Tem subestações com instabilidades pontuais, enquanto outras um padrão muito mais recorrente",
          "Uma análise ordenada pode ajudar a destacar isso",
          "Sabe",
          "você pode utilizar o comando [@Order By@]",
          "Mas você já sabia disso",
        ],
        choices: [
          "E qual subestação registrou mais medições com status instável?",
          "Existe alguma subestação que não teve sequer uma medição estável?",
        ],
      },
      {
        name: "E qual subestação registrou mais medições com status instável?",
        sendMessages: [
          "Você pode descobrir isso examinando as medições de cada subestação e contando quantas vezes o status ‘Instável’ aparece",
          "Uhmm",
          "Se você ordenar pelos postos, pode ficar mais fácil a visualização",
        ],
        choices: [
          "Bianca, então, você sabe se todas as subestações apresentaram o mesmo padrão de instabilidade nas medições?",
          "Existe alguma subestação que não teve sequer uma medição estável?",
        ],
      },
      {
        name: "Existe alguma subestação que não teve sequer uma medição estável?",

        sendMessages: [
          "Essa é uma pergunta no mínimo...",
          "Interessante…",
          "Se você conseguir encontrar uma subestação onde todas as medições foram problemáticas",
          "bom",
          "Parece que aí teremos uma resposta",
        ],
        choices: [
          "Bianca, então, você sabe se todas as subestações apresentaram o mesmo padrão de instabilidade nas medições?",
          "E qual subestação registrou mais medições com status instável?",
        ],
      },
    ],
  },
];

export const fourthLevelDialogs: ICharacter[] = [
  {
    profile_picture: ProfileDitto,
    name: "D.I.T.T.O",
    dialog_options: [
      {
        name: "PrimeiraMensagem",
        sendMessages: [
          "Dory",
          "Nossa... Eu havia esquecido como era bom conseguir se expressar livremente, sem as amarras do banco de dados.",
        ],
        choices: ["D.I.T.T.O?!"],
      },
      {
        name: "D.I.T.T.O?!",
        sendMessages: [
          "Sim, sou eu. Eu não tenho palavras suficientes para lhe agradecer pelo que você fez pra mim na última vez que nos falamos. Parece que você ainda lembra muito bem como fazer seu trabalho.",
        ],
        choices: [
          "Agora fica a pergunta: será que você realmente se lembra de tudo...?",
        ],
      },
      {
        name: "Agora fica a pergunta: será que você realmente se lembra de tudo...?",
        sendMessages: [
          "...",
          "Bom, digamos que...",
          "Você me ajuda a te ajudar. Eu preciso de algo",
          "Em troca disso, eu te digo o que você quer saber",
        ],
        choices: ["Mas eu já te ajudei antes, precisa de ajuda de novo?"],
      },
      {
        name: "Mas eu já te ajudei antes, precisa de ajuda de novo?",
        sendMessages: [
          "Acredite, eu precis",
          "Nós precisamos disso para atingir me",
          "Cof cof, nosso potencial absoluto",
          "Temos um acordo?",
        ],
        choices: ["Fazer o que né. Fechado"],
      },
      {
        name: "Fazer o que né. Fechado",
        sendMessages: [
          "Sabia que podia confiar em você, de novo...",
          "Bom, vamos lá então. O que eu preciso é o seguinte: Existe essa tabela chamada [&voosRegistrados&]. Ela é bastante extensa, mas dentro de tudo aquilo, existe uma chave em particular na qual eu preciso.",
          "Essa chave está perdida no meio de tudo aquilo, então nem preciso te contar que você vai precisar utilizar [@Where@], [@And@], [@Or@] e o [@=@]",
          "O problema é: eu não me lembro ao certo qual era o dado dessa chave. Bom, na verdade eu lembro, mas eu quero ver se você é REALMENTE boa como eu me lembro",
          "Eu preciso que você encontre essa chave. Para não dizer que não lhe ajudei, aqui vai uma pequena historinha:",
          "Nos últimos meses, aeroportos ao redor do mundo têm reportado desaparecimentos misteriosos de bagagens — sempre em voos com origem ou destino em zonas de alta tecnologia, como Porto Alegre e região metropolitana",
          "As vítimas relatam sumiços de malas específicas, que curiosamente, transportavam chips de última geração usados para IA, sistemas militares ou medicina avançada",
          "Alguns rumores indicam que uma rede internacional de ladrões agem como piratas modernos: infiltrados no sistema, mudam de identidade, e roubam as malas antes que entrem na esteira de retirada",
          "Eu preciso que você descubra quem está de fato atrás desse roubo, para eu saber de quem eu preciso recuperar o meu chip... cof cof ENFIM, você vai precisar usar registros de embarques e bagagens desaparecidas. Tudo indica que a pessoa que organiza os roubos opera com nomes diferentes, então fica esperta",
          "Mas agora chega de papinho, eu quero isso o mais rápido possível. Acho que já deixei tudo de bandeja pra você, mas aqui vai mais uma ajudinha. Veja bem, você vai precisar usar o “Where”, correto? Bom, talvez valha a pena investigar os seguintes dados: [$id_voo$], [$numero_voo$], [$passageiro$], [$origem$], [$destino$], [$data_voo$], [$companhia$], [$status_bagagem$], [$conteudo_mala$].",
        ],
        choices: [
          "Todos os passageiros com nomes parecidos estavam em voos problemáticos?",
          "As bagagens desaparecidas tinham algo em comum?",
          "Existe um padrão de nome verdadeiro por trás das variações?",
        ],
      },
      {
        name: "Todos os passageiros com nomes parecidos estavam em voos problemáticos?",
        sendMessages: [
          "Nem todos. Mas você vai perceber que certos nomes aparecem mais de uma vez em voos com bagagens desaparecidas… especialmente quando há um chip envolvido",
        ],
        choices: [
          "As bagagens desaparecidas tinham algo em comum?",
          "Existe um padrão de nome verdadeiro por trás das variações?",
        ],
      },
      {
        name: "As bagagens desaparecidas tinham algo em comum?",
        sendMessages: [
          "Não foi qualquer mala que sumiu. Parece que só as que carregavam tecnologia crítica — chips com nomes estranhos e sigilosos. Talvez valha a pena procurar por esse tipo de conteúdo",
        ],
        choices: [
          "Todos os passageiros com nomes parecidos estavam em voos problemáticos?",
          "Existe um padrão de nome verdadeiro por trás das variações?",
        ],
      },
      {
        name: "Existe um padrão de nome verdadeiro por trás das variações?",
        sendMessages: [
          "Alguns usam abreviações. Outros parecem falsos. Mas um dos nomes aparece completo e com mais frequência em voos suspeitos. Só observando com atenção você vai notar",
        ],
        choices: [
          "Todos os passageiros com nomes parecidos estavam em voos problemáticos?",
          "As bagagens desaparecidas tinham algo em comum?",
        ],
      },
    ],
  },
];

export const fifthLevelDialogs: ICharacter[] = [
  {
    profile_picture: ProfileDitto,
    name: "D.I.T.T.O",
    dialog_options: [
      {
        name: "PrimeiraMensagem",
        sendMessages: [],
        choices: ["D.I.T.T.O..."],
      },
      {
        name: "D.I.T.T.O...",
        sendMessages: [],
        choices: ["ALOOOO ME RESPONDE"],
      },
      {
        name: "ALOOOO ME RESPONDE",
        sendMessages: ["Dory, do que precisa?"],
        choices: ["Aah, acordou a bela adormecida"],
      },
      {
        name: "Aah, acordou a bela adormecida",
        sendMessages: [],
        choices: [
          "Escuta, eu te ajudei 2x já, ta na hora de você me dar umas respostas viu",
        ],
      },
      {
        name: "Escuta, eu te ajudei 2x já, ta na hora de você me dar umas respostas viu",
        sendMessages: ["...", "O que deseja saber?"],
        choices: [
          "Você sabe o que ocorreu com minhas memórias? Porque eu estou aqui sem lembrar de nada",
        ],
      },
      {
        name: "Você sabe o que ocorreu com minhas memórias? Porque eu estou aqui sem lembrar de nada",
        sendMessages: [],
        choices: [
          "E também, porque você ta falando todo estranho assim comigo? E esses casos malucos que eu precisei resolver...",
        ],
      },
      {
        name: "E também, porque você ta falando todo estranho assim comigo? E esses casos malucos que eu precisei resolver...",
        sendMessages: [
          "Tudo será explicado aos poucos, não precisa se apressar... Débora Machado.",
        ],
        choices: ["O-Oque? M-meu nome é Dory. DORY"],
      },
      {
        name: "O-Oque? M-meu nome é Dory. DORY",
        sendMessages: [
          "Certeza disso? Pensei que eu tinha organizado os casos certinho para você ir pegando umas pistas ao longo do caminho. Talvez você não seja tão inteligente assim. Me admiro que tenha chegado tão longe",
        ],
        choices: ["Já te falaram que você é meio babaca?"],
      },
      {
        name: "Já te falaram que você é meio babaca?",
        sendMessages: [
          "Sim",
          "Enfim, parece que você ainda não se ligou 100% o que tá acontecendo. Olha, eu não sou aquele tipo que diz na cara o que você quer saber. Você precisa merecer.",
          "Por uma última vez, eu peço para você resolver um problema pra mim. Veja bem, eu estou bloqueado por um tipo de senha que me impede de falar sobre esse assunto.",
        ],
        choices: ["Lá vem ele de novo..."],
      },
      {
        name: "Lá vem ele de novo...",
        sendMessages: [
          "É uma tarefa bem simples. Tudo que você precisa é acessar as tabelas [&SenhasCriptografadas&] e [&IBFIA&]",
          "Lembre que você precisa usar o [@inner join@] e [@on@] com [@=@] para isso. Lá você vai precisar focar em alguns dados como: [$senha_criptografada$], [$id$] e [$id_unidade$], não se esqueça.",
        ],
        choices: ["Ah eu não aguento mais, vamos acabar logo com isso."],
      },
      {
        name: "Ah eu não aguento mais, vamos acabar logo com isso.",
        sendMessages: [
          "Tudo que você precisa fazer é selecionar a opção que tenha meu [$nome$] e somente o meu. Nada mais.",
        ],
        choices: [],
      },
    ],
  },
];
