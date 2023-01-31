import readlineSync from 'readline-sync';
import { GetRandom, AnswerСheck } from './brain-game.js';

const GetGreatestCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while ((a !== 0) && (b !== 0)) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return String(a + b);
};
const BrainGCD = (username) => {
  const randomNumber1 = GetRandom('number');
  const randomNumber2 = GetRandom('number');
  const correctAnswer = GetGreatestCommonDivisor(randomNumber1, randomNumber2);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return AnswerСheck(userAnswer, correctAnswer, username);
};
export default BrainGCD;
