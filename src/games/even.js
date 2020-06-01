import getRandomInt from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionEvenGame = () => {
  const randomNumber = getRandomInt(1, 1000);
  const correctАnswer = (isEven(randomNumber) ? 'yes' : 'no');

  return [randomNumber, correctАnswer];
};

export default () => {
  startGame(getQuestionEvenGame, gameDescription);
};
