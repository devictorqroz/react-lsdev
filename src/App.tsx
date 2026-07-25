import { AppRoutes } from "./Routes";
import { AuthProvider } from "./shared/contexts/AuthContext";
import './index.css';

import { z } from "zod/v4";
import pt from "zod/v4/locales/pt.js";


z.config(pt());


export function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}