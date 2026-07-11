import { useState } from "react";

import { useAuthContext } from "../../shared/contexts/AuthContext";
import LoginStyles from './Login.module.css';


export const Login = () => {

    const { login } = useAuthContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('entrar');

        login(email, password);
    }


    return (
        <div className={LoginStyles.PageContainer}>
            <div className={LoginStyles.PageContent}>
                <h1 className={LoginStyles.Title}>
                    Login
                </h1>

                <b>Email</b>
                <input 
                    value={email}
                    className={LoginStyles.Input}
                    onChange={e => setEmail(e.target.value)}
                />

                <b>Senha</b>
                <input
                    type="password"
                    value={password}
                    className={LoginStyles.Input}
                    onChange={e => setPassword(e.target.value)}
                />

                <br />

                <button className={LoginStyles.Button} onClick={handleLogin}>
                    Entrar
                </button>
            </div>
        </div>
    );
}


