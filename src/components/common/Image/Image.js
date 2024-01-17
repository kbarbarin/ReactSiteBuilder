import React from 'react';
import './Image.css';

const Image = (props) => {

  return (
    <div className={`image-component ${props?.className}`} style={props?.style}>
      <img src={props?.imageUrl} alt={props?.alt || 'image'} style={{ width: props?.width, height: props?.height }} />
    </div>
  );
};

export default Image;
