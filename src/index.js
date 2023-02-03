import readlineSync from 'readline-sync';

const startBrainGame = (rules, getQuestionAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
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
