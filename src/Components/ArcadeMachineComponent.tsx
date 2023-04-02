import React from 'react';
import { ArcadeMachineType } from '../types/ArcadeMachineType';

const ArcadeMachineComponent: React.FC<ArcadeMachineType> = ({ headerImage, buttonImage, footerImage, gameUrl }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '200px' }}>
      <div style={{ textAlign: 'center' }}>
        <img src={headerImage} alt="header" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={buttonImage} alt="play" style={{ width: '100px', height: '100px', cursor: 'pointer' }} onClick={() => window.location.href = gameUrl} />
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <img src={footerImage} alt="footer" />
      </div>
    </div>
  );
};

export default ArcadeMachineComponent;
