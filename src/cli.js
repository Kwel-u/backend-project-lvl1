import readlineSync from 'readline-sync';

let nameUser;

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const getNameOfUser = () => readlineSync.question('May I have your name? ');

const greetOfUser = () => {
  nameUser = getNameOfUser();
  console.log(`Hello, ${nameUser}!`);
};

const showRules = (gameDescription) => {
  console.log(gameDescription);
};

const printCorrect = () => {
  console.log('Correct!');
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
};

const toHailUser = () => {
  console.log(`Congratulations, ${nameUser}!`);
};

const toCheerUser = (userAnswer, correctАnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctАnswer}".`);
  console.log(`Let's try again, ${nameUser}!`);
};

export {
  sayWelcome,
  greetOfUser,
  showRules,
  printCorrect,
  getAnswer,
  toHailUser,
  toCheerUser,
};
