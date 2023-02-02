import readlineSync from 'readline-sync';
import { getRandom, answerСheck } from './brain-game.js';

const brainEven = (username) => {
  const randomNumber = getRandom('number');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return answerСheck(userAnswer, correctAnswer, username);
};
export default brainEven;
