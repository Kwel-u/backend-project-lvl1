import getRandomInt from '../utilities.js';

const countQuestion = 3;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num, previousnum) => {
  if (num === previousnum) return true;
  if (num % previousnum === 0) return false;
  return isPrime(num, previousnum + 1);
};

const getQuestionForPrimeGame = () => {
  const randomNumber = getRandomInt(1, 1000);
  const correctАnswer = (isPrime(randomNumber, 2) ? 'yes' : 'no');

  return [randomNumber, correctАnswer];
};

export {
  getQuestionForPrimeGame,
  gameDescription,
  countQuestion,
};
