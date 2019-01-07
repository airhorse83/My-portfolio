import React, { Component } from 'react';
import Carousel from 'react-image-carousel';



let images = [
    '/assets/fam.jpeg',
  ];
  
  export default class Photos extends Component {
    render() {
      return (
        <div className="my-carousel">
            <Carousel images={images} 
                        thumb={true}
                        loop={true}
                        autoplay={10000}/>
        </div>
      );
    }
  }
  