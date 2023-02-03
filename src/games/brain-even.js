import getRandom from '../getRandom.js';
import startBrainGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  const randomNumber = getRandom();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const getQuestionAndCorrectAnswer = [randomNumber, correctAnswer];
  return getQuestionAndCorrectAnswer;
};
export default () => { startBrainGame(rules, brainEven); };
