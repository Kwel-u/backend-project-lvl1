import getRandomInt from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getResultExpression = (firstValue, secondeValue, operation) => {
  switch (operation) {
    case '+':
      return firstValue + secondeValue;
    case '-':
      return firstValue + secondeValue;
    case '*':
      return firstValue + secondeValue;
    default:
      return null;
  }
};

const getQuestionCalcGame = () => {
  const numberOperation = getRandomInt(0, operations.length - 1);
  const firstValue = getRandomInt(1, 100);
  const secondeValue = getRandomInt(1, 100);
  const question = `${firstValue} ${operations[numberOperation]} ${secondeValue}`;
  const answer = getResultExpression(firstValue, secondeValue, operations[numberOperation]);

  return [question, answer];
};

export default () => {
  startGame(getQuestionCalcGame, gameDescription);
};
