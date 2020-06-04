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

export default (getRound, gameDescription, roundCount) => {
  sayWelcome();
  const userName = getUserName();
  greetUser(userName);
  showRules(gameDescription);

  for (let round = 0; round < roundCount; round += 1) {
    const [question, correctАnswer] = getRound();
    const userAnswer = askUser(question);
    if (userAnswer === correctАnswer) {
      printCorrect();
    } else {
      cheerUser(userAnswer, correctАnswer, userName);
      return;
    }
  }
  hailUser(userName);
};
