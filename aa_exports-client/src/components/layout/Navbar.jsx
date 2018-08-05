import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top mb-4 navbar-expand-sm navbar-light">
          <div className="container">
            <a href="#landing-page" className="nav-link">
              <img src="/img/logo-seri.jpg" alt="" />
            </a>
            <a
              href="#landing-page"
              className="navbar-brand elegant btn-landing"
            >
              A&A Imports & Exports
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
                <li className="nav-item dropdown hov-anim">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    style={{ color: 'rgb(19, 19, 97)' }}
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    HOME
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a
                      className="dropdown-item nav-link"
                      style={{ color: 'rgb(19, 19, 97)' }}
                    >
                      Quienes Somos
                    </a>
                    <a
                      className="dropdown-item nav-link"
                      style={{ color: 'rgb(19, 19, 97)' }}
                    >
                      Valores
                    </a>
                    <a
                      className="dropdown-item nav-link"
                      style={{ color: 'rgb(19, 19, 97)' }}
                    >
                      Misión y Visión
                    </a>
                    <a
                      className="dropdown-item nav-link"
                      style={{ color: 'rgb(19, 19, 97)' }}
                    >
                      Filosofía
                    </a>
                  </div>
                </li>
                <li
                  className="nav-item dropdown hov-anim"
                  style={{ color: 'rgb(19, 19, 97)' }}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ color: 'rgb(19, 19, 97)' }}
                  >
                    OUR SERVICES
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a
                      className="dropdown-item nav-link"
                      style={{ color: 'rgb(19, 19, 97)' }}
                    >
                      Asesoría Fiscal y Jurídica
                    </a>
                    <a
                      className="dropdown-item nav-link"
                      style={{ color: 'rgb(19, 19, 97)' }}
                    >
                      Administración de Personal
                    </a>
                    <a
                      className="dropdown-item nav-link"
                      style={{ color: 'rgb(19, 19, 97)' }}
                    >
                      Beneficios
                    </a>
                    <a
                      className="dropdown-item nav-link"
                      style={{ color: 'rgb(19, 19, 97)' }}
                    >
                      reclutamiento y Selección
                    </a>
                  </div>
                </li>
                <li className="nav-item hov-anim">
                  <a className="nav-link" style={{ color: 'rgb(19, 19, 97)' }}>
                    OUR BRANDS
                  </a>
                </li>
                <li className="nav-item dropdown hov-anim">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ color: 'rgb(19, 19, 97)' }}
                  >
                    CONTACT US
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item nav-link">Escríbenos</a>
                    <a className="dropdown-item nav-link">información</a>
                  </div>
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
