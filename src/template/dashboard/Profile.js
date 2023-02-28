import React from 'react';
import logo from '../../assets/img/mind.png';
import { hostUrl } from '../../services/apirest';
import axios from "axios";
class Profile extends React.Component {
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
              <a className="navbar-brand" href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <button type="button" className="btn btn-info float-right" onClick={()=>this.delete()}>Salir</button>
          </nav>      
        </div>       
      </header>
    );
  }
}

export default Profile;