import getRandomInt from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num, previousnum) => {
  if (num === previousnum) return true;
  if (num % previousnum === 0) return false;
  return isPrime(num, previousnum + 1);
};

const getQuestionPrimeGame = () => {
  const randomNumber = getRandomInt(1, 1000);
  const correctАnswer = (isPrime(randomNumber, 2) ? 'yes' : 'no');

  return [randomNumber, correctАnswer];
};

export default () => {
  startGame(getQuestionPrimeGame, gameDescription);
};
