import React from 'react';
import Header from '../template/Header';
import { hostUrl } from '../services/apirest';
import axios from "axios";

class Editar extends React.Component {

	state= {
		form: {
			"name": "",
			"level_english": "",
			"technical_knowledge": "",
			"resume_url": "",
			"email": ""
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
		let user_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/users/' + user_id;


		axios.put(url, this.state.form, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			console.log(response)
		})
	}

	delete = async e=> {
		let user_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/users/' + user_id;

		axios.delete(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			console.log(response)
		})
	}

	componentDidMount(){
		let user_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/users/' + user_id;
		axios.get(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			// console.log(response.data.user.roles[0].role);
			this.setState({
				form: {
					name : response.data.user.name,
					level_english : response.data.user.level_english,
					technical_knowledge : response.data.user.technical_knowledge,
					resume_url : response.data.user.resume_url,
					email : response.data.user.email,
					role : response.data.user.roles[0].role
				}
			})
		})
	}

	render() {
		const form = this.state.form
		return (
			<React.Fragment>
				<Header></Header>
				<div className="container">
					<form className='form'>
						<div className="row">
							<div className="mb-3 row">
								<label className="col-sm-2 col-form-label">Nivel de Ingles</label>
								<div className="col-sm-10">
								<input type="text" name="name" className="form-control" value={form.name} onChange={this.ctrlChange}/>
								</div>
							</div>

							<div className="mb-3 row">
								<label className="col-sm-2 col-form-label">Email</label>
								<div className="col-sm-10">
									<input type="text" name="email" className="form-control" value={form.email} onChange={this.ctrlChange}/>
								</div>
							</div>

							<div className="mb-3 row">
								<label className="col-sm-2 col-form-label">Nivel de Ingles</label>
								<div className="col-sm-10">
									<input type="text" name="level_english" className="form-control" value={form.level_english} onChange={this.ctrlChange}/>
								</div>
							</div>

							<div className="mb-3 row">
								<label className="col-sm-2 col-form-label">Conocimientos Técnicos</label>
								<div className="col-sm-10">
									<input type="text" name="technical_knowledge" className="form-control" value={form.technical_knowledge} onChange={this.ctrlChange}/>
								</div>
							</div>

							<div className="mb-3 row">
								<label className="col-sm-2 col-form-label">URL de CV</label>
								<div className="col-sm-10">
									<input type="text" name="resume_url" className="form-control" value={form.resume_url} onChange={this.ctrlChange}/>
								</div>
							</div>
							
							<div className="mb-3 row">
								<label className="col-sm-2 col-form-label">Role</label>
								<div className="col-sm-10">
									<input type="text" name="role" className="form-control" value={form.role}/>
								</div>
							</div>
						</div>
						<button type="button" className="btn btn-outline-primary" onClick={()=>this.update()}>Actualizar</button>

						<button type="button" class="btn btn-outline-danger" onClick={()=>this.delete()}>Eliminar</button>
						<button type="button" class="btn btn-outline-secondary">Salir</button>
					</form>
				</div>
			</React.Fragment>
		)
	}
}

export default Editar