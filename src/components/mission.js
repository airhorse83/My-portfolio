import React, { Component } from 'react';
import Typing from 'react-typing-animation';

export default class Mission extends Component {
  render() {
    return (
      <div className='mission-card'>
        <Typing>My name is Tyler and I am a full stack web developer.  I am relatively new to the industry and love solving problems with code.  I enjoy daily challanges and want to be a part of an ever growing and exciting industry where anything is possible.</Typing>
      </div>
    );
  }
}
