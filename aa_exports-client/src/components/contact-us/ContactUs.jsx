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
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();

    const { name, email, company, phone, message } = this.state;

    const form = await axios.post('/api/form', {
      name,
      email,
      company,
      phone,
      message,
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
          <button className="btn-form" onClick={this.onClick}>
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
