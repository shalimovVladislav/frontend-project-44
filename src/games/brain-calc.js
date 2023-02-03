import getRandom from '../getRandom.js';
import startBrainGame from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
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
      throw new Error(`Unknown order state: '${operationSign}'!`);
  }
  return String(result);
};
const brainCalc = () => {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const operationSign = operators[getRandom(0, 3)];
  const question = `${randomNumber1} ${operationSign} ${randomNumber2}`;
  const correctAnswer = getResultOfExpression(randomNumber1, randomNumber2, operationSign);
  const questionAndCorrectAnswer = [question, correctAnswer];
  return questionAndCorrectAnswer;
};
export default () => { startBrainGame(rules, brainCalc); };
