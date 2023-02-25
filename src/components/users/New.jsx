import React from 'react';
import Header from '../../template/dashboard/Header';
import '../../assets/css/User.css';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class New extends React.Component {
  state= {
		form: {
      "name": "",
			"email": "",
      "password": "",
			"level_english": "",
			"technical_knowledge": "",
      "role": "",
			"resume_url": ""
		},
		error: false,
		errorMsg: ""
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

	post=()=> {
		let url = hostUrl + "api/v1/users"
    axios.post(
      url,
      {
				user: {
					name: this.state.form.name,
          email: this.state.form.email,
          password: this.state.form.password,
          level_english: this.state.form.level_english,
          technical_knowledge: this.state.form.technical_knowledge,
          role: this.state.form.role,
          resume_url: this.state.form.resume_url
				}
			},
      {
        headers: {
          'Authorization': `${localStorage.getItem("session")}`
        }
      }
    ).then(response => {
      if (response.status === 200) {
        this.props.history.push('/usuarios');
        window.location.reload(false);
      }
    })
			
  }

  render() {
    const form = this.state.form
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <form onSubmit={this.ctrlSubmit}>
              <div className="row justify-content-center">
                <div className="row g-3">
                  <div className="col-sm-7">
                    <div className="form-outline">
                      <input type="text" className="form-control" name="name" placeholder='Nombre' onChange={this.ctrlChange} />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-outline">
                      <input type="email" className="form-control" name="email" placeholder='Email' onChange={this.ctrlChange} />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-outline">
                      <input type="password" className="form-control" name="password" placeholder='Contraseña' onChange={this.ctrlChange} />
                    </div>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-sm">
                    <div className="form-outline">
                      <input type="text" className="form-control" name="level_english" placeholder='Nivel de Ingles' onChange={this.ctrlChange} />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-outline">
                      <input type="text" className="form-control" name="technical_knowledge" placeholder='Conocimientos Técnicos' onChange={this.ctrlChange} />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-outline">
                      <input type="text" className="form-control" placeholder='Rol' name='role' onChange={this.ctrlChange} />
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="form-outline">
                      <input type="url" className="form-control" name="resume_url" placeholder='URL del CV' onChange={this.ctrlChange} />
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <div className='button-container'>
                <button type="button" class="btn btn-success" onClick={this.post} >Guardar</button>
                <a type="button" className="btn btn-danger" href="/usuarios" role="button">Cancelar</a>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default New