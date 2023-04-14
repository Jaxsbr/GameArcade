import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { arcadeMachines } from './ArcadeMachines';
import './App.css';
import { FunctionComponent } from 'react';

const ArcadeMachineSlider: FunctionComponent = () => {
  return (
    <AwesomeSlider 
      fillParent={true}
      animation='cubeAnimation'
      className='arcade-machine'>
      {arcadeMachines.map((arcadeMachine, index) => (
        <>
          {/* <div key={index} className='arcade-machine-container' style={{ background: arcadeMachine.background}}> */}
          <div key={index} className='arcade-machine-container' style={{ backgroundColor: 'transparent'}}>
            {arcadeMachine.reactElement}
          </div>
          {/* TODO: Apply style from arcadeMachine.buttonStyles */}
          <div key={`${index}-gameUrl`} className='arcade-machine-game-url'>
            <a href={arcadeMachine.gameUrl}>Play</a>
          </div>
        </>
      ))}
    </AwesomeSlider>
  );
};

export default ArcadeMachineSlider;