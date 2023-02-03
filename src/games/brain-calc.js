import getRandom from '../getRandom.js';
import startBrainGame from '../index.js';

const rules = 'What is the result of the expression?';
const getSign = () => {
  let sign = null;
  const randomNumber = getRandom(0, 3);
  switch (randomNumber) {
    case 0:
      sign = '+';
      break;
    case 1:
      sign = '-';
      break;
    case 2:
      sign = '*';
      break;
    default:
      break;
  }
  return sign;
};
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
const brainCalc = () => {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const operationSign = getSign();
  const question = `${randomNumber1} ${operationSign} ${randomNumber2}`;
  const correctAnswer = getResultOfExpression(randomNumber1, randomNumber2, operationSign);
  const questionAndCorrectAnswer = [question, correctAnswer];
  return questionAndCorrectAnswer;
};
export default () => { startBrainGame(rules, brainCalc); };
