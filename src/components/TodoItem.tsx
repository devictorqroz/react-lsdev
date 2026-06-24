
interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;
    
    onComplete(id: string): void;
    onRemove(id: string): void;
}

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {

  
    const handleComplete = () => {
       onComplete(id);
    }

    const handleRemove = () => {
        onRemove(id);
    }


    return (
      <li>
        {label}

        {complete ? ' Concluido ' : ''}

        <button onClick={handleComplete}>
            Complete
        </button>
        
        <button onClick={handleRemove}>
            Remove
        </button>
      </li>
    );
}
