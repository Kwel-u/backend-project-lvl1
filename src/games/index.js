import * as cli from '../cli.js';
import askUser from './games.js';

const startGame = (nameGame, countQuestion) => {
  cli.showRules(nameGame);

  for (let question = 0; question < countQuestion; question += 1) {
    if (!askUser(nameGame)) {
      return;
    }
  }
  cli.toHailUser();
};

export default startGame;
