import { useEffect, useState } from "react";
import { Link } from "react-router";

import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI";
import { PageLayout } from "../shared/layout/page-layout/PageLayout";
import HomeStyles from "./Home.module.css";
import { List } from "../components/List";
import { TodoItem } from "../components/TodoItem";


export const Home = () => {
    
    const [list, setList] = useState<ITodo[]>([]);


    useEffect(() => {
    TodoAPI.getAll()
        .then(data => setList(data));
    }, []);


    const handleAdd = () => {
        
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
        <PageLayout title='TODO List'>
            <div className={HomeStyles.ButtonContainer}>
                <Link to='/detalhe/adicionar' className={HomeStyles.Button}>
                    Adicionar
                </Link>
            </div>

            <List>
                {list.map((listItem) => (
                    <TodoItem 
                        key={listItem.id}

                        id={listItem.id}
                        label={listItem.label}
                        complete={listItem.complete}

                        onRemove={() => handleRemove(listItem.id)}
                        onComplete={() => handleComplete(listItem.id)}
                    />
                ))}
            </List>
        </PageLayout>
    );
}







