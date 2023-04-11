import React, { FunctionComponent } from 'react';
import { ArcadeMachineType } from "./types/ArcadeMachineType";



//const ArcadeMachine = (arcadeMachine: ArcadeMachineType) => {
const ArcadeMachine: FunctionComponent<ArcadeMachineType> = ({
    headerImage, buttonImage, footerImage, gameUrl, background
}) => {
    return (
        <div style={{ background: background}}>
            <div style={{ border: '1px solid black', padding: '10px', width: '200px' }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={headerImage} 
                alt="header" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src={buttonImage} 
                alt="play" 
                style={{ width: '100px', height: '100px', cursor: 'pointer' }} 
                onClick={() => window.location.href = gameUrl} />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <img 
                src={footerImage} 
                alt="footer" />
            </div>
            <div>
              {gameUrl}
            </div>
          </div>
        </div>
    );
    // return(
    //     <div style={{ background: arcadeMachine.background}}>
    //         <div style={{ border: '1px solid black', padding: '10px', width: '200px' }}>
    //         <div style={{ textAlign: 'center' }}>
    //           <img 
    //             src={arcadeMachine.headerImage} 
    //             alt="header" />
    //         </div>
    //         <div style={{ display: 'flex', justifyContent: 'center' }}>
    //           <img 
    //             src={arcadeMachine.buttonImage} 
    //             alt="play" 
    //             style={{ width: '100px', height: '100px', cursor: 'pointer' }} 
    //             onClick={() => window.location.href = arcadeMachine.gameUrl} />
    //         </div>
    //         <div style={{ textAlign: 'center', marginTop: '10px' }}>
    //           <img 
    //             src={arcadeMachine.footerImage} 
    //             alt="footer" />
    //         </div>
    //         <div>
    //           {arcadeMachine.gameUrl}
    //         </div>
    //       </div>
    //     </div>
    // );
};

export default ArcadeMachine;