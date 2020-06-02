import { getRandomInt } from '../utils.js';
import { roundCount } from './const.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const question = getRandomInt(1, 1000);
  const correctАnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctАnswer];
};

export default () => {
  startGame(getRound, gameDescription, roundCount);
};
