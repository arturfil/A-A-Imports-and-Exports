import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top mb-4 navbar-expand-sm navbar-light">
          <div className="container">
            <a href="/" className="nav-link">
              <img src="/img/logo-seri.jpg" alt="" />
            </a>
            <a href="/" className="navbar-brand elegant btn-landing">
              A&A Export Inc.
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto red-color">
                <li className="nav-item">
                  <Link
                    className="nav-link hov-anim a-links"
                    to="/"
                    style={{ color: 'rgb(19, 19, 97)' }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link hov-anim a-links"
                    to="/services"
                    style={{ color: 'rgb(19, 19, 97)' }}
                  >
                    Our Services
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    to="/placeOrders"
                    className="nav-link hov-anim a-links"
                    style={{ color: 'rgb(19, 19, 97)' }}
                  >
                    Customers
                  </Link>
                </li> */}
                <li className="nav-item ">
                  <Link
                    to="/contactUs"
                    className="nav-link hov-anim a-links"
                    style={{ color: 'rgb(19, 19, 97)' }}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item ">
                  <a
                    to="/"
                    className="nav-link hov-anim a-links"
                    style={{ color: 'rgb(19, 19, 97)' }}
                  >
                    ENG / ESP.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
