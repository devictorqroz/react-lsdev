import { useState } from "react"

import { TodoAPI } from "./shared/services/api/TodoAPI";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";


TodoAPI.getAll().then(data => console.log('1', data));

TodoAPI.create({ label: 'Devocional', complete: false });
TodoAPI.create({ label: 'Oração', complete: false });

TodoAPI.getAll().then(data => console.log('2', data));

TodoAPI.updateById('1', { label: 'Leitura Noite', complete: false });

TodoAPI.getAll().then(data => console.log('3', data));

TodoAPI.deleteById('1');

TodoAPI.getAll().then(data => console.log('4', data));



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


