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

const askUser = (question) => getAnswer(question);

const checkUserAnswer = (userAnswer, correctАnswer, userName) => {
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
    const userAnswer = askUser(question);
    const isCorrectAnswer = checkUserAnswer(userAnswer, correctАnswer, userName);
    if (!isCorrectAnswer) {
      return;
    }
  }
  hailUser(userName);
};
