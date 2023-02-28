import React from 'react';
import '../../assets/css/Login.css';
import launch from '../../assets/img/lotus.webp';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Login extends React.Component {
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
        <section className="h-100 gradient-form">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">

                        <div className="text-center logo-container">
                          <img src={launch} alt="logo"/>
                          <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                        </div>

                        <form onSubmit={this.ctrlSubmit}>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example11">Email</label>
                            <input type="email" className="form-control" placeholder="user@example.com" name="email" onChange={this.ctrlChange} />
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example22">Contraseña</label>
                            <input type="password" className="form-control"  name="password" placeholder="Password" onChange={this.ctrlChange} />
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <input className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" value="Iniciar Sesión" onClick={this.ctrlButton} />
                          </div>
                        </form>
                        {
                          this.state.error === true &&
                          <div className="alert alert-danger" role="alert">
                            {console.log(this.state.error)}
                            {this.state.errorMsg}
                          </div>
                        }
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">We are more than just a company</h4>
                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
      </React.Fragment>
    )
  }
}

export default Login