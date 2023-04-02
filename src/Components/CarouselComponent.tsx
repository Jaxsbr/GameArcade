import React, { useState } from 'react';
import ArcadeMachineComponent from './ArcadeMachineComponent';
import { ArcadeMachineType } from '../types/ArcadeMachineType';

import headerImage from '../images/header.png'
import buttonImage from '../images/button.png'
import footerImage from '../images/footer.png'

const CarouselComponent: React.FC = () => {
  const arcadeMachines: Array<ArcadeMachineType> = [
    {
      headerImage: headerImage,
      buttonImage: buttonImage,
      footerImage: footerImage,
      gameUrl: 'https://example.com/game1',
    },
    {
      headerImage: headerImage,
      buttonImage: buttonImage,
      footerImage: footerImage,
      gameUrl: 'https://example.com/game1',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? arcadeMachines.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === arcadeMachines.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '600px', height: '400px', overflow: 'hidden' }}>
        {arcadeMachines.map((arcadeMachine, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: index === currentIndex ? '200px' : index < currentIndex ? '-200px' : '600px',
              transition: 'left 0.5s',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
            }}
          >
            <ArcadeMachineComponent {...arcadeMachine} />
          </div>
        ))}
        <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
          <button onClick={handlePrev}>Prev</button>
        </div>
        <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
