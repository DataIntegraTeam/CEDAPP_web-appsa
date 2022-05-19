import { AuthProvider } from "./hooks/auth";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";  
export function App() {
  return (
    <AuthProvider>      
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
}
