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
    `;
