import React, { Component } from 'react';
import Typing from 'react-typing-animation';




export default class AboutMe extends Component {
  render() {
    return (
      <div className='about-me-card'>
         
         
          <Typing>
            <span>I am a father of 2 kids.  I have recently discovered my passion for coding.  I'm known by everyone as a huge Star Wars fan and I love to read science fiction and fantasy novels in my spare time. I am also currently working on my own fantasy novel.  I am an Arizona native who does not love the desert in any way.  I'd much rather have seasons and green trees in my life!</span>
          </Typing>
          
      </div>
    );
  }
}
