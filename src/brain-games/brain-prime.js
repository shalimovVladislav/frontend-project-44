import readlineSync from 'readline-sync';
import { GetRandom, AnswerСheck } from './brain-game.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const BrainPrime = (username) => {
  const randomNumber = GetRandom('number');
  const correctAnswer = isPrime(randomNumber);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return AnswerСheck(userAnswer, correctAnswer, username);
};
export default BrainPrime;
