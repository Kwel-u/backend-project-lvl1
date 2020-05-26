import readlineSync from 'readline-sync';

let nameUser;

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const getNameOfUser = () => readlineSync.question('May I have your name? ');

const greetOfUser = () => {
  nameUser = getNameOfUser();
  console.log(`Hello, ${nameUser}!`);
};

const showRules = (nameGame) => {
  switch (nameGame) {
    case 'evengame':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calcgame':
      console.log('What is the result of the expression?');
      break;
    case 'gcdgame':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progressiongame':
      console.log('What number is missing in the progression?');
      break;
    case 'primegame':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      console.log(`Unknown game '${nameGame}'`);
  }
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
