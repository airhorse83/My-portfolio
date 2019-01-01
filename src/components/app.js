import React, { Component } from 'react';
import Header from './header';
import Quals from './quals';
import Mission from './mission';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='logo'>
            <h2>logo</h2>
        </div>
          <Header/>
          <div className='quals-card-container'>
            <Quals/>
          </div>
          <div className='mission-card-container'>
            <Mission/>
          </div>
      </div>

    );
  }
}
