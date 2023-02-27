import React from 'react';
import Header from '../../template/dashboard/Header';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Movements extends React.Component {
  state={
		movements:[]
	}

	componentDidMount() {
		let url = hostUrl + 'api/v1/tracks';
		console.log(url)
		axios.get(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			console.log(response.data.movements)
			this.setState({
				movements: response.data.movements
			})
		})
	}
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className='button-container'>
                <nav class="navbar navbar-light bg-light justify-content-between">
                  <a class="navbar-brand"></a>
                  <form class="form-inline">
                    <input class="form-control mr-sm-2" type="Buscar" placeholder="Buscar" aria-label="Buscar"/>
                  </form>
                </nav>
                <br/>
              </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id Usuario</th>
                    <th scope="col">Nombre del Usuario</th>
                    <th scope="col">Id Equipo</th>
                    <th scope="col">Nombre del Equipo</th>
                    <th scope="col">Fecha de asignación al equipo</th>
                    <th scope="col">Fecha de termino en el equipo</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.movements.map((value, index ) => {
                    return(
                      <tr key={index} onClick={()=>this.clickOnUser(value.id)}>
                        <td>{ value.user_id }</td>
                        <td>{ value.user_name }</td>
                        <td>{ value.team_id }</td>
                        <td>{ value.team_name }</td>
                        <td>{ value.started_at }</td>
                        <td>{ value.ended_at }</td>
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

export default Movements