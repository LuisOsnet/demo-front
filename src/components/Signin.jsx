import React from 'react';
import '../assets/css/Signin.css';
import logo from '../assets/img/logo.png';
import { hostUrl } from '../services/apirest';
import axios from "axios";

class Signin extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

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
		let url = hostUrl + "api/v1/login"
		console.log(this.state.form.email);
		axios.post(
			url,
			{
				user: {
					email: this.state.form.email,
					password: this.state.form.password
				}
			}
		).then(response => {
			if (response.status === 200) {
				console.log({ headers: response.headers.authorization });
				localStorage.setItem("session", response.headers.authorization);
				this.props.history.push('/usuarios');
				window.location.reload(false);
			} else {
				console.log("response:" + response.data);
					this.setState(
						{
							error: true,
							errorMsg: response.data.error.message
						}
					)
			}
		}).catch((error) => {
			console.log("request:" + error.request);
			this.setState(
				{
					error: true,
					errorMsg: 'Ocurrio un error, intenta nuevamente'
				}
			)
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="wrapper fadeInDown">
					<div id="formContent">
						<div className="fadeIn first">
							<img src={logo} id="icon" alt="User Icon" />
						</div>

						<form onSubmit={this.ctrlSubmit}>
							<input type="text" className="fadeIn second" name="email" placeholder="Email" onChange={this.ctrlChange} />
							<input type="password" className="fadeIn third"  name="password" placeholder="Password" onChange={this.ctrlChange} />
							<input type="submit" className="fadeIn fourth" value="Log In" onClick={this.ctrlButton} />
						</form>
				{this.state.error === true &&
					<div className="alert alert-danger" role="alert">
						{console.log(this.state.error)}
						{this.state.errorMsg}
					</div>
				}
					</div>
				</div>

			</React.Fragment>
		)
	}
}

export default Signin