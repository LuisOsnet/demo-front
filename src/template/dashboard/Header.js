import React from 'react';
import logo from '../../assets/img/mind.png';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Header extends React.Component {
  delete = async e=> {
		let url = hostUrl + 'api/v1/logout';

		axios.delete(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
      window.location.href="/login";
		})
	}
  render(){
    return(
      <header className="header_area">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/landing"><img src={logo} alt="Logo" /></a>
              <ul className="nav">
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
              </ul>
            </div>
            <button type="button" className="btn btn-info float-right" onClick={()=>this.delete()}>Salir</button>
          </nav>      
        </div>
      </header>
    );
  }
}

export default Header;