import React, { Component } from 'react';
import Header from './header';
import Quals from './quals';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='logo'>
            <h2>logo</h2>
        </div>
          <Header/>
          <div>
            <Quals/>
          </div>
      </div>

    );
  }
}
