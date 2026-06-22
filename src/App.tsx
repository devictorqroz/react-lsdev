import { useState } from "react"

import { InputAdd } from "./components/InputAdd";



export function App() {

  const [list, setList] = useState([
    {id: '1', label: 'fazer café', complete: false },
    {id: '2', label: 'fazer café', complete: false },
    {id: '3', label: 'fazer almoço', complete: false },
    {id: '4', label: 'fazer janta', complete: false }
  ]);


  const handleAdd = (value: string) => {
    setList([
      ...list, 
      { id: (list.length + 1).toString(), complete: false, label: value }
    ]);
  }


  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>
            {listItem.label}

            {listItem.complete ? ' Concluido ' : ''}

            <button 
              onClick={() => { 
                setList([
                  ...list.map(item => ({ 
                    ...item, 
                    complete: item.id === listItem.id ? !listItem.complete : item.complete 
                  }))
                ]);
              }}
            >
              Concluir
            </button>
            <button onClick={() => setList([...list.filter(item => item.id !== listItem.id)])}>
              Remover
            </button>
          </li>
        ))}
      </ol>


    </div>
  )
}






