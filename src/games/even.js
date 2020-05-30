import getRandomInt from '../utilities.js';

const countQuestion = 3;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionForEvenGame = () => {
  const randomNumber = getRandomInt(1, 1000);
  const correctАnswer = (isEven(randomNumber) ? 'yes' : 'no');

  return [randomNumber, correctАnswer];
};

export {
  getQuestionForEvenGame,
  gameDescription,
  countQuestion,
};
