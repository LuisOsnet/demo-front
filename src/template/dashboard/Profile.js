import React from 'react';
import logo from '../../assets/img/mind.png';

class Profile extends React.Component {
  render(){
    return(
      <header className="header_area">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/landing"><img src={logo} alt="Logo" /></a>
              {/* <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="/usuarios">Usuarios</a>
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
              </ul> */}
            </div>
          </nav>      
        </div>
      </header>
    );
  }
}

export default Profile;