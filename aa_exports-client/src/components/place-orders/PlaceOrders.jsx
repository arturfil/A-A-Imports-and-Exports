import React, { Component } from 'react';

import './PlaceOrders.css';

class PlaceOrders extends Component {
  render() {
    return (
      <div className="place-orders-div">
        <h1 className="po-title">Place Your Orders Here</h1>
        <hr className="basic" />
        <form action="">
          <label placeholder="Name" />
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default PlaceOrders;
