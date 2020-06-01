import getRandomInt from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) return Math.abs(a);
  return getGCD(b, a % b);
};

const getQuestionGameGCD = () => {
  const firstValue = getRandomInt(1, 200);
  const secondeValue = getRandomInt(1, 200);
  const correctАnswer = getGCD(firstValue, secondeValue);
  const question = `${firstValue} ${secondeValue}`;

  return [question, correctАnswer];
};

export default () => {
  startGame(getQuestionGameGCD, gameDescription);
};
