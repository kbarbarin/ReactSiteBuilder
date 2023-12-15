import React, { useState } from 'react';

import './Slider.css'

const Slider = ({ min, max, step, defaultValue, onChange, label }) => {
    const [value, setValue] = useState(defaultValue);
  
    const handleChange = (event) => {
      const newValue = parseInt(event.target.value, 10);
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    };
  
    return (
      <div className="slider-container">
        {label && <label className="slider-label">{label}</label>}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="slider-input"
        />
        <p className="slider-p">{value}</p>
      </div>
    );
  };

export default Slider;