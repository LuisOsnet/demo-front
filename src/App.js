import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Signin from './components/Signin'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/'element={<Signin></Signin>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
