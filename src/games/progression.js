import getRandomInt from '../utilities.js';

const countQuestion = 3;
const gameDescription = 'What number is missing in the progression?';
const lenProgression = 10;

const getQuestionForGameProgression = () => {
  const startNumberProgression = getRandomInt(1, 100);
  const progression = [startNumberProgression];
  const step = getRandomInt(1, 50);
  const randomIndexElement = getRandomInt(0, lenProgression - 1);

  for (let i = 1; i < lenProgression; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  const correctАnswer = progression[randomIndexElement];
  progression[randomIndexElement] = '..';

  return [progression.join(' '), correctАnswer];
};


export {
  getQuestionForGameProgression,
  gameDescription,
  countQuestion,
};
