import { getRandomInt } from '../utils.js';
import { roundCount } from '../const.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLen = 10;

const getProgression = () => {
  const progression = [];
  const step = getRandomInt(1, 50);
  const randomProgressionIndex = getRandomInt(0, progressionLen - 1);
  progression.push(getRandomInt(1, 100));

  for (let i = 1; i < progressionLen; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  const missingElement = String(progression[randomProgressionIndex]);
  progression[randomProgressionIndex] = '..';

  return [progression.join(' '), missingElement];
};

const getRound = () => {
  const [question, correctАnswer] = getProgression();

  return [question, correctАnswer];
};


export default () => {
  startGame(getRound, gameDescription, roundCount);
};
