import getRandomInt from '../utilities.js';

const countQuestion = 3;
const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) return Math.abs(a);
  return getGCD(b, a % b);
};

const getQuestionForGameGCD = () => {
  const [firstValue, secondeValue] = [getRandomInt(1, 200), getRandomInt(1, 200)];
  const correctАnswer = getGCD(firstValue, secondeValue);
  const question = `${firstValue} ${secondeValue}`;

  return [question, correctАnswer];
};

export {
  getQuestionForGameGCD,
  gameDescription,
  countQuestion,
};
