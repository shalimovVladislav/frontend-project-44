import readlineSync from 'readline-sync';
import { GetRandom, AnswerСheck } from './brain-game.js';

const BrainEven = (username) => {
  const randomNumber = GetRandom('number');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return AnswerСheck(userAnswer, correctAnswer, username);
};
export default BrainEven;
