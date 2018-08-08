import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="container footer-contact">
            <h2 className="mt-footer footer-title elegant">A&A Export Inc.</h2>
            <p>Phone: (001-305) 716-0927</p>
            <p>Fax: (001-305) 716-0135</p>
            <p>Email: logistics@aaexports.com</p>
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
