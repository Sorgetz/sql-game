import { useEffect, useState } from "react";
import initSqlJs, { Database } from "sql.js";
import { scriptCreateDB } from "./insert";

async function createDB() {
  const SQL = await initSqlJs({
    locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
  });
  const db = new SQL.Database();
  db.run(scriptCreateDB);
  return db;
}

export function Statements({
  sqlQuery,
  validateAnswer,
  run,
}: {
  sqlQuery: string;
  validateAnswer: (row: initSqlJs.SqlValue[]) => void;
  run: boolean;
}) {
  const [columns, setColumns] = useState<string[]>([]);
  const [values, setValues] = useState<initSqlJs.SqlValue[][]>([]);
  const [error, setError] = useState(false);

  function runQuery(query: string, db: Database) {
    try {
      const result = db.exec(query);
      const columns = result[0] ? result[0].columns : [];
      const values = result[0] ? result[0].values : [];

      return { columns, values };
    } catch (e) {
      console.log("ainda nao");
      setError(true);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const db = await createDB();
      if (sqlQuery != "") {
        const result = runQuery(sqlQuery, db);
        if (result) {
          setColumns(result.columns);
          setValues(result.values);
          setError(false);
        }
      }
    };
    fetchData();
  }, [sqlQuery]);

  return (
    run &&
    (error ? (
      <div>Algo deu errado</div>
    ) : (
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
    ))
  );
  // ) : (
  //   <p>Utilize o BookWords.exe para selecionar as palavras e formar o SQL!</p>
  // )
}
