import React from 'react';
import './AnimatedBackground.css'

const AnimatedBackground = () => {
  return (
    <div className="background">
      {/* Bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-5"></div>
    </div>
  );
};

export default AnimatedBackground;