import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.css'
// import Signin from './components/Signin'
// import Usuarios from "./components/Usuarios";
// import Editar from "./components/Editar";


import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import Users from "./components/users/Users";
import User from "./components/users/User";
import New from "./components/users/New";
// accounts
import Accounts from "./components/accounts/Accounts";
import Account from "./components/accounts/Account";
import NewAccount from "./components/accounts/New";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact render ={ props=> ( <Landing {...props} /> ) }></Route>
            <Route path="/login" exact render ={ props=> ( <Login {...props} /> ) }></Route>
            <Route path="/usuarios" exact render ={ props=> ( <Users {...props} /> ) }></Route>
            <Route path="/usuario/:id" exact render ={ props=> ( <User {...props} /> ) }></Route>
            <Route path="/nuevo-usuario" exact render ={ props=> ( <New {...props} /> ) }></Route>

            <Route path="/cuentas" exact render ={ props=> ( <Accounts {...props} /> ) }></Route>
            <Route path="/cuenta/:id" exact render ={ props=> ( <Account {...props} /> ) }></Route>
            <Route path="/nueva-cuenta" exact render ={ props=> ( <NewAccount {...props} /> ) }></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
