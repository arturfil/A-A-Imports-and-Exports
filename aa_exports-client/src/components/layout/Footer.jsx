import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="container">
            <h2 className="mt-footer footer-title elegant">A&A Export Inc.</h2>
            <p>Phone: 55 5339-2200</p>
            <p>Email: gustavo@aaexports.com</p>
          </div>
          <div className="container footer-block">
            <div className="row">
              <div className="col-md-4 col-4">
                <a href="">
                  <i className="fab fa-3x fa-facebook" />
                </a>
              </div>
              <div className="col-md-4 col-4">
                <a href="">
                  <i className="fab fa-3x fa-linkedin" />
                </a>
              </div>
              <div className="col-md-4 col-4">
                <a href="">
                  <i className="fab fa-3x fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
