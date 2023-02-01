import readlineSync from 'readline-sync';
import { GetRandom, AnswerСheck } from './brain-game.js';

const GetProgression = () => {
  const min = 5;
  const max = 11;
  const progressionLength = Math.random() * (max - min) + min;
  const progression = [];
  const a = GetRandom('number');
  const d = GetRandom('number');
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(a + (d * i));
  }
  return progression;
};
const HideProgressionElement = (progression) => {
  const hiddenElementNumber = Math.floor(Math.random() * progression.length);
  const hiddenElement = progression[hiddenElementNumber];
  progression.splice(hiddenElementNumber, 1, '..');
  return String(hiddenElement);
};
const BrainProgression = (username) => {
  const progression = GetProgression();
  const correctAnswer = HideProgressionElement(progression);
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return AnswerСheck(userAnswer, correctAnswer, username);
};
export default BrainProgression;
