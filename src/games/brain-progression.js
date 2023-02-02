import getRandom from './brain-game.js';

const rules = 'What number is missing in the progression?';
const getProgression = () => {
  const min = 5;
  const max = 11;
  const progressionLength = Math.random() * (max - min) + min;
  const progression = [];
  const a = getRandom();
  const d = getRandom();
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
const brainProgression = () => {
  const progression = getProgression();
  const correctAnswer = hideProgressionElement(progression);
  const questionAndCorrectAnswer = [progression, correctAnswer];
  return questionAndCorrectAnswer;
};
export { rules, brainProgression };
