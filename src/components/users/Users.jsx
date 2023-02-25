import React from 'react';
import Header from '../../template/dashboard/Header';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Users extends React.Component {
  state={
		users:[]
	}

	componentDidMount() {
		let url = hostUrl + 'api/v1/users';
		
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

	clickOnUser(id) {
		console.log(id);
		this.props.history.push('/usuario/' + id);
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
                <a type="button" className="btn btn-success" href="/nuevo-usuario" role="button">Crear Usuario</a>
                <br/>
              </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Ingles</th>
                    <th scope="col">Conocimientos</th>
                    <th scope="col">Curriculum</th>
                    <th scope="col">Rol</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((value, index ) => {
                    return(
                      <tr key={index} onClick={()=>this.clickOnUser(value.id)}>
                        <td>{ value.name }</td>
                        <td>{ value.email }</td>
                        <td>{ value.level_english }</td>
                        <td>{ value.technical_knowledge }</td>
                        <td><a href={ value.resume_url }>{ value.resume_url }</a></td>
                        <td>{ value.roles[0].role }</td>
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

export default Users