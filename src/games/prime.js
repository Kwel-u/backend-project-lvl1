import { getRandomInt } from '../utils.js';
import { roundCount } from './const.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num, previousNum) => {
  if (num === previousNum) {
    return true;
  }
  if (num % previousNum === 0) {
    return false;
  }
  return isPrime(num, previousNum + 1);
};

const getRound = () => {
  const randomNumber = getRandomInt(1, 1000);
  const correctАnswer = isPrime(randomNumber, 2) ? 'yes' : 'no';

  return [randomNumber, correctАnswer];
};

export default () => {
  startGame(getRound, gameDescription, roundCount);
};
