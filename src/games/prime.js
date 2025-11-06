import runGame from '../index.js';

const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description =
  'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

const generateRound = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, correctAnswer];
};

const runPrimeGame = () => runGame(description, generateRound);

export default runPrimeGame;
