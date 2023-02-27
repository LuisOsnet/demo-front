import React from 'react';
import Header from '../../template/dashboard/Header';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class New extends React.Component {
  state= {
		form: {
			"name": "",
			"account_id": ""
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
		let url = hostUrl + 'api/v1/teams/'

		axios.post(url, this.state.form, {
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

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <form onSubmit={this.ctrlSubmit}>
              <div className="row justify-content-center">
                <div className="row g-3">
                  <div className="col-sm">
                    <div className="form-outline">
                      <input type="text" className="form-control" name="name" placeholder='Nombre del equipo' onChange={this.ctrlChange}/>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-outline">
                      <input type="text" className="form-control" name="account_id" placeholder='Id de la cuenta' onChange={this.ctrlChange}/>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div className='button-container'>
                <button type="button" class="btn btn-success" onClick={this.post} >Guardar</button>
                <a type="button" className="btn btn-danger" href="/cuentas" role="button">Cancelar</a>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default New