

// export const List = ({ children }: {children: React.ReactNode }) => {
export const List = ({ children }: React.PropsWithChildren) => {


  return (
    <ol>
      {children}
    </ol>
  );
}


