import ArcadeImage from './arcade-games/ArcadeImage';
import RoboWar from './arcade-games/RoboWar';
import { ArcadeMachineType } from './types/ArcadeMachineType';

const arcadeMachines: Array<ArcadeMachineType> = [
    {
      reactElement: <RoboWar width='300' height='600' />,
      gameUrl: 'https://jaxsbr.github.io/RoboWar/',
      background: 'linear-gradient(to bottom, #000000, #9370DB, #8A2BE2)'
    },
    // {
    //   reactElement: <ArcadeImage width='300' height='600' />,
    //   gameUrl: 'https://jaxsbr.github.io/PhaserTowersDefense/',
    //   background: 'linear-gradient(to bottom, #000000, cornflowerblue, skyblue)'
    // },
  ];

  export { arcadeMachines };