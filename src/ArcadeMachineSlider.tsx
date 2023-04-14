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
          <div key={index} className='arcade-machine-container' style={{ background: arcadeMachine.background}}>
            {arcadeMachine.reactElement}
          </div>
      ))}
    </AwesomeSlider>
  );
};

export default ArcadeMachineSlider;