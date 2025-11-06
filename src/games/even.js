import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const runEvenGame = () => runGame(description, generateRound);

export default runEvenGame;
