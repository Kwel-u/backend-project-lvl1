import { getRandomInt } from '../utils.js';
import { roundCount } from './const.js';
import startGame from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getRound = () => {
  const index = getRandomInt(0, operators.length - 1);
  const operator = operators[index];
  const firstValue = getRandomInt(1, 100);
  const secondValue = getRandomInt(1, 100);
  const question = `${firstValue} ${operator} ${secondValue}`;
  const correctАnswer = String(calculate(firstValue, secondValue, operator));

  return [question, correctАnswer];
};

export default () => {
  startGame(getRound, gameDescription, roundCount);
};
