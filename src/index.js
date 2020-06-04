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

export default (getRound, gameDescription, roundCount) => {
  sayWelcome();
  const userName = getUserName();
  greetUser(userName);
  showRules(gameDescription);

  for (let round = 0; round < roundCount; round += 1) {
    const [question, correctАnswer] = getRound();
    const userAnswer = getAnswer(question);
    if (userAnswer !== correctАnswer) {
      cheerUser(userAnswer, correctАnswer, userName);
      return;
    }
    printCorrect();
  }
  hailUser(userName);
};
