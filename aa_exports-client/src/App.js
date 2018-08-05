import React, { Component } from 'react';

// import Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
