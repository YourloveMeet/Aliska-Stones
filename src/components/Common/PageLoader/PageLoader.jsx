import React from 'react';
import './PageLoader.css';

const PageLoader = ({ isVisible, progress = 0 }) => {
  const brandName = "ALISKA STONES";
  const letters = brandName.split("");

  return (
    <div className={`loader-overlay ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader-content-wrapper">
        <div className="loader-visual">
          <div className="loader-ring"></div>
          <div className="loader-progress-text">{Math.round(progress)}%</div>
        </div>
        
        <div className="brand-loader">
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
          
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="loading-status">
            Curating timeless elegance...
          </p>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="loader-bg-accent"></div>
    </div>
  );
};

export default PageLoader;
