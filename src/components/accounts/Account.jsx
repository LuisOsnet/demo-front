import React from 'react';
import Header from '../../template/dashboard/Header';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Account extends React.Component {
  state= {
		form: {
			"name": "",
			"client_name": "",
			"owner": ""
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
		let account_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/accounts/' + account_id;


		axios.put(url, this.state.form, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			console.log(response)
      this.props.history.push('/cuentas');
      window.location.reload(false);
		})
	}

	delete = async e=> {
		let account_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/accounts/' + account_id;

		axios.delete(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			console.log(response)
      this.props.history.push('/cuentas');
      window.location.reload(false);
		})
	}

	componentDidMount(){
		let account_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/accounts/' + account_id;
		axios.get(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
      console.log(response.data.account)
			this.setState({
				form: {
					name : response.data.account.name,
					client_name : response.data.account.client_name,
					owner : response.data.account.owner
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
                <div className="col-sm">
                  <div className="form-outline">
                    <input type="text" className="form-control" name="name" placeholder='Nombre de la cuenta' value={form.name} onChange={this.ctrlChange}/>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-outline">
                    <input type="text" className="form-control" name="client_name" placeholder='Nombre del Cliente' value={form.client_name} onChange={this.ctrlChange}/>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-outline">
                    <input type="text" className="form-control" name="owner"placeholder='Responsable' value={form.owner}  onChange={this.ctrlChange}/>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className='button-container'>
              <button type="button" class="btn btn-success" onClick={()=>this.update()}>Actualizar</button>
              <button type="button" class="btn btn-danger" onClick={()=>this.delete()}>Eliminar</button>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Account