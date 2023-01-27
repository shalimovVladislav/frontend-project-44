#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting } from '../src/cli.js';

const GetRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};
const BrainGame = () => {
  const Username = Greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = GetRandomNumber();
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === isEven) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${Username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${Username}!`);
};
BrainGame();
