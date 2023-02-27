import React from 'react';
import Header from '../../template/dashboard/Header';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Teams extends React.Component {
  state={
		teams:[]
	}

	componentDidMount() {
		let url = hostUrl + 'api/v1/teams';
		
		axios.get(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			console.log(response.data.teams)
			this.setState({
				teams: response.data.teams
			})
		})
	}

	clickOnUser(id) {
		console.log(id);
		this.props.history.push('/equipo/' + id);
		window.location.reload(false);
	}

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className='button-container'>
                <a type="button" className="btn btn-success" href="/nuevo-equipo" role="button">Crear Equipo</a>
                <br/>
              </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map((value, index ) => {
                    return(
                      <tr key={index} onClick={()=>this.clickOnUser(value.id)}>
                        <td>{ value.name }</td>
                        <td>{ value.created_at }</td>
                        <td>{ value.account.name }</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Teams