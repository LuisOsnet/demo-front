import React from 'react';
import Header from '../../template/dashboard/Header';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Movements extends React.Component {
  state={
		movements:[],
    data:[],
    form: {
      key : "",
      value: ""
    }
	}

  handleSelectOption = async e=> {
		await this.setState({
			form:{
				...this.state.form,
				key: e.target.value
			}
		})
	}

  handleInputText = async e=> {
		await this.setState({
			form:{
				...this.state.form,
				value: e.target.value
			}
		})
	}

  ctrlSubmit(e) {
		e.preventDefault();
	}

  get=(event)=> {
    if(event.keyCode === 13) { 
      let url = hostUrl + 'api/v1/tracks?' + this.state.form.key + '=' + this.state.form.value

      axios.get(url, {
          headers: {
            'Authorization': `${localStorage.getItem("session")}`
          }
        }
      )
      .then(response =>{
        this.setState({
          movements: response.data.movements
        })
      })
    }
	}

	componentDidMount() {
		let url = hostUrl + 'api/v1/tracks';
		axios.get(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			this.setState({
				movements: response.data.movements
			})
		})
	}
  render() {
    const options = [
      {
        label: "Nombre de usuario",
        value: "user_name",
      },
      {
        label: "Nombre de equipo",
        value: "team_name",
      },
      {
        label: "Fecha de asignación",
        value: "started_at",
      },
      {
        label: "Fecha de termino",
        value: "ended_at",
      },
    ];
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className='button-container'>
                <nav className="navbar navbar-light bg-light justify-content-between">
                  <a className="navbar-brand"></a>
                  <form onSubmit={this.ctrlSubmit} className="form-inline">
                    <div className="input-group">
                      <select className="form-select" onChange={this.handleSelectOption}>
                        <option selected >Filtrar por...</option>
                        {options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <div className="input-group-append">
                        <input className="form-control mr-sm-2" type="Buscar" placeholder="Buscar" aria-label="Buscar" onChange={this.handleInputText} onKeyDown={this.get}/>
                      </div>
                    </div>
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