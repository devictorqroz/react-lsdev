
interface ICardProps {
  title: string;
  children: React.ReactNode;
}

const Card = (props: ICardProps) => {

  return (
    <div style={{ border: '1px solid black' }}>
      <span>Title: {props.title}</span>

      <div>
        {props.children}
      </div>

      <div>
        Footer
      </div>
    </div>
  );
}



export function App() {

  return (
    <div>
      Olá

      <p>Card:</p>

      <Card title='Testando'>
        wow
      </Card>
    </div>
  )
}



// 1. Extraímos o { title } direto dos parâmetros
// const Card = ({ title }: ICardProps) => {

//   return (
//     <div style={{ border: '1px solid black' }}>
//       {/* 2. Usamos direto a variável title, sem precisar do "props." */}
//       <span>Title: {title}</span>

//       <div>
//         Context
//       </div>

//       <div>
//         Footer
//       </div>
//     </div>
//   );
// }

