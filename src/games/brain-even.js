import getRandom from '../getRandom.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  const randomNumber = getRandom();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const questionAndCorrectAnswer = [randomNumber, correctAnswer];
  return questionAndCorrectAnswer;
};
export { rules, brainEven };
