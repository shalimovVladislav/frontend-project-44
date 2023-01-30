#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting } from '../src/cli.js';
import { GetRandom, AnswerСheck } from '../src/brain-games/brain-games.js';
import GetResultOfExpression from '../src/brain-games/brain-calc.js';

const BrainCalc = () => {
  const username = Greeting();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = GetRandom('number');
    const randomNumber2 = GetRandom('number');
    const operationSign = GetRandom('sign');
    const correctAnswer = GetResultOfExpression(randomNumber1, randomNumber2, operationSign);
    console.log(`Question: ${randomNumber1} ${operationSign} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (AnswerСheck(userAnswer, correctAnswer, username)) {
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
BrainCalc();
