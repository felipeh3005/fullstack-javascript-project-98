import readlineSync from 'readline-sync';

export const askName = () => {
    console.log('¡Bienvenido a Brain Games!');
    const name = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`);
};