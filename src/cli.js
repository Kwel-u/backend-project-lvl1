import readlineSync from 'readline-sync';

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const getUserName = () => readlineSync.question('May I have your name? ');

const showRules = (gameDescription) => console.log(gameDescription);

const printCorrect = () => console.log('Correct!');

const hailUser = (userName) => console.log(`Congratulations, ${userName}!`);

const greetUser = (userName) => console.log(`Hello, ${userName}!`);

const getAnswer = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
};

const cheerUser = (userAnswer, correctАnswer, userName) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctАnswer}".`);
  console.log(`Let's try again, ${userName}!`);
};

export {
  getUserName,
  sayWelcome,
  greetUser,
  showRules,
  printCorrect,
  getAnswer,
  hailUser,
  cheerUser,
};
