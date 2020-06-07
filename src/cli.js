import readlineSync from 'readline-sync';

const getAnswer = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
};

const cheerUser = (userAnswer, correctАnswer, userName) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctАnswer}".`);
  console.log(`Let's try again, ${userName}!`);
};

export {
  getAnswer,
  cheerUser,
};
