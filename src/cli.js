import readlineSync from 'readline-sync';

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const greetOfUser = () => {
  const name = readlineSync.question('What is your name? ');
  console.log(`Yo, ${name}!`);
};

export {
  sayWelcome,
  greetOfUser,
};