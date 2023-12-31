const button = `import React from "react";
import './Button.css';

export default function Button(props) {

    return (
        <div className={\`button \${props?.className || ""}\`} style={props?.style} onClick={props?.onClick}>
            <h1 className={\`button-title \${props?.styleTitle || ""}\`}>
                {props?.children}
            </h1>
        </div>
    );
}`

const buttonCss = `/* Button container */
.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s;
}

/* Button hover state */
.button:hover {
    background-color: #2684f3;
}

/* Button active state (when clicked) */
.button:active {
    background-color: #1e6ca6;
}

/* Button title */
.button h1 {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
}

/* Button title color */
.button-title {
    color: #fff;
}

@media screen and (max-width: 1024px) {
    .button-title {
        font-size: 1.5rem;
    }    
}

@media screen and (max-width: 600px) {
    .button-title {
        font-size: 1rem;
    }    
}`

const card = `import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className={\`card \${props?.className || ''}\`} style={props?.style}>
            {props.children}
        </div>
    );
}
`

const cardCss = `.card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px 0;
}`

const inputField = `import React from 'react';
import './InputField.css';

export default function InputField(props) {
    return (
        <div className={\`input-field \${props?.className || ''}\`}>
            {props?.label && <label htmlFor={props?.id}>{props.label}</label>}
            <input
                id={props?.id}
                ref={props.inputRef}
                type={props?.type || 'text'}
                value={props?.value}
                onChange={props?.onChange}
                placeholder={props?.placeholder}
                style={props?.style}
            />
        </div>
    );
}
`
const inputFieldCss = `.input-field {
    margin-bottom: 15px;
}

.input-field label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

.input-field input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
`
const modal = `import React from 'react';
import './Modal.css';

export default function Modal(props) {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
`

const modalCss = `.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 60%;
}

.modal-header, .modal-footer {
    padding: 10px 0;
}

.modal-title {
    margin: 0;
}

.modal-body {
    margin-top: 20px;
    margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
    .modal-content {
        width: 90%;
    }
}
`

const progressBar = `import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage, duration, showText }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const animationDuration = duration || 1000; // Durée de l'animation en millisecondes

    const animationInterval = setInterval(setWidth(percentage), animationDuration);
    
    return () => clearInterval(animationInterval);
  }, [percentage, duration]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: \`\${width}%\`, transition: \`width \${duration}s ease-in-out\` }}>
        {showText && <div className="percentage-text">{width}%</div>}
      </div>
    </div>
  );
};

export default ProgressBar;`

const progressBarCss = `.progress-bar-container {
    width: 100%;
    height: 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress-bar {
    width: 0;
    height: 100%;
    background-color: #3498db; /* Couleur de la barre de progression */
    transition: width 1s ease-in-out;
    text-align: center;
    line-height: 20px;
    color: #fff; /* Couleur du texte de progression */
  }
  
  .percentage-text {
    color: #fff; /* Couleur du texte de progression */
    font-weight: bold;
  }
  
  /* Styles supplémentaires pour la réactivité */
  @media (max-width: 768px) {
    .progress-bar-container {
      height: 10px;
    }
    .percentage-text {
      font-size: 12px;
    }
  }
  `

  const slider = `import React, { useState } from 'react';

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
  
  export default Slider;`

  const sliderCss = `.slider-container {
    text-align: center;
    margin: 20px;
  }
  
  .slider-label {
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  .slider-input {
    width: 100%;
    height: 8px;
    margin-top: 8px;
    background-color: #ddd;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: background-color 0.3s;
  }
  
  .slider-input:hover {
    background-color: #ccc;
  }
  
  .slider-input::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .slider-input::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .slider-p {
    margin-top: 10px;
    font-weight: bold;
  }`
export {button, buttonCss, card, cardCss, inputField, inputFieldCss, modal, modalCss, progressBar, progressBarCss, slider, sliderCss}