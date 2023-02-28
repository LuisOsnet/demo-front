import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
// Basics
import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
// Users
import Users from "./components/users/Users";
import User from "./components/users/User";
import New from "./components/users/New";
import Profile from "./components/users/Profile";
// accounts
import Accounts from "./components/accounts/Accounts";
import Account from "./components/accounts/Account";
import NewAccount from "./components/accounts/New";

// teams
import Teams from "./components/teams/Teams";
import Team from "./components/teams/Team";
import NewTeam from "./components/teams/New";
import AssignUser from "./components/teams/Assign";
import RemoveUser from "./components/teams/Remove";

// Movements
import Movements from "./components/movements/Movements";


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
            <Route path="/perfil/:id" exact render ={ props=> ( <Profile {...props} /> ) }></Route>

            <Route path="/cuentas" exact render ={ props=> ( <Accounts {...props} /> ) }></Route>
            <Route path="/cuenta/:id" exact render ={ props=> ( <Account {...props} /> ) }></Route>
            <Route path="/nueva-cuenta" exact render ={ props=> ( <NewAccount {...props} /> ) }></Route>

            <Route path="/equipos" exact render ={ props=> ( <Teams {...props} /> ) }></Route>
            <Route path="/equipo/:id" exact render ={ props=> ( <Team {...props} /> ) }></Route>
            <Route path="/nuevo-equipo" exact render ={ props=> ( <NewTeam {...props} /> ) }></Route>
            <Route path="/equipo/:id/asignar" exact render ={ props=> ( <AssignUser {...props} /> ) }></Route>
            <Route path="/equipo/:id/eliminar" exact render ={ props=> ( <RemoveUser {...props} /> ) }></Route>

            <Route path="/movimientos" exact render ={ props=> ( <Movements {...props} /> ) }></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
