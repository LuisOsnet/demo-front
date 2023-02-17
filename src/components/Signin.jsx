import React from 'react'
import '../assets/css/Signin.css'
import axios from "axios";

class Signin extends React.Component {
	state={
		form:{
			"email":"",
			"password":""
		},
		error:false,
		errorMsg:""
	}

	ctrlSubmit(e) {
		e.preventDefault();
	}

	ctrlChange = async e=> {
		await this.setState({
			form:{
				...this.state.form,
				[e.target.name]: e.target.value
			}
		})
	}

	ctrlButton=()=> {
		let url = " https://osnet.herokuapp.com/" + "api/v1/login"
		console.log(this.state.form.email);
		axios.post(
			url,
			{
				user: {
					email: this.state.form.email,
					password: this.state.form.password
				}
			}
		)
		.then(response => {
			console.log(response);
		})
	}

	render() {
		return (
			<React.Fragment>
				<div className="log-form">
					<h2>Sign In</h2>
					<form onSubmit={this.ctrlSubmit}>
						<input type="text" name="email" placeholder="email" onChange={this.ctrlChange} />
						<input type="password" name="password" placeholder="password" onChange={this.ctrlChange} />
						<button type="submit" className="btn" onClick={this.ctrlButton}>Login</button>
					</form>
				</div>
			</React.Fragment>
		)
	}
}

export default Signin