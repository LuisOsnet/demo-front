import React from 'react';
import Header from '../../template/dashboard/Profile';
import '../../assets/css/User.css';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Profile extends React.Component {
  state= {
		form: {
			"name": "",
			"level_english": "",
			"technical_knowledge": "",
			"resume_url": ""
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
			let user_id = this.props.match.params.id;
      this.props.history.push('/perfil/' + user_id);
      window.location.reload(false);
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
			this.setState({
				form: {
					name : response.data.user.name,
					level_english : response.data.user.level_english,
					technical_knowledge : response.data.user.technical_knowledge,
					resume_url : response.data.user.resume_url,
					email : response.data.user.email
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
              <div className="row g-3">
                <div className="col-sm-7">
                  <div className="form-outline">
                    <input type="text" className="form-control" name="name" placeholder='Nombre' value={form.name} onChange={this.ctrlChange}/>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-outline">
                    <input type="text" className="form-control" name="email" placeholder='Email' value={form.email} readOnly/>
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-sm-7">
                  <div className="form-outline">
                    <input type="text" className="form-control" name="level_english" placeholder='Nivel de Ingles' value={form.level_english} onChange={this.ctrlChange}/>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-outline">
                    <input type="text" className="form-control" name="technical_knowledge" placeholder='Conocimientos T??cnicos' value={form.technical_knowledge} onChange={this.ctrlChange}/>
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-sm-7">
                  <div className="form-outline">
                    <input type="text" className="form-control" name="resume_url" placeholder='URL del CV' value={form.resume_url} onChange={this.ctrlChange}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='button-container'>
              <button type="button" class="btn btn-success" onClick={()=>this.update()}>Actualizar</button>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Profile