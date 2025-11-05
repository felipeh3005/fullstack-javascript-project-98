import runGame from '../index.js'

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

const runGcdGame = () => {
  const description = 'Encuentra el máximo común divisor de los números dados.';
  runGame(description, generateRound);
};

export default runGcdGame;