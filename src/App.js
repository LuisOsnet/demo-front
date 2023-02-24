import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Signin from './components/Signin'
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact render ={ props=> ( <Signin {...props} /> ) }></Route>
            <Route path="/dashboard" exact render ={ props=> ( <Dashboard {...props} /> ) }></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
