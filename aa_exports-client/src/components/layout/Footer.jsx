import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="container footer-contact">
            <h2 className="mt-footer footer-title elegant">A&A EXPORT INC.</h2>
            <p>Phone: (305) 716-0927</p>
            <p>Fax: (305) 716-0135</p>
            <p>Email: logistics@aaexports.com</p>
            <p>Vzla: Teléfono (0281) 418-5137/59/92 Sra. Isamar Cabeza.</p>
            <p>5930 N.W. 99Th Avenue, Suite #1 * Doral, FL 33178</p>
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
