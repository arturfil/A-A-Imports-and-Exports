import React, { Component } from 'react';

import './OurServices.css';
import machine1 from '../../img/machinesmall.jpeg';
import machine2 from '../../img/machine_wide.jpeg';
import machine3 from '../../img/machine3.jpeg';

class OurServices extends Component {
  render() {
    return (
      <div>
        <div className="our-services mt-5">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="mt-5 mb-4 h2-ourservices p-ourservices">
                    We buy all types of machinery and machinery parts
                  </p>
                </div>
                <div className="container title" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center title">Our services</h2>
          <hr className="basic" />
          <p className="text-center">
            We buy all type of machiner, valves, used forklifters and many more
            equipment that you need!
          </p>
          <div className="row text-center">
            <div className="col-md-4 ">
              <img className="img-size" src={machine2} alt="" />
              <h4>DOOR TO DOOR</h4>
              <hr className="basic" />
              <p>Door to door shipment!</p>
            </div>
            <div className="col-md-4 ">
              <img className="img-size" src={machine1} alt="" />
              <h4>USA TO VENEZUELA</h4>
              <hr className="basic" />
              <p>From Latin America all the way to the U.S.</p>
            </div>
            <div className="col-md-4 ">
              <img className="img-size" src={machine3} alt="" />
              <h4>MACHINERY</h4>
              <hr className="basic" />
              <p>We buy new machines</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 ">
              <img className="img-size" src={machine2} alt="" />
              <h4>ENGINE PARTS</h4>
              <hr className="basic" />
              <p>We buy engines for the machines and repairs</p>
            </div>
            <div className="col-md-4 ">
              <img className="img-size" src={machine1} alt="" />
              <h4>REPAIR PARTS</h4>
              <hr className="basic" />
              <p>We buy new and used parts that are custom needed</p>
            </div>
            <div className="col-md-4 ">
              <img className="img-size" src={machine3} alt="" />
              <h4>SHIPPING</h4>
              <hr className="basic" />
              <p>We buy you the prats and ship them</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurServices;
