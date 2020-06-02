import { getRandomInt } from '../utils.js';
import { roundCount } from './const.js';
import startGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGCD(b, a % b);
};

const getRound = () => {
  const firstValue = getRandomInt(1, 200);
  const secondValue = getRandomInt(1, 200);
  const correctАnswer = String(getGCD(firstValue, secondValue));
  const question = `${firstValue} ${secondValue}`;

  return [question, correctАnswer];
};

export default () => {
  startGame(getRound, gameDescription, roundCount);
};
