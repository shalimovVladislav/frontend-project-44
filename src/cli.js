import readlineSync from 'readline-sync';

const GetUsername = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  const Username = GetUsername();
  console.log(`Hello, ${Username}!`);
  return Username;
};
export default Greeting;
