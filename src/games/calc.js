import runGame from '../index.js';

const operators = ['+', '-', '*'];

const getRandomNumber = () => Math.floor(Math.random() * 50) + 1;
const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case "*":
      return a * b;
    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }
};

const description = '¿Cuál es el resultado de la expresión?';

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return [question, correctAnswer];
};

const runCalcGame = () => runGame(description, generateRound);

export default runCalcGame;