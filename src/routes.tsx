import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { AuthProvider } from "./hooks/auth";
import { ListExams } from "./pages/ListExams";
import { Login } from "./pages/Login";


export default function Routes() {
  return (
    <Router>      
      <Switch>
        <AuthProvider>
          {/*   Validar se no contexto de autenticacao possue usuariolaureano 
          e/ou usuarioHnsn e redirecionar para o login ou para a listagem de exames
        */  }
          <Route exact path="/" >
            <div className="content">
              <Header />
              <Login />
            </div>
          </Route>
          <Route exact path="/ListExams">
            <ListExams />            
          </Route>
        </AuthProvider>
      </Switch>
    </Router>
  );
}
