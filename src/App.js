import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.css'
// import Signin from './components/Signin'
// import Usuarios from "./components/Usuarios";
// import Editar from "./components/Editar";


import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact render ={ props=> ( <Landing {...props} /> ) }></Route>
            <Route path="/login" exact render ={ props=> ( <Login {...props} /> ) }></Route>
            <Route path="/Usuarios" exact render ={ props=> ( <Users {...props} /> ) }></Route>
            {/* <Route path="/Usuarios/:id/editar" exact render ={ props=> ( <Editar {...props} /> ) }></Route> */}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
