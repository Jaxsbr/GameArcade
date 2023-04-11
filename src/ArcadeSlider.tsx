import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import { arcadeMachines } from './ArcadeMachines';
import './App.css';
import React, { FunctionComponent, ReactElement } from 'react';

const ArcadeSlider: FunctionComponent = () => {

  const header = (headerImage: string): ReactElement => {
    return (
      <div className='arcade-machine-header'>
        <img 
          src={headerImage} 
          alt="header" />
      </div>
    );
  };

  const screen = (screenImage: string): ReactElement => {
    return (
      <div className='arcade-machine-screen'>
        <img 
          src={screenImage} 
          alt="play" />
      </div>
    );
  };

  const buttons = (buttonImage: string): ReactElement => {
    return (
      <div className='arcade-machine-buttons'>
        <img 
          src={buttonImage} 
          alt="screen" />
      </div>
    );
  };

  const footer = (footerImage: string): ReactElement => {
    return (
      <div className='arcade-machine-footer'>
        <img 
          src={footerImage} 
          alt="footer" />
      </div>
    );
  };

  return (
    <AwesomeSlider 
      fillParent={true}
      animation='cubeAnimation'
      className='arcade-machine'>
      {arcadeMachines.map((arcadeMachine) => (
          <div style={{ background: arcadeMachine.background}}>
            {header(arcadeMachine.headerImage)}
            {screen(arcadeMachine.screenImage)}
            {buttons(arcadeMachine.buttonImage)}
            {footer(arcadeMachine.footerImage)}
          </div>
      ))}
    </AwesomeSlider>
  );
};

export default ArcadeSlider;