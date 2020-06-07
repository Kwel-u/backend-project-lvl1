import { getRandomInt } from '../utils.js';
import { roundsCount } from '../const.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getRound = () => {
  const question = getRandomInt(1, 1000);
  const correctАnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctАnswer];
};

export default () => {
  startGame(getRound, gameDescription, roundsCount);
};
