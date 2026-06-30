import { useState, useEffect } from "react"

import { TodoAPI, type ITodo } from "./shared/services/api/TodoAPI";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";



export function App() {
  const [list, setList] = useState<ITodo[]>([]);


  useEffect(() => {
    TodoAPI.getAll()
      .then(data => setList(data));
  }, []);


  const handleAdd = (value: string) => {
    TodoAPI.create({ label: value, complete: false })
      .then(data => setList([...list, data]));
  }

  
  const handleRemove = (id: string) => {
    TodoAPI.deleteById(id)
      .then(() => {
        setList([
          ...list.filter(item => item.id !== id)
        ]);
      });
  }

  const handleComplete = (id: string) => {
    const itemAtual = list.find(item => item.id === id);
    if (!itemAtual) return;

    TodoAPI.updateById(id, { complete: !itemAtual.complete })
      .then(() => {
        setList([
          ...list.map(item => ({
            ...item, 
            complete: item.id === id ? !item.complete : item.complete
          }))
        ]);
      });
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