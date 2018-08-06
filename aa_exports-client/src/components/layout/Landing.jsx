import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="mt-landing display-3 mb-4">A&A Export Inc.</h2>
                <p className="lead">
                  {' '}
                  Imports and Exports Services crafted to your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
