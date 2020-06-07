import readlineSync from 'readline-sync';

import {
  getAnswer,
  cheerUser,
} from './cli.js';

export default (getRound, gameDescription, roundsCount) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let round = 0; round < roundsCount; round += 1) {
    const [question, correctАnswer] = getRound();
    const userAnswer = getAnswer(question);
    if (userAnswer !== correctАnswer) {
      cheerUser(userAnswer, correctАnswer, userName);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
