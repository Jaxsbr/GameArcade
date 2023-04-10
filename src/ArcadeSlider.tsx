import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import { arcadeMachines } from './ArcadeMachines';
import './App.css';

const ArcadeSlider = () => {
  return (
    <AwesomeSlider 
      fillParent={true}
      animation='fallAnimation'
      className='arcade-machine'>
      {arcadeMachines.map((arcadeMachine) => (
          <div style={{ background: arcadeMachine.background}}>
            <div style={{ border: '1px solid black', padding: '10px', width: '200px' }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={arcadeMachine.headerImage} 
                alt="header" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src={arcadeMachine.buttonImage} 
                alt="play" 
                style={{ width: '100px', height: '100px', cursor: 'pointer' }} 
                onClick={() => window.location.href = arcadeMachine.gameUrl} />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <img 
                src={arcadeMachine.footerImage} 
                alt="footer" />
            </div>
            <div>
              {arcadeMachine.gameUrl}
            </div>
          </div>
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default ArcadeSlider;