import { getRandomInt } from '../utils.js';
import { roundCount } from './const.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLen = 10;

const getRound = () => {
  const startProgressionNumber = getRandomInt(1, 100);
  const progression = [startProgressionNumber];
  const step = getRandomInt(1, 50);
  const randomElementIndex = getRandomInt(0, progressionLen - 1);

  for (let i = 1; i < progressionLen; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  const correctАnswer = String(progression[randomElementIndex]);
  progression[randomElementIndex] = '..';
  const question = progression.join(' ');

  return [question, correctАnswer];
};


export default () => {
  startGame(getRound, gameDescription, roundCount);
};
