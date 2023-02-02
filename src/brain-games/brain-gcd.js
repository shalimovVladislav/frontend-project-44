import readlineSync from 'readline-sync';
import { getRandom, answerСheck } from './brain-game.js';

const getGreatestCommonDivisor = (num1, num2) => {
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
const brainGCD = (username) => {
  const randomNumber1 = getRandom('number');
  const randomNumber2 = getRandom('number');
  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return answerСheck(userAnswer, correctAnswer, username);
};
export default brainGCD;
