import * as cli from '../cli.js';

const isEven = (num) => num % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getNumberForEvenGame = () => {
  const randomnumber = getRandomInt(1000);
  const correctanswer = (isEven(randomnumber) ? 'yes' : 'no');

  return [randomnumber, correctanswer];
};

const getExpessionForCalcGame = () => {
  const operations = ['+', '-', '*'];
  const numberoperation = getRandomInt(operations.length);
  const [firstvalue, secondevalue] = [getRandomInt(1000), getRandomInt(1000)];
  const question = `${firstvalue} ${operations[numberoperation]} ${secondevalue}`;
  let correctanswer;

  switch (numberoperation) {
    case 0:
      correctanswer = firstvalue + secondevalue;
      break;
    case 1:
      correctanswer = firstvalue - secondevalue;
      break;
    case 2:
      correctanswer = firstvalue * secondevalue;
      break;
    default:
      break;
  }
  return [question, correctanswer];
};

const askUser = (namegame) => {
  let question;
  let correctanswer;
  switch (namegame) {
    case 'evengame':
      [question, correctanswer] = getNumberForEvenGame();
      break;
    case 'calcgame':
      [question, correctanswer] = getExpessionForCalcGame();
      break;
    default:
      break;
  }

  const useranswer = cli.getAnswer(question);

  if (String(useranswer) === String(correctanswer)) {
    console.log('Correct!');
    return true;
  }
  cli.toCheerUser(useranswer, correctanswer);
  return false;
};

const startGame = (namegame) => {
  const countquestion = 3;

  cli.showRules(namegame);
  for (let question = 0; question < countquestion; question += 1) {
    if (!askUser(namegame)) {
      return;
    }
  }
  cli.toHailUser();
};

export default startGame;