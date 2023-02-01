import Greeting from './cli.js';
import BrainEven from './brain-games/brain-even.js';
import BrainCalc from './brain-games/brain-calc.js';
import BrainGCD from './brain-games/brain-gcd.js';
import BrainProgression from './brain-games/brain-progression.js';

const GameRules = (gametype) => {
  switch (gametype) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    default:
      break;
  }
};
const GameProcess = (gametype, username) => {
  for (let i = 0; i < 3; i += 1) {
    switch (gametype) {
      case 'even':
        if (BrainEven(username)) {
          return;
        }
        break;
      case 'calc':
        if (BrainCalc(username)) {
          return;
        }
        break;
      case 'gcd':
        if (BrainGCD(username)) {
          return;
        }
        break;
      case 'progression':
        if (BrainProgression(username)) {
          return;
        }
        break;
      default:
        break;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
const StartBrainGame = (gametype) => {
  const username = Greeting();
  GameRules(gametype);
  GameProcess(gametype, username);
};
export default StartBrainGame;
