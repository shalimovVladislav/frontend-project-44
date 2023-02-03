import getRandom from '../getRandom.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const brainPrime = () => {
  const randomNumber = getRandom(2);
  const correctAnswer = isPrime(randomNumber);
  const questionAndCorrectAnswer = [randomNumber, correctAnswer];
  return questionAndCorrectAnswer;
};
export { rules, brainPrime };
