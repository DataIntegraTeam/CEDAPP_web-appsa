import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";

export default function Routes() {
  return (
    <Router>      
        <Switch>    
            <Route exact path="/" >
              <div className="content">
                <Header />
                <Login />        
              </div>
            </Route>
        </Switch>
    </Router>
  );
}
