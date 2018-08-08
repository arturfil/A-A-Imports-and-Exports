import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import OurServices from './components/our-services/OurServices';
import PlaceOrders from './components/place-orders/PlaceOrders';
import ContactUs from './components/contact-us/ContactUs';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/services" component={OurServices} />
          <Route exact path="/placeOrders" component={PlaceOrders} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
