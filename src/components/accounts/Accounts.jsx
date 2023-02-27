import React from 'react';
import Header from '../../template/dashboard/Header';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Accounts extends React.Component {
  state={
		accounts:[]
	}

	componentDidMount() {
		let url = hostUrl + 'api/v1/accounts';
		
		axios.get(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			console.log(response.data.accounts)
			this.setState({
				accounts: response.data.accounts
			})
		})
	}

	clickOnUser(id) {
		console.log(id);
		this.props.history.push('/cuenta/' + id);
		window.location.reload(false);
	}

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className='button-container'>
                <a type="button" className="btn btn-success" href="/nueva-cuenta" role="button">Crear Cuenta</a>
                <br/>
              </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Nombre del Cliente</th>
                    <th scope="col">Responsable</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.accounts.map((value, index ) => {
                    return(
                      <tr key={index} onClick={()=>this.clickOnUser(value.id)}>
                        <td>{ value.name }</td>
                        <td>{ value.client_name }</td>
                        <td>{ value.owner }</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Accounts