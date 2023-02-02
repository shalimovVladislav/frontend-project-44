import readlineSync from 'readline-sync';
import { getRandom, answerСheck } from './brain-game.js';

const getProgression = () => {
  const min = 5;
  const max = 11;
  const progressionLength = Math.random() * (max - min) + min;
  const progression = [];
  const a = getRandom('number');
  const d = getRandom('number');
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(a + (d * i));
  }
  return progression;
};
const hideProgressionElement = (progression) => {
  const hiddenElementNumber = Math.floor(Math.random() * progression.length);
  const hiddenElement = progression[hiddenElementNumber];
  progression.splice(hiddenElementNumber, 1, '..');
  return String(hiddenElement);
};
const brainProgression = (username) => {
  const progression = getProgression();
  const correctAnswer = hideProgressionElement(progression);
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return answerСheck(userAnswer, correctAnswer, username);
};
export default brainProgression;
