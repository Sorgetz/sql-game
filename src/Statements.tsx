import { useEffect, useState } from 'react';
import initSqlJs, { Database } from 'sql.js';

async function createDB() {
    const SQL = await initSqlJs({
        locateFile: (file: string) => `https://sql.js.org/dist/${file}`
    });
    const db = new SQL.Database();
    const sql = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            idade INTEGER
        );
        CREATE TABLE IF NOT EXISTS check_in_pet (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente TEXT,
            horario_entrada DATETIME,
            horario_saida DATETIME
        );
        INSERT INTO usuarios(nome, idade) VALUES ('Rogerio', 34);
        INSERT INTO usuarios(nome, idade) VALUES ('Vinicius', 19);
        INSERT INTO usuarios(nome, idade) VALUES ('Julia', 19);
        INSERT INTO usuarios(nome, idade) VALUES ('Eduarda', 23);
        INSERT INTO check_in_pet(cliente, horario_entrada, horario_saida) VALUES ('Julia', '2025-04-13 23:40:00', '2025-04-13 23:45:00');
        INSERT INTO check_in_pet(cliente, horario_entrada, horario_saida) VALUES ('Gilmar', '2025-04-13 22:42:00', '2025-04-13 22:55:00');
        INSERT INTO check_in_pet(cliente, horario_entrada, horario_saida) VALUES ('Zezinho', '2025-04-13 13:40:00', '2025-04-13 23:44:00');
    `;
    db.run(sql);
    return db;
}

function runQuery( query : string, db : Database ) {
    try {
        const result = db.exec(query);
        const columns = result[0] ? result[0].columns : [];
        const values = result[0] ? result[0].values : [];
        
        return { columns, values };
    } catch (e) {
        console.log('ainda nao')
    }
    
}

export function Statements( {sqlQuery} : {sqlQuery: string} ) {
    const [columns, setColumns] = useState<string[]>([]);
    const [values, setValues] = useState<initSqlJs.SqlValue[][]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = await createDB();
            if(sqlQuery != "") {
                const result = runQuery(sqlQuery, db);
                if (result) {
                    setColumns(result.columns);
                    setValues(result.values);
                }
            }
        };
        fetchData();
    }, [sqlQuery]);

    return sqlQuery.length > 0 && (
        <div>
            <h2>Oiii</h2>
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {values.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((value, colIndex) => (
                                <td key={colIndex}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
