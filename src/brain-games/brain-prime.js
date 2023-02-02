import readlineSync from 'readline-sync';
import { getRandom, answerСheck } from './brain-game.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const brainPrime = (username) => {
  const randomNumber = getRandom('number');
  const correctAnswer = isPrime(randomNumber);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return answerСheck(userAnswer, correctAnswer, username);
};
export default brainPrime;
