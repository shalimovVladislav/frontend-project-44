import readlineSync from 'readline-sync';
import { getRandom, answerСheck } from './brain-game.js';

const getResultOfExpression = (num1, num2, operationSign) => {
  let result = null;
  switch (operationSign) {
    case '+':
      result = (num1 + num2);
      break;
    case '-':
      result = (num1 - num2);
      break;
    case '*':
      result = (num1 * num2);
      break;
    default:
  }
  return String(result);
};
const brainCalc = (username) => {
  const randomNumber1 = getRandom('number');
  const randomNumber2 = getRandom('number');
  const operationSign = getRandom('sign');
  const correctAnswer = getResultOfExpression(randomNumber1, randomNumber2, operationSign);
  console.log(`Question: ${randomNumber1} ${operationSign} ${randomNumber2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return answerСheck(userAnswer, correctAnswer, username);
};
export default brainCalc;
