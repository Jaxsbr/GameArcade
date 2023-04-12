import ArcadeImage from './arcade-games/ArcadeImage';
import { ArcadeMachineType } from './types/ArcadeMachineType';

const arcadeMachines: Array<ArcadeMachineType> = [
    {
      reactElement: <ArcadeImage width='400' height='900' />,
      gameUrl: 'https://example.com/game1',
      background: 'khaki'
    },
    {
      reactElement: <ArcadeImage width='400' height='900' />,
      gameUrl: 'https://example.com/game1',
      background: 'skyblue'
    },
    {
      reactElement: <ArcadeImage width='400' height='900' />,
      gameUrl: 'https://example.com/game1',
      background: 'wheat'
    },
  ];

  export { arcadeMachines };