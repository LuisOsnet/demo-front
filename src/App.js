import { BrowserRouter, Routes, Route } from "react-router-dom";
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
