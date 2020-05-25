import * as cli from '../cli.js';

const isEven = (num) => num % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getGCD = (a, b) => {
  if (b === 0) return Math.abs(a);
  return getGCD(b, a % b);
};

const getNumberForEvenGame = () => {
  const randomNumber = getRandomInt(1000);
  const correctАnswer = (isEven(randomNumber) ? 'yes' : 'no');

  return [randomNumber, correctАnswer];
};

const getExpessionForCalcGame = () => {
  const operations = ['+', '-', '*'];
  const numberOperation = getRandomInt(operations.length);
  const [firstValue, secondeValue] = [getRandomInt(1000), getRandomInt(1000)];
  const question = `${firstValue} ${operations[numberOperation]} ${secondeValue}`;
  let correctАnswer;

  switch (numberOperation) {
    case 0:
      correctАnswer = firstValue + secondeValue;
      break;
    case 1:
      correctАnswer = firstValue - secondeValue;
      break;
    case 2:
      correctАnswer = firstValue * secondeValue;
      break;
    default:
      break;
  }
  return [question, correctАnswer];
};

const getNumbersForGameGCD = () => {
  const [firstValue, secondeValue] = [getRandomInt(200), getRandomInt(200)];
  const correctАnswer = getGCD(firstValue, secondeValue);
  const question = `${firstValue} ${secondeValue}`;

  return [question, correctАnswer];
};

export default (nameGame) => {
  let question;
  let correctАnswer;
  switch (nameGame) {
    case 'evengame':
      [question, correctАnswer] = getNumberForEvenGame();
      break;
    case 'calcgame':
      [question, correctАnswer] = getExpessionForCalcGame();
      break;
    case 'gcdgame':
      [question, correctАnswer] = getNumbersForGameGCD();
      break;
    default:
      break;
  }

  const useranswer = cli.getAnswer(question);

  if (String(useranswer) === String(correctАnswer)) {
    cli.printCorrect();
    return true;
  }
  cli.toCheerUser(useranswer, correctАnswer);
  return false;
};
