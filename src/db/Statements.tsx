import { useEffect, useState } from "react";
import initSqlJs, { Database } from "sql.js";

async function createDB() {
  const SQL = await initSqlJs({
    locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
  });
  const db = new SQL.Database();
  const sql = `
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
  db.run(sql);
  return db;
}

function runQuery(query: string, db: Database) {
  try {
    const result = db.exec(query);
    const columns = result[0] ? result[0].columns : [];
    const values = result[0] ? result[0].values : [];

    return { columns, values };
  } catch (e) {
    console.log("ainda nao");
  }
}

export function Statements({
  sqlQuery,
  validateAnswer,
}: {
  sqlQuery: string;
  validateAnswer: (row: initSqlJs.SqlValue[]) => void;
}) {
  const [columns, setColumns] = useState<string[]>([]);
  const [values, setValues] = useState<initSqlJs.SqlValue[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = await createDB();
      if (sqlQuery != "") {
        const result = runQuery(sqlQuery, db);
        if (result) {
          setColumns(result.columns);
          setValues(result.values);
        }
      }
    };
    fetchData();
  }, [sqlQuery]);

  return (
    sqlQuery.length > 0 && (
      <div className="relative flex flex-col overflow-x-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border max-h-100">
        <table className=" text-left table-auto ">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  className="p-4 border-b border-slate-300 bg-slate-50"
                  key={index}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((row, rowIndex) => (
              <tr
                onClick={() => validateAnswer(row)}
                className="hover:bg-slate-300"
                key={rowIndex}
              >
                {row.map((value, colIndex) => (
                  <td className="p-4 border-b border-slate-200" key={colIndex}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}
