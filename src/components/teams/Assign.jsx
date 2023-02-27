import React from 'react';
import Header from '../../template/dashboard/Header';
import { hostUrl } from '../../services/apirest';
import axios from "axios";

class Assign extends React.Component {
 
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <h1>hola</h1>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Assign