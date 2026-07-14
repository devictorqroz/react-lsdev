import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { useIsAuthenticated } from "./shared/contexts/AuthContext";
import { AppLayout } from "./shared/layout/AppLayout";
import { Login } from "./pages/public/Login";
import { Home } from "./pages/private/Home";
import { About } from "./pages/private/About";
import { Todo } from "./pages/private/todos/Todo";
import { TodoDetail } from "./pages/private/todos/TodoDetail";

export const AppRoutes = () => {

    const isAuthenticated = useIsAuthenticated();


    return (
        <BrowserRouter>
            {isAuthenticated && (
                <AppLayout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/sobre' element={<About />} />

                        <Route path='/todos' element={<Todo />} />
                        <Route path='/todos/detalhe/:id' element={<TodoDetail />} />
                        
                        
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </AppLayout>
            )}
            {!isAuthenticated && (
                <Routes>
                    <Route path='*' element={<Login />} />
                    
                </Routes>
            )}
        </BrowserRouter>
    );
}