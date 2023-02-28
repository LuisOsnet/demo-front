import React from 'react';
import '../../assets/css/Landing.css';
import Header from '../../template/landing/Header';
import launch from '../../assets/img/launch.jpg';

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section_gap features_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="home_right_img">
                  <img className="img-fluid launch" src={launch} alt="launch"/>
                </div>
                <div className="main_title">
                  <h2>Demo API V1</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Landing