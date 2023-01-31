const GetRandom = (type = 'number') => {
  const max = type === 'number' ? 50 : 3;
  const randomNumber = Math.floor(Math.random() * max);
  if (type === 'number') {
    return randomNumber;
  }
  let result = null;
  switch (randomNumber) {
    case 0:
      result = '+';
      break;
    case 1:
      result = '-';
      break;
    case 2:
      result = '*';
      break;
    default:
      console.log('GetRandiom eror');
      break;
  }
  return result;
};
const AnswerСheck = (userAnswer, correctAnswer, username) => {
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    return true;
  }
  console.log('Correct!');
  return false;
};
export { GetRandom, AnswerСheck };
