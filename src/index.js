import greeting from './cli.js';
import brainEven from './brain-games/brain-even.js';
import brainCalc from './brain-games/brain-calc.js';
import brainGCD from './brain-games/brain-gcd.js';
import brainProgression from './brain-games/brain-progression.js';
import brainPrime from './brain-games/brain-prime.js';

const gameRules = (gametype) => {
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
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".?');
      break;
    default:
      break;
  }
};
const gameProcess = (gametype, username) => {
  for (let i = 0; i < 3; i += 1) {
    switch (gametype) {
      case 'even':
        if (brainEven(username)) {
          return;
        }
        break;
      case 'calc':
        if (brainCalc(username)) {
          return;
        }
        break;
      case 'gcd':
        if (brainGCD(username)) {
          return;
        }
        break;
      case 'progression':
        if (brainProgression(username)) {
          return;
        }
        break;
      case 'prime':
        if (brainPrime(username)) {
          return;
        }
        break;
      default:
        break;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
const startBrainGame = (gametype) => {
  const username = greeting();
  gameRules(gametype);
  gameProcess(gametype, username);
};
export default startBrainGame;
