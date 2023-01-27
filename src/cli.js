import readlineSync from 'readline-sync';

export const GetUsername = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
export const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  const Username = GetUsername();
  console.log(`Hello, ${Username}!`);
  return Username;
};
