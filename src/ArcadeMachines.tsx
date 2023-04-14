import ArcadeImage from './arcade-games/ArcadeImage';
import RoboWar from './arcade-games/RoboWar';
import { ArcadeMachineType } from './types/ArcadeMachineType';

const arcadeMachines: Array<ArcadeMachineType> = [
    {
      reactElement: <RoboWar width='400' height='900' />,
      gameUrl: 'https://example.com/game1',
      background: 'linear-gradient(to bottom, #000000, #9370DB, #8A2BE2)'
    },
    {
      reactElement: <ArcadeImage width='400' height='900' />,
      gameUrl: 'https://example.com/game1',
      background: 'linear-gradient(to bottom, #000000, cornflowerblue, skyblue)'
    },
    {
      reactElement: <ArcadeImage width='400' height='900' />,
      gameUrl: 'https://example.com/game1',
      background: 'linear-gradient(to bottom, #000000, palegoldenrod, wheat)'
    },
  ];

  export { arcadeMachines };