import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Demo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/usuarios">Usuarios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cuentas">Cuentas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/equipos">Equipos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/movimientos">Movimientos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;