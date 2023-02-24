import React from 'react';
import Header from '../template/Header';
import { hostUrl } from '../services/apirest';
import axios from "axios";

class Dashboard extends React.Component {
	state={
		users:[]
	}

	componentDidMount() {
		let url = hostUrl + '/api/v1/users';
		
		axios.get(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			console.log(response.data.users)
			this.setState({
				users: response.data.users
			})
		})
	}

	render() {
		return (
			<React.Fragment>
				<Header></Header>
				<div className="container">

					<h1>Usuarios</h1>
					<p>Lista de usuarios registrados</p>

					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">Nombre</th>
								<th scope="col">Email</th>
								<th scope="col">Ingles</th>
								<th scope="col">Conocimientos</th>
								<th scope="col">Curriculum</th>
							</tr>
						</thead>
						<tbody>
							{this.state.users.map((value, index ) => {
								console.log(value.resume_url)
								return(
									<tr key="index">
										<td>{ value.name }</td>
										<td>{ value.email }</td>
										<td>{ value.level_english }</td>
										<td>{ value.technical_knowledge }</td>
										{/* <td><a href={ value.resume_url }>{ value.resume_url }</a></td> */}
									</tr>
								)
							})}
						</tbody>
					</table>

					
				</div>
				
			</React.Fragment>
		);
	}
}

export default Dashboard;