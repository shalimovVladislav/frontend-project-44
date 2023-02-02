import readlineSync from 'readline-sync';

const getUsername = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const username = getUsername();
  console.log(`Hello, ${username}!`);
  return username;
};
export default greeting;
