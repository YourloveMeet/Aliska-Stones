import React from 'react';
import './PageLoader.css';

const PageLoader = ({ isVisible, progress = 0 }) => {
  const brandName = "ALISKA STONES";
  const letters = brandName.split("");

  return (
    <div className={`loader-overlay ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="letter-wrapper">
          {letters.map((letter, index) => (
            <span 
              key={index} 
              className="loader-letter"
              style={{ '--index': index }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        
        <div className="progress-container">
          <div className="progress-bar-wrapper">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
        
        <p className="loading-status">
          Curating timeless elegance...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
