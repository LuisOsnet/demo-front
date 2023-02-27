import React from 'react';
import Header from '../../template/dashboard/Header';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Remove extends React.Component {
  state={
		users:[]
	}

	componentDidMount() {
    let team_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/teams/' + team_id;
		
		axios.get(url, {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}
		})
		.then(response =>{
			this.setState({
				users: response.data.team.users
			})
		})
	}

	clickOnUser(id) {
    let team_id = this.props.match.params.id;
		let url = hostUrl + 'api/v1/teams/' + team_id + '/remove';
		axios.post(
      url,
      {
				team: {
					user_id: id
				}
			},
      {
			headers: {
				'Authorization': `${localStorage.getItem("session")}`
			}

		})
		.then(response =>{
			console.log(response.data)
      this.props.history.push('/equipo/' + team_id);
			window.location.reload(false);
		})
	}

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <div className="row justify-content-center">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((value, index ) => {
                    return(
                      <tr key={index} onClick={()=>this.clickOnUser(value.id)}>
                        <td>{ value.user }</td>
                        <td className='text-center'>
                          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-danger">Eliminar</button>
                          </div>
                        </td>
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

export default Remove