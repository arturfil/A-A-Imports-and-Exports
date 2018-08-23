import React, { Component } from 'react';
import axios from 'axios';

import './ContactUs.css';

class ContactUs extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      showMenu: true,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleMenu = () => {
    this.setState.showMenu = !this.state.showMenu;
  };

  async onSubmit(e) {
    e.preventDefault();

    const { name, email, company, phone, message } = this.state;

    const formData = {
      name,
      email,
      company,
      phone,
      message,
    };

    return axios({
      method: 'post',
      url: '/api/form',
      data: formData,
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //create an onClick method

  render() {
    return (
      <div className="form-contact">
        {this.props.showMenu && (
          <div className="container">
            <div class="alert alert-success" role="alert">
              Message was sent!
            </div>
          </div>
        )}
        <h2 className="text-center title">Send us a message</h2>
        <hr className="basic" />
        <form onSubmit={this.onSubmit} className="text-center form-group">
          <input
            name="name"
            className="form-size"
            type="text"
            placeholder="Name"
            onChange={this.onChange}
          />
          <br />
          <input
            name="email"
            className="form-size"
            type="text"
            placeholder="Email"
            onChange={this.onChange}
          />
          <br />
          <input
            name="company"
            className="form-size"
            type="text"
            placeholder="Company"
            onChange={this.onChange}
          />
          <br />
          <input
            name="phone"
            className="form-size"
            type="text"
            placeholder="Phone"
            onChange={this.onChange}
          />
          <br />
          <textarea
            name="message"
            className="form-area"
            col="8"
            type="text"
            placeholder="Write your message here ..."
            onChange={this.onChange}
          />
          <br />
          <button className="btn-form" onClick={this.toggleMenu}>
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
