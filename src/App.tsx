import { useState } from "react"

import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";


interface ITodo {
  id: string;
  label: string;
  complete: boolean;
}


export function App() {

  const [list, setList] = useState<ITodo[]>([]);


  const handleAdd = (value: string) => {
    if (value.trim() === "") return;

    setList([
      ...list, 
      { 
        id: crypto.randomUUID(), 
        complete: false, 
        label: value.trim() 
      }
    ]);
  }

  const handleComplete = (id:string) => {
    setList([
      ...list.map(item => ({
        ...item, 
        complete: item.id === id ? !item.complete : item.complete
      }))
    ]);
  }

  const handleRemove = (id: string) => {
    setList([...list.filter(item => item.id !== id)]);
  }


  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map((listItem) => (
          <TodoItem 
            key={listItem.id}

            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}

            onComplete={handleComplete}
            onRemove={handleRemove}
          />
        ))}
      </List>
    </div>
  );
}


