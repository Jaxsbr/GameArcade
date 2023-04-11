import headerImage from './images/header.png'
import screenImage from './images/screen.png'
import buttonImage from './images/button.png'
import footerImage from './images/footer.png'
import { ArcadeMachineType } from './types/ArcadeMachineType';

const arcadeMachines: Array<ArcadeMachineType> = [
    {
      headerImage: headerImage,
      screenImage: screenImage,
      buttonImage: buttonImage,
      footerImage: footerImage,
      gameUrl: 'https://example.com/game1',
      background: 'khaki'
    },
    {
      headerImage: headerImage,
      screenImage: screenImage,
      buttonImage: buttonImage,
      footerImage: footerImage,
      gameUrl: 'https://example.com/game1',
      background: 'skyblue'
    },
    {
      headerImage: headerImage,
      screenImage: screenImage,
      buttonImage: buttonImage,
      footerImage: footerImage,
      gameUrl: 'https://example.com/game1',
      background: 'wheat'
    },
  ];

  export { arcadeMachines };