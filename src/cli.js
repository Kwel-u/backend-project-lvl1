import readlineSync from 'readline-sync';

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const getNameUser = () => readlineSync.question('May I have your name? ');

const showRules = (gameDescription) => console.log(gameDescription);

const printCorrect = () => console.log('Correct!');

const hailUser = (nameUser) => console.log(`Congratulations, ${nameUser}!`);

const greetUser = (nameUser) => console.log(`Hello, ${nameUser}!`);

const getAnswer = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
};

const cheerUser = (userAnswer, correctАnswer, nameUser) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctАnswer}".`);
  console.log(`Let's try again, ${nameUser}!`);
};

export {
  getNameUser,
  sayWelcome,
  greetUser,
  showRules,
  printCorrect,
  getAnswer,
  hailUser,
  cheerUser,
};
