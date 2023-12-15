import React, { useState, useEffect } from 'react';
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
      <div className="progress-bar" style={{ width: `${width}%`, transition: `width ${duration}s ease-in-out` }}>
        {showText && <div className="percentage-text">{width}%</div>}
      </div>
    </div>
  );
};

export default ProgressBar;