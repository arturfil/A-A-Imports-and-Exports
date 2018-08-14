import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component {
  render() {
    return (
      <div className="form-contact">
        <h2 className="text-center title">Send us a message</h2>
        <hr className="basic" />
        <form
          action="mailto:logistics@aaexports.com"
          className="text-center form-group"
        >
          <input className="form-size" type="text" placeholder="Name" />
          <br />
          <input className="form-size" type="text" placeholder="Email" />
          <br />
          <input className="form-size" type="text" placeholder="Subject" />
          <br />
          <textarea
            className="form-area"
            col="8"
            type="text"
            placeholder="Write your message here ..."
          />
          <br />
          <button className="btn-form">Send</button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
