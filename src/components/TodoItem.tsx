
interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;
    
    onComplete(id: string): void;
    onRemove(id: string): void;
}

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {

  
    const handleOnComplete = () => {
       onComplete(id);
    }

    const handleOnRemove = () => {
        onRemove(id);
    }


    return (
      <li key={id}>
        {label}

        {complete ? ' Concluido ' : ''}

        <button onClick={handleOnComplete}>
            Complete
        </button>
        
        <button onClick={handleOnRemove}>
            Remove
        </button>
      </li>
    );
}
