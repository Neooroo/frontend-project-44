#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(`Question: ${getRandomInt(100)}`);
