import readlineSync from 'readline-sync';

let nameuser;

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const getNameOfUser = () => readlineSync.question('May I have your name? ');

const greetOfUser = () => {
  nameuser = getNameOfUser();
  console.log(`Hello, ${nameuser}!`);
};

const showRules = (namegame) => {
  switch (namegame) {
    case 'evengame':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calcgame':
      console.log('What is the result of the expression?');
      break;
    default:
      console.log(`Unknown game '${namegame}'`);
  }
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
};

const toHailUser = () => {
  console.log(`Congratulations, ${nameuser}!`);
};

const toCheerUser = (useranswer, correctanswer) => {
  console.log(`"${useranswer}" is wrong answer ;(. Correct answer was "${correctanswer}".`);
  console.log(`Let's try again, ${nameuser}!`);
};

export {
  sayWelcome,
  greetOfUser,
  showRules,
  getAnswer,
  toHailUser,
  toCheerUser,
};