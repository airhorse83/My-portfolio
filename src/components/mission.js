import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import Photos from './photos';



export default class Mission extends Component {
  render() {
    return (
      <div className='mission-card'>
         
         
          <Typing>
            <span>My name is Tyler and I am a full stack web developer.  I love solving problems with code.  I enjoy daily challanges and want to be part of an ever growing and exciting industry where anything is possible.  Let's work together on a project.  Click the mail button above to email me. Click on the links to your left to learn more about me. I am available for freelance work at the moment.</span>
          </Typing>
          
      </div>
    );
  }
}
