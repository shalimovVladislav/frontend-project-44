#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting } from '../src/cli.js';
import { GetRandom, AnswerСheck } from '../src/brain-games/brain-games.js';

const BrainEven = () => {
  const username = Greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = GetRandom('number');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (AnswerСheck(userAnswer, correctAnswer, username)) {
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
BrainEven();
