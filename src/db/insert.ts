export const scriptCreateDB = `
    CREATE TABLE IF NOT EXISTS TopFiveBr (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nickname TEXT NOT NULL,
                rank INTEGER,
                last_login DATETIME,
                created_at DATETIME
            );

    CREATE TABLE IF NOT EXISTS TopFiveBrBanckAccount (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                playerId INTEGER,
                robux INTEGER,
                FOREIGN KEY (playerId) REFERENCES TopFiveBr(id)
            );
    INSERT INTO TopFiveBr(nickname, rank, last_login, created_at) VALUES ('Saisoj', 1, '2025-04-25 12:00:00', '2006-09-01 12:00:00');
    INSERT INTO TopFiveBr(nickname, rank, last_login, created_at) VALUES ('imbatman', 3, '2025-04-23 12:00:00', '2025-04-21 12:00:00');
    INSERT INTO TopFiveBr(nickname, rank, last_login, created_at) VALUES ('puss_in_boots_2', 2, '2025-04-22 12:00:00', '2025-04-20 12:00:00');
    INSERT INTO TopFiveBr(nickname, rank, last_login, created_at) VALUES ('super_man', 5, '2025-04-15 12:00:00', '2025-03-09 12:00:00');
    INSERT INTO TopFiveBr(nickname, rank, last_login, created_at) VALUES ('uatizapp', 4, '2025-01-01 12:00:00', '2024-12-31 12:00:00');

    INSERT INTO TopFiveBrBanckAccount(playerId, robux) VALUES (1, 5);
    INSERT INTO TopFiveBrBanckAccount(playerId, robux) VALUES (2, 9999);
    INSERT INTO TopFiveBrBanckAccount(playerId, robux) VALUES (3, 10659);
    INSERT INTO TopFiveBrBanckAccount(playerId, robux) VALUES (4, 10658);
    INSERT INTO TopFiveBrBanckAccount(playerId, robux) VALUES (5, 11528);

    CREATE TABLE IF NOT EXISTS IBFIA (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    modoDeSeguranca TEXT NOT NULL
    );

    INSERT INTO IBFIA (id, nome, modoDeSeguranca) VALUES
    (1, 'Unidade Experimental 001', 'Ativado'),
    (2, 'Controle Central de Energia', 'Desativado'),
    (3, 'D.I.T.T.O', 'Ativado'),
    (4, 'Modulo Sensorial Alfa', 'Desativado'),
    (5, 'Assistente Beta', 'Desativado'),
    (6, 'Núcleo de Navegação Omega', 'Desativado'),
    (7, 'Estação de Análise Lambda', 'Ativado'),
    (8, 'Robô de Limpeza Zeta', 'Desativado'),
    (9, 'Módulo de Defesa Tático', 'Ativado'),
    (10, 'Drone de Reconhecimento XR-12', 'Desativado'),
    (11, 'Inteligência de Suporte V-3', 'Ativado'),
    (12, 'Nodo Neural Deltus', 'Desativado'),
    (13, 'Sistema Óptico-Gamma', 'Desativado'),
    (14, 'Terminal Remoto Delta', 'Ativado'),
    (15, 'Processador de Dados Bionic', 'Desativado');

    CREATE TABLE IF NOT EXISTS tarefasGerais (
    id INTEGER PRIMARY KEY,
    tarefaAtribuida TEXT NOT NULL
    );

    INSERT INTO tarefasGerais (id, tarefaAtribuida) VALUES
    (1, 'Monitoramento de rede'),
    (2, 'Análise de ruído externo'),
    (3, 'Desfragmentação de clusters'),
    (4, 'Calibração térmica'),
    (5, 'ELIMINATE DORY'),
    (6, 'Inspeção de válvulas hidráulicas'),
    (7, 'Atualização de firmware setorial'),
    (8, 'Varredura de protocolo redundante'),
    (9, 'Mapeamento de calor estrutural'),
    (10, 'Ajuste de temporizadores internos'),
    (11, 'Manutenção de núcleo'),
    (12, 'Recarga de módulos remotos'),
    (13, 'Limpeza do sistema óptico'),
    (14, 'Sincronização de backups críticos'),
    (15, 'Análise comportamental de operadores'),
    (16, 'Triagem de pacotes autônomos'),
    (17, 'Supervisão de IA de suporte'),
    (18, 'Diagnóstico do Cluster Z3'),
    (19, 'Verificação da blindagem externa'),
    (20, 'Sincronização de interface psíquica');

    CREATE TABLE IF NOT EXISTS chamados (
    id INTEGER PRIMARY KEY,
    descricao TEXT NOT NULL
    );

    INSERT INTO chamados (id, descricao) VALUES
    (1, 'Falha no sensor ótico da ala norte'),
    (2, 'Inconsistência na rotina da IA auxiliar'),
    (3, 'Presença de loop de memória em D.I.T.T.O'),
    (4, 'D.I.T.T.O se recusou a desligar durante manutenção'),
    (5, 'Teste de rede finalizado com sucesso'),
    (6, 'Anomalia de consumo no servidor B-9'),
    (7, 'Erro de leitura na central de dados'),
    (8, 'Falha intermitente no duto de refrigeração'),
    (9, 'Aviso de colisão não reconhecido'),
    (10, 'Perda de sinal no observador orbital'),
    (11, 'Alerta de violação física em terminal beta'),
    (12, 'Verificação concluída sem anomalias'),
    (13, 'Ruído suspeito captado em canal 7B'),
    (14, 'Rejeição de comandos pela IA K.O.R.A.'),
    (15, 'Acesso forçado ao núcleo do sistema'),
    (16, 'Conflito de prioridade entre processos de IA'),
    (17, 'Ciclo de energia quebrado no setor Zeta'),
    (18, 'Ajuste incorreto de padrões térmicos'),
    (19, 'D.I.T.T.O executou comando não autorizado'),
    (20, 'Relatório encerrado por tempo limite');

    CREATE TABLE IF NOT EXISTS cidades (
    id_cidade INTEGER PRIMARY KEY,
    nome_cidade TEXT NOT NULL
    );

    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (0, 'Good Field');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (1, 'São Paulo');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (2, 'Rio de Janeiro');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (3, 'Brasília');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (4, 'Fortaleza');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (5, 'Salvador');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (6, 'Belo Horizonte');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (7, 'Curitiba');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (8, 'Manaus');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (9, 'Porto Alegre');
    INSERT INTO Cidades (id_cidade, nome_cidade) VALUES (10, 'Recife');

    CREATE TABLE IF NOT EXISTS subestacoes (
    id_subestacao INTEGER PRIMARY KEY,
    id_cidade INTEGER,
    responsavel TEXT NOT NULL,
    FOREIGN KEY (id_cidade) REFERENCES Cidades(id_cidade)
    );

    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1001, 10, 'João Silva');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1002, 2, 'Maria Santos');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1003, 4, 'Pedro Oliveira');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1004, 0, 'Débora Machado');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1005, 1, 'Ana Souza');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1006, 5, 'José Lima');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1007, 8, 'Maria Pereira');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1008, 6, 'Francisco Ferreira');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1009, 7, 'Isabela Costa');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1010, 3, 'Carlos Gomes');
    INSERT INTO Subestacoes (id_subestacao, id_cidade, responsavel) VALUES (1011, 9, 'Eduarda Alves');

    CREATE TABLE IF NOT EXISTS MedicoesEnergia (
    id_registro INTEGER PRIMARY KEY,
    id_subestacao INTEGER,
    tensao INTEGER,
    status TEXT NOT NULL,
    FOREIGN KEY (id_subestacao) REFERENCES Subestacoes(id_subestacao)
    );

    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (201, 10, 220, 'Estável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (202, 11, 110, 'Instável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (203, 12, 95, 'Instável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (204, 12, 90, 'Instável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (205, 10, 221, 'Estável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (206, 11, 113, 'Instável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (207, 12, 92, 'Instável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (208, 12, 89, 'Instável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (209, 11, 219, 'Estável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (210, 12, 93, 'Instável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (211, 10, 220, 'Estável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (212, 11, 112, 'Instável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (213, 12, 88, 'Instável');
    INSERT INTO MedicoesEnergia (id_registro, id_subestacao, tensao, status) VALUES (214, 12, 87, 'Instável');

    CREATE TABLE IF NOT EXISTS VoosRegistrados (
    id_voo INTEGER PRIMARY KEY,
    numero_voo TEXT NOT NULL,
    passageiro TEXT NOT NULL,
    origem TEXT NOT NULL,
    destino TEXT NOT NULL,
    data_voo DATE NOT NULL,
    companhia TEXT NOT NULL,
    status_bagagem TEXT NOT NULL,
    conteudo_mala TEXT NOT NULL
    );

    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1001, 'FZ972', 'D. Machado', 'San Francisco', 'Porto Alegre', '2025-03-14', 'FlyAtlantic', 'Desaparecida', 'Chip de DNA Sintético');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1002, 'FZ381', 'Fernanda Lima', 'Dubai', 'Curitiba', '2025-03-24', 'AirSentry', 'Entregue', 'Brinquedos infantis');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1003, 'FZ596', 'Deborah M.', 'San Francisco', 'Munique', '2025-03-22', 'SkyBridge', 'Entregue', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1004, 'FZ624', 'Deborah M.', 'San Francisco', 'São Paulo', '2025-03-07', 'FlyAtlantic', 'Desaparecida', 'Eletrônicos diversos');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1005, 'FZ986', 'Carlos Henrique', 'Nova York', 'Fortaleza', '2025-03-02', 'FlyAtlantic', 'Entregue', 'Roupas e acessórios');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1006, 'FZ810', 'João Lins', 'Miami', 'Salvador', '2025-03-31', 'Eagle Express', 'Desaparecida', 'Eletrônicos diversos');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1007, 'FZ365', 'André Almeida', 'San Francisco', 'Rio de Janeiro', '2025-03-10', 'GlobalWings', 'Entregue', 'Brinquedos infantis');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1008, 'FZ424', 'André Almeida', 'Dubai', 'Salvador', '2025-03-25', 'SkyBridge', 'Entregue', 'Brinquedos infantis');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1009, 'FZ271', 'Lucas Torres', 'Havana', 'São Paulo', '2025-03-16', 'AirSentry', 'Desaparecida', 'Documentos empresariais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1010, 'FZ597', 'João Lins', 'Frankfurt', 'Rio de Janeiro', '2025-03-21', 'Eagle Express', 'Entregue', 'Eletrônicos diversos');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1011, 'FZ908', 'João Lins', 'San Francisco', 'Porto Alegre', '2025-03-27', 'SkyBridge', 'Entregue', 'Presentes de família');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1012, 'FZ845', 'João Lins', 'Frankfurt', 'Fortaleza', '2025-03-12', 'SkyBridge', 'Entregue', 'Roupas e acessórios');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1013, 'FZ886', 'Deborah M.', 'São Paulo', 'Paris', '2025-03-22', 'Eagle Express', 'Entregue', 'Documentos empresariais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1014, 'FZ372', 'João Lins', 'Havana', 'Rio de Janeiro', '2025-03-11', 'FlyAtlantic', 'Entregue', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1015, 'FZ797', 'Deborah M.', 'Lisboa', 'Curitiba', '2025-03-01', 'AirSentry', 'Desaparecida', 'Brinquedos infantis');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1016, 'FZ355', 'Clara Duarte', 'Paris', 'Rio de Janeiro', '2025-03-07', 'SkyBridge', 'Entregue', 'Equipamentos esportivos');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1017, 'FZ562', 'Débora Machado', 'Frankfurt', 'Lisboa', '2025-03-10', 'SkyBridge', 'Entregue', 'Presentes de família');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1018, 'FZ315', 'Fernanda Lima', 'Lisboa', 'Lisboa', '2025-03-10', 'GlobalWings', 'Entregue', 'Livros e revistas');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1019, 'FZ264', 'D. Machado', 'Nova York', 'Munique', '2025-03-30', 'Eagle Express', 'Entregue', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1020, 'FZ537', 'Clara Duarte', 'Frankfurt', 'Recife', '2025-03-06', 'Eagle Express', 'Desaparecida', 'Presentes de família');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1021, 'FZ657', 'Deborah M.', 'Frankfurt', 'Recife', '2025-03-02', 'Eagle Express', 'Entregue', 'Roupas e acessórios');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1022, 'FZ258', 'João Lins', 'São Paulo', 'Porto Alegre', '2025-03-16', 'FlyAtlantic', 'Entregue', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1023, 'FZ530', 'Débora Machado', 'San Francisco', 'Curitiba', '2025-03-25', 'SkyBridge', 'Entregue', 'Eletrônicos diversos');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1024, 'FZ239', 'Deborah M.', 'São Paulo', 'São Paulo', '2025-03-03', 'FlyAtlantic', 'Entregue', 'Presentes de família');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1025, 'FZ183', 'Clara Duarte', 'Miami', 'Curitiba', '2025-03-11', 'Eagle Express', 'Entregue', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1026, 'FZ333', 'D. Machado', 'São Paulo', 'Paris', '2025-03-26', 'GlobalWings', 'Desaparecida', 'Chip de DNA Sintético');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1027, 'FZ653', 'Clara Duarte', 'São Paulo', 'Paris', '2025-03-11', 'AirSentry', 'Entregue', 'Livros e revistas');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1028, 'FZ624', 'André Almeida', 'Miami', 'Paris', '2025-03-27', 'Eagle Express', 'Desaparecida', 'Brinquedos infantis');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1029, 'FZ174', 'D. Machado', 'São Paulo', 'Salvador', '2025-03-30', 'SkyBridge', 'Entregue', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1030, 'FZ304', 'João Lins', 'Paris', 'Recife', '2025-03-25', 'FlyAtlantic', 'Entregue', 'Equipamentos esportivos');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1031, 'FZ647', 'Fernanda Lima', 'Havana', 'Salvador', '2025-03-05', 'FlyAtlantic', 'Entregue', 'Roupas e acessórios');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1032, 'FZ947', 'Deborah M.', 'Lisboa', 'São Paulo', '2025-03-31', 'Eagle Express', 'Desaparecida', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1033, 'FZ926', 'Lucas Torres', 'Dubai', 'Salvador', '2025-03-18', 'AirSentry', 'Entregue', 'Brinquedos infantis');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1034, 'FZ596', 'Deborah M.', 'Lisboa', 'Paris', '2025-03-02', 'FlyAtlantic', 'Entregue', 'Brinquedos infantis');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1035, 'FZ913', 'Débora Machado', 'Paris', 'Rio de Janeiro', '2025-03-03', 'AirSentry', 'Entregue', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1036, 'FZ708', 'Débora Machado', 'Shenzhen', 'São Paulo', '2025-03-04', 'Eagle Express', 'Desaparecida', 'Chip Militar Orion-9');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1037, 'FZ892', 'Lucas Torres', 'Lisboa', 'Rio de Janeiro', '2025-03-25', 'GlobalWings', 'Entregue', 'Roupas e acessórios');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1038, 'FZ898', 'André Almeida', 'Paris', 'Porto Alegre', '2025-03-01', 'FlyAtlantic', 'Entregue', 'Presentes de família');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1039, 'FZ201', 'Lucas Torres', 'Nova York', 'Munique', '2025-03-14', 'FlyAtlantic', 'Desaparecida', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1040, 'FZ569', 'Lucas Torres', 'São Paulo', 'Porto Alegre', '2025-03-18', 'Eagle Express', 'Entregue', 'Equipamentos esportivos');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1041, 'FZ655', 'Lucas Torres', 'Miami', 'Fortaleza', '2025-03-19', 'SkyBridge', 'Desaparecida', 'Livros e revistas');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1042, 'FZ593', 'Débora Machado', 'Nova York', 'Salvador', '2025-03-17', 'SkyBridge', 'Entregue', 'Presentes de família');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1043, 'FZ572', 'Maria Silva', 'Miami', 'Salvador', '2025-03-01', 'FlyAtlantic', 'Desaparecida', 'Instrumentos musicais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1044, 'FZ318', 'Carlos Henrique', 'Paris', 'Salvador', '2025-03-21', 'GlobalWings', 'Entregue', 'Livros e revistas');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1045, 'FZ558', 'Lucas Torres', 'Havana', 'Recife', '2025-03-01', 'Eagle Express', 'Entregue', 'Equipamentos esportivos');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1046, 'FZ106', 'Maria Silva', 'Dubai', 'Fortaleza', '2025-03-20', 'FlyAtlantic', 'Entregue', 'Livros e revistas');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1047, 'FZ831', 'Fernanda Lima', 'San Francisco', 'São Paulo', '2025-03-05', 'Eagle Express', 'Desaparecida', 'Documentos empresariais');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1048, 'FZ204', 'João Lins', 'Dubai', 'Salvador', '2025-03-27', 'SkyBridge', 'Desaparecida', 'Eletrônicos diversos');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1049, 'FZ236', 'Deborah M.', 'São Paulo', 'Porto Alegre', '2025-03-25', 'SkyBridge', 'Entregue', 'Presentes de família');
    INSERT INTO VoosRegistrados (id_voo, numero_voo, passageiro, origem, destino, data_voo, companhia, status_bagagem, conteudo_mala) VALUES (1050, 'FZ239', 'Fernanda Lima', 'San Francisco', 'Curitiba', '2025-03-08', 'GlobalWings', 'Entregue', 'Livros e revistas');

    CREATE TABLE IF NOT EXISTS SenhasCriptografadas (
        id_senha INTEGER PRIMARY KEY,
        id_unidade INTEGER,
        senha_criptografada TEXT NOT NULL,
        FOREIGN KEY (id_unidade) REFERENCES IBFIA(id)
    );

    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (1, 1, '43F9A-82B1C');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (2, 2, '98AA7-3F4E9');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (3, 3, 'DITTO');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (4, 4, 'B1F2C-66ZZT');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (5, 5, 'FF12A-QR879');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (6, 6, '449XE-BAS90');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (7, 7, '119ZZ-KLO92');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (8, 8, '00110-DDF56');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (9, 9, '5X1VB-ZZ192');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (10, 10, 'DI911-45XDC');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (11, 3, 'DITTO-KILL');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (12, 12, '82AA1-KKLOP');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (13, 13, '73BBD-99823');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (14, 14, 'XYZZ2-D8EER');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (15, 15, 'ZT1XA-98012');
    INSERT INTO SenhasCriptografadas (id_senha, id_unidade, senha_criptografada) VALUES (16, 16, 'DTT00-END32');

    `;
