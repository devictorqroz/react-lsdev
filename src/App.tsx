import { AppRoutes } from "./Routes";
import { AuthProvider } from "./shared/contexts/AuthContext";


export function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}