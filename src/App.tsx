import { useState } from "react"

import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";



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

  // const handleOnComplete = (id:string, complete: boolean) => {

  // }

  // const handleOnRemove = (id: string) => {
  //   setList([...list.filter(item => item.id !== listItem.id)]);
  // }


  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <ol>
        {list.map((listItem) => (
          <TodoItem 
            key={listItem.id}

            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}

            onComplete={() => setList([
              ...list.map(item => ({
                ...item, 
                complete: item.id === listItem.id ? !item.complete : item.complete
              }))
            ])}
            onRemove={() =>  setList([...list.filter(item => item.id !== listItem.id)])}
            // onRemove={handleOnRemove}
          />
        ))}
      </ol>
    </div>
  )
}






