import React from 'react';
import './Image.css';

const Image = (props) => {
    return (
        <img src={props?.src} className={`image-component ${props?.className}`} alt={props?.alt || 'image'} style={{ width: props?.width, height: props?.height }} />
    );
};

export default Image;
