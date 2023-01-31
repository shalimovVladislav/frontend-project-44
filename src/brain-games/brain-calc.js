import readlineSync from 'readline-sync';
import { GetRandom, AnswerСheck } from './brain-game.js';

const GetResultOfExpression = (num1, num2, operationSign) => {
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
      console.log('GetResultOfExpression eror');
  }
  return String(result);
};
const BrainCalc = (username) => {
  const randomNumber1 = GetRandom('number');
  const randomNumber2 = GetRandom('number');
  const operationSign = GetRandom('sign');
  const correctAnswer = GetResultOfExpression(randomNumber1, randomNumber2, operationSign);
  console.log(`Question: ${randomNumber1} ${operationSign} ${randomNumber2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return AnswerСheck(userAnswer, correctAnswer, username);
};
export default BrainCalc;
