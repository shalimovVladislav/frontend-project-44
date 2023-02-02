import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startBrainGame = (rules, getQuestionAndCorrectAnswer) => {
  const username = greeting();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const questionAndCorrectAnswer = getQuestionAndCorrectAnswer();
    console.log(`Question: ${questionAndCorrectAnswer[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== questionAndCorrectAnswer[1]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questionAndCorrectAnswer[1]}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};
export default startBrainGame;
