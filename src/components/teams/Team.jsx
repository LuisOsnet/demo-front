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
			console.log(response)
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
			console.log(response)
      this.props.history.push('/equipos');
      window.location.reload(false);
		})
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
      console.log(response.data.team.users)
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
								<a type="button" className="btn btn-primary" role="button" >Asignar Usuario</a>
								<a type="button" className="btn btn-warning" role="button" >Remover Usuario</a>
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
											<label for="account_name">Fecha de Creación</label>
											<input type="text" className="form-control" name="created_at" readonly placeholder='Fecha de Creación' value={form.created_at} />
										</div>
									</div>
								</div>
              </div>
            </div>
						{/* <br/>
						<h2>Usuarios en el grupo</h2>
						<ul className="list-group list-group-flush col-sm">
							<li className="list-group-item">Cras justo odio</li>
							<li className="list-group-item">Dapibus ac facilisis in</li>
							<li className="list-group-item">Morbi leo risus</li>
							<li className="list-group-item">Porta ac consectetur ac</li>
							<li className="list-group-item">Vestibulum at eros</li>
						</ul> */}
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