import getRandom from '../getRandom.js';
import startBrainGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const brainPrime = () => {
  const randomNumber = getRandom(2);
  const correctAnswer = (isPrime(randomNumber) ? 'yes' : 'no');
  const getQuestionAndCorrectAnswer = [randomNumber, correctAnswer];
  return getQuestionAndCorrectAnswer;
};
export default () => { startBrainGame(rules, brainPrime); };
