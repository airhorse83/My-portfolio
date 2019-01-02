import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='header-card'>
        <h1>Honor.Integrity.Excellence</h1>
        <a href="https://www.linkedin.com/in/j-tyler-horsley-2a88a1173/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/airhorse83"><i class="fab fa-github-square"></i></a>
        <a href="mailto:airhorse83@yahoo.com"><i class="fas fa-envelope-square"></i></a>
      </div>
    );
  }
}
