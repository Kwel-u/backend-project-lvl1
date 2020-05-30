import * as cli from './cli.js';

const askUser = (getQuestion) => {
  const [question, correctАnswer] = getQuestion();

  const useranswer = cli.getAnswer(question);

  if (String(useranswer) === String(correctАnswer)) {
    cli.printCorrect();
    return true;
  }
  cli.toCheerUser(useranswer, correctАnswer);
  return false;
};

export default (getQuestion, gameDescription, countQuestion) => {
  cli.sayWelcome();
  cli.greetOfUser();
  cli.showRules(gameDescription);

  for (let question = 0; question < countQuestion; question += 1) {
    if (!askUser(getQuestion)) {
      return;
    }
  }
  cli.toHailUser();
};
