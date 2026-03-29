import React, { useState, useEffect } from 'react';
import './PageLoader.css';

const PageLoader = ({ isVisible }) => {
  const brandName = "ALISKA STONES"; // Customizable brand name for loader
  const letters = brandName.split("");

  return (
    <div className={`loader-overlay ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="letter-wrapper">
          {letters.map((letter, index) => (
            <span key={index} className="loader-letter">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
