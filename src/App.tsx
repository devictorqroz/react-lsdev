import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { AppLayout } from "./shared/layout/AppLayout";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Detail } from "./pages/Detail";



export function App() {

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/detalhe/:id' element={<Detail />} />
          
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}