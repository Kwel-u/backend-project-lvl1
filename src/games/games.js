import * as cli from '../cli.js';

const isEven = (num) => num % 2 === 0;

const isPrime = (num, previousnum) => {
  if (num === previousnum) return true;
  if (num % previousnum === 0) return false;
  return isPrime(num, previousnum + 1);
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getGCD = (a, b) => {
  if (b === 0) return Math.abs(a);
  return getGCD(b, a % b);
};

const getQuestionForEvenGame = () => {
  const randomNumber = getRandomInt(1000);
  const correctАnswer = (isEven(randomNumber) ? 'yes' : 'no');

  return [randomNumber, correctАnswer];
};

const getQuestionForCalcGame = () => {
  const operations = ['+', '-', '*'];
  const numberOperation = getRandomInt(operations.length);
  const [firstValue, secondeValue] = [getRandomInt(1000), getRandomInt(1000)];
  const question = `${firstValue} ${operations[numberOperation]} ${secondeValue}`;

  switch (numberOperation) {
    case 0:
      return [question, firstValue + secondeValue];
    case 1:
      return [question, firstValue - secondeValue];
    case 2:
      return [question, firstValue * secondeValue];
    default:
      return [];
  }
};

const getQuestionForGameGCD = () => {
  const [firstValue, secondeValue] = [getRandomInt(200), getRandomInt(200)];
  const correctАnswer = getGCD(firstValue, secondeValue);
  const question = `${firstValue} ${secondeValue}`;

  return [question, correctАnswer];
};

const getQuestionForGameProgression = () => {
  const lenProgression = 10;
  const startNumberProgression = getRandomInt(100);
  const progression = [startNumberProgression];
  const step = getRandomInt(50);
  const randomIndexElement = getRandomInt(lenProgression);

  for (let i = 1; i < lenProgression; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  const correctАnswer = progression[randomIndexElement];
  progression[randomIndexElement] = '..';

  return [progression.join(' '), correctАnswer];
};

const getQuestionForPrimeGame = () => {
  const randomNumber = getRandomInt(1000) + 1;
  const correctАnswer = (isPrime(randomNumber, 2) ? 'yes' : 'no');

  return [randomNumber, correctАnswer];
};

export default (nameGame) => {
  let question;
  let correctАnswer;
  switch (nameGame) {
    case 'evengame':
      [question, correctАnswer] = getQuestionForEvenGame();
      break;
    case 'calcgame':
      [question, correctАnswer] = getQuestionForCalcGame();
      break;
    case 'gcdgame':
      [question, correctАnswer] = getQuestionForGameGCD();
      break;
    case 'progressiongame':
      [question, correctАnswer] = getQuestionForGameProgression();
      break;
    case 'primegame':
      [question, correctАnswer] = getQuestionForPrimeGame();
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
