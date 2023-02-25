import React from 'react';
import logo from '../../assets/img/mind.png';


class Header extends React.Component {
  render(){
    return(
      <header class="header_area">
        <div class="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/landing"><img src={logo} alt="Logo" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <a class="btn btn-outline-danger" href="/login" role="button">Login</a>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                </div>
                <a class="btn btn-outline-danger" href="/login" role="button">Login</a>
              </div>
            </div>
          </nav>      
        </div>
      </header>
    );
  }
}

export default Header;