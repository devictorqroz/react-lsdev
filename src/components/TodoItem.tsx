

interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;
    
    onComplete(): void;
    // onRemove(id: string): void;
    onRemove(): void;
}

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {

  
    // const handleOnComplete = () => {
    //    onComplete();
    // }

    // const handleOnRemove = () => {
    //     onRemove(id);
    // }


    return (
      <li key={id}>
        {label}

        {complete ? ' Concluido ' : ''}

        <button onClick={onComplete}>
            Complete
        </button>
        
        <button onClick={onRemove}>
            Remove
        </button>
      </li>
    );
}
