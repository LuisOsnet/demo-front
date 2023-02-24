import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Signin from './components/Signin'
import Usuarios from "./components/Usuarios";
import Editar from "./components/Editar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact render ={ props=> ( <Signin {...props} /> ) }></Route>
            <Route path="/Usuarios" exact render ={ props=> ( <Usuarios {...props} /> ) }></Route>
            <Route path="/Usuarios/:id/editar" exact render ={ props=> ( <Editar {...props} /> ) }></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
