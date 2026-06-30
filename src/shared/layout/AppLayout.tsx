import './AppLayout.css';


export const AppLayout = ({ children }: React.PropsWithChildren) => {


    return (       
        <div className='layout-base'>
            <div className='layout-header'>
                <a>Página inicial</a>
                <a>Usuários</a>
            </div>

            <hr className='layout-divider' />

            {children}
        </div>
    );
}