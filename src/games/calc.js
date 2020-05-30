import getRandomInt from '../utilities.js';

const countQuestion = 3;
const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getQuestionForCalcGame = () => {
  const numberOperation = getRandomInt(0, operations.length - 1);
  const [firstValue, secondeValue] = [getRandomInt(1, 100), getRandomInt(1, 100)];
  const question = `${firstValue} ${operations[numberOperation]} ${secondeValue}`;

  switch (numberOperation) {
    case 0:
      return [question, firstValue + secondeValue];
    case 1:
      return [question, firstValue - secondeValue];
    case 2:
      return [question, firstValue * secondeValue];
    default:
      return [];
  }
};

export {
  getQuestionForCalcGame,
  gameDescription,
  countQuestion,
};
