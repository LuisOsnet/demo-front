import React from 'react';
import Header from '../../template/dashboard/Header';
import '../../assets/css/Team.css';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Team extends React.Component {
  state= {
		form: {
			"name": "",
			"created_at": ""
		},
		error: false,
		errorMsg: ""
	}

	ctrlChange = async e=> {
		await this.setState({
			form:{
				...this.state.form,
				[e.target.name]: e.target.value
			}
		})
	}

	update = async e=> {
		let team_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/teams/' + team_id;


		axios.put(url, this.state.form, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
      this.props.history.push('/equipos');
      window.location.reload(false);
		})
	}

	delete = async e=> {
		let team_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/teams/' + team_id;

		axios.delete(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
      this.props.history.push('/equipos');
      window.location.reload(false);
		})
	}

	clickToAssign(id) {
		let team_id = this.props.match.params.id;
		this.props.history.push(team_id + '/asignar/');
		window.location.reload(false);
	}

	clickToRemove(id) {
		let team_id = this.props.match.params.id;
		this.props.history.push(team_id + '/eliminar/');
		window.location.reload(false);
	}

	componentDidMount(){
		let team_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/teams/' + team_id;
		axios.get(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			this.setState({
				form: {
					name : response.data.team.name,
					created_at : response.data.team.created_at,
					account_name : response.data.team.account.name
				}
			})
		})
	}
  render() {
    const form = this.state.form
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <div className="row justify-content-center">
							<div className='button-container'>
								<a type="button" className="btn btn-primary" role="button" onClick={()=>this.clickToAssign()}>Agregar usuario</a>
								<a type="button" className="btn btn-warning" role="button" onClick={()=>this.clickToRemove()}>Remover Usuario</a>
                <br/>
              </div>
              <div className="row g-3">
                <div className="col-sm">
									<div className="form-group">
										<div className="form-outline">
											<label for="name">Nombre del equipo</label>
											<input type="text" className="form-control" name="name" placeholder='Nombre del equipo' value={form.name} onChange={this.ctrlChange}/>
										</div>
									</div>
								</div>

								<div className="col-sm">
									<div className="form-group">
										<div className="form-outline">
											<label for="account_name">Nombre de la Cuenta</label>
											<input type="text" className="form-control" name="account_name" placeholder='Nombre de la Cuenta' value={form.account_name} />
										</div>
									</div>
								</div>

								<div className="col-sm">
									<div className="form-group">
										<div className="form-outline">
											<label for="account_name">Fecha de Creaci??n</label>
											<input type="text" className="form-control" name="created_at" readonly placeholder='Fecha de Creaci??n' value={form.created_at} />
										</div>
									</div>
								</div>
              </div>
            </div>
						<br/>
            <br/>
            <div className='button-container'>
              <button type="button" className="btn btn-success" onClick={()=>this.update()}>Actualizar</button>
              <button type="button" className="btn btn-danger" onClick={()=>this.delete()}>Eliminar</button>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Team