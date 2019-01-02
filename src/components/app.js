import React, { Component } from 'react';
import Header from './header';
import Quals from './quals';
import Mission from './mission';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
          <div className='logo'>
              <h1>{"<"}</h1>
          </div>
          <div className='header'>
            <Header/>
          </div>
          <div className='quals-card-container'>
            <Quals/>
          </div>
          <div className='mission-card-container'>
            <Mission/>
          </div>
          <div className='footer'>
            <Footer/>
          </div>
          <div className='footer-logo'>
              <h3>></h3>
          </div>
      </div>

    );
  }
}
