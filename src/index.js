import {
  sayWelcome,
  getUserName,
  greetUser,
  showRules,
  printCorrect,
  getAnswer,
  hailUser,
  cheerUser,
} from './cli.js';

const askUser = (question, correctАnswer, userName) => {
  const userAnswer = getAnswer(question);

  if (userAnswer === correctАnswer) {
    printCorrect();
    return true;
  }
  cheerUser(userAnswer, correctАnswer, userName);
  return false;
};

export default (getRound, gameDescription, roundCount) => {
  sayWelcome();
  const userName = getUserName();
  greetUser(userName);
  showRules(gameDescription);

  for (let round = 0; round < roundCount; round += 1) {
    const [question, correctАnswer] = getRound();
    const isCorrectAnswer = askUser(question, correctАnswer, userName);
    if (!isCorrectAnswer) {
      return;
    }
  }
  hailUser(userName);
};
