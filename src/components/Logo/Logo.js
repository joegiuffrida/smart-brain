import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain-avatar.jpg';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 134, width: 150 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
