import React, { Component } from 'react';

import './AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="about-us mt-5">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="mt-5 mb-4 h2-ourservices p-ourservices">
                    Who are we? What does A&A EXPORT INC. do?
                  </p>
                </div>
                <div className="container title" />
              </div>
            </div>
          </div>
        </div>
        <h2 className="h2-aboutUs">About Us</h2>
        <hr className="basic" />
        <div className="container paragraphs">
          <p>
            ß Our company specializes in purchasing supplies and parts for the
            oil industry as well as the construction industry. We supply all
            your industrial needs by being your chosen purchasing and shipping
            agent in the United States. With 23 years of experience we provide
            only the best service and prices to our clients.
          </p>
          <p>
            In addition to specializing in purchasing everything from hydraulic
            pumps for the oil industry or tools for construction, we also
            specialize in selling heavy machinery as well as any parts or
            replacement parts that these machines might require.
          </p>
          <p>
            Amongst these two services, A&A Export, Inc. also offers its clients
            in and out freight shipping service to South America and Europe,
            which includes maritime and air transport for light and heavy cargo.
            We are proud of offering a complete service to our clients as we
            handle all purchasing requests and deliver your merchandise to its
            destination point.
          </p>
          <p>
            Our headquarters are in Miami, which is our main hub. Our branch
            office in Venezuela, A&A Export Import, S.A., can be found in
            Lecheria, Anzoátegui. We appreciate your business!
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
