import runGame from '../index.js';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length = 10) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 10);
  const length = 10;
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = generateProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

const description = '¿Qué número falta en la progresión?';

const runProgressionGame = () => runGame(description, generateRound);

export default runProgressionGame;
