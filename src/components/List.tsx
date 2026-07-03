import ListStyles from './List.module.css';


// export const List = ({ children }: {children: React.ReactNode }) => {
export const List = ({ children }: React.PropsWithChildren) => {

  return (
    <ol className={ListStyles.List}>
      {children}
    </ol>
  );
}


