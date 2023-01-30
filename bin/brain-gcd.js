#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting } from '../src/cli.js';
import { GetRandom, AnswerСheck } from '../src/brain-games/brain-games.js';
import GetGreatestCommonDivisor from '../src/brain-games/brain-gcd.js';

const BrainGcd = () => {
  const username = Greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = GetRandom('number');
    const randomNumber2 = GetRandom('number');
    const correctAnswer = GetGreatestCommonDivisor(randomNumber1, randomNumber2);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (AnswerСheck(userAnswer, correctAnswer, username)) {
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
BrainGcd();
