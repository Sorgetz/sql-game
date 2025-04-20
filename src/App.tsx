import { useEffect, useState } from 'react'
import './App.css'
import { Statements } from './Statements';
import { Sidebar } from './chat/Sidebar';
import { Messages } from './chat/Messages';

function App() {
  const [sqlQuery, setSqlQuery] = useState("")
  const [sqlWords, setSqlWords] = useState(["SELECT", "*", "FROM", "nome", "idade", "check_in_pet"])

  function handleButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (sqlQuery.length > 0) {
      setSqlQuery(sqlQuery + " " + e.currentTarget.textContent);
    } else {
      setSqlQuery(sqlQuery + e.currentTarget.textContent);
    }
  }

  function handleRemove() {
    setSqlQuery(sqlQuery.split(" ").slice(0, -1).join(" "));
  }

  function newWord(text : string) {
    setSqlWords([...sqlWords, text])
  }

  useEffect(() => {

  },[sqlWords])

  return (
    <>

      <h1>MUAHAHAH</h1>
      <div className="card">
        <textarea className='border-2 border-black' value={sqlQuery} />
        <div className='flex' >

          {sqlWords.map(word =>
            <button className="bg-indigo-500 text-white font-bold p-4 m-1 rounded" onClick={handleButton}>
              {word}
            </button>
          )}

          <button className="bg-indigo-500 text-white font-bold p-4 m-1 rounded" onClick={() => setSqlQuery("")}>LIMPAR</button>
          <button className="bg-indigo-500 text-white font-bold p-4 m-1 rounded" onClick={handleRemove}>{`<`}</button>
        </div>

        <Statements sqlQuery={sqlQuery} />
      </div>
      <p className="read-the-docs">
        Teste messagesss
      </p>


      <div className='w-screen flex'>
        <Sidebar />
        <Messages newWord={newWord} />
      </div>
    </>
  )
}

export default App
