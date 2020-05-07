import readlineSync from 'readline-sync';

let nameuser;

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const getNameOfUser = () => readlineSync.question('May I have your name? ');

const greetOfUser = () => {
  nameuser = getNameOfUser();
  console.log(`Hello, ${nameuser}!`);
};

const isEven = (num) => num % 2 === 0;

const askUser = () => {
  const randomnumber = Math.round(Math.random() * 1000);

  console.log(`Question: ${randomnumber}`);

  const useranswer = readlineSync.question('Your answer: ');
  const correctanswer = (isEven(randomnumber) ? 'yes' : 'no');

  if (useranswer === correctanswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${useranswer}" is wrong answer ;(. Correct answer was "${correctanswer}".`);
  return false;
};

const startEvenGame = () => {
  let countwellanswer = 0;
  const needwellanswer = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let question = 0; question < 3; question += 1) {
    if (askUser()) {
      countwellanswer += 1;
    } else {
      break;
    }
  }
  if (countwellanswer === needwellanswer) {
    console.log(`Congratulations, ${nameuser}!`);
  } else {
    console.log(`Let's try again, ${nameuser}!`);
  }
};

export {
  sayWelcome,
  greetOfUser,
  startEvenGame,
};