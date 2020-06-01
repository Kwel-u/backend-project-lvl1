import {
  sayWelcome,
  getNameUser,
  greetUser,
  showRules,
  printCorrect,
  getAnswer,
  hailUser,
  cheerUser,
} from './cli.js';

const countQuestion = 3;

const askUser = (getQuestion, nameUser) => {
  const [question, correctАnswer] = getQuestion();

  const userAnswer = getAnswer(question);

  if (String(userAnswer) === String(correctАnswer)) {
    printCorrect();
    return true;
  }
  cheerUser(userAnswer, correctАnswer, nameUser);
  return false;
};

export default (getQuestion, gameDescription) => {
  sayWelcome();
  const nameUser = getNameUser();
  greetUser(nameUser);
  showRules(gameDescription);

  for (let question = 0; question < countQuestion; question += 1) {
    if (!askUser(getQuestion, nameUser)) {
      return;
    }
  }
  hailUser(nameUser);
};
