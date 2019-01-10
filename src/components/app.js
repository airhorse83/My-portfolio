import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Carousel from 'react-image-carousel';

import Photos from './photos';
import Header from './header';
import Quals from './quals';
import Mission from './mission';
import Footer from './footer';
import AboutMe from './aboutme';
import SkillsContent from './skills-content';

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
            <Link className='links' to="/">Home</Link>
            <Link className='links' to="/skills">Skills</Link>
            <Link className='links' to="/aboutme">About Me</Link>
          </div>
          <div className='mission-card-container'>
            <div className="tv1">
              <Route exact path="/" component={Mission} />
              <Route exact path="/skills" component={SkillsContent} />
              <Route exact path="/aboutme" component={Photos} />
            </div>
            <div className='tv2'>
             <Route path="/skills" component={Quals} />
             <Route path="/aboutme" component={AboutMe} />
            </div>
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
