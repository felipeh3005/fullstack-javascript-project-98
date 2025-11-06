import readlineSync from 'readline-sync';

const runGame = (gameDescription, generateRound) => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log(gameDescription);

  const roundsToWin = 3;

  for (let i = 0; i < roundsToWin; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync
      .question('Tu respuesta: ')
      .trim()
      .toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(
        `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`,
      );
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runGame;
