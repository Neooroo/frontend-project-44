#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const questionOne = getRandomInt(101);
const questionTwo = getRandomInt(101);
const questionThree = getRandomInt(101);
const array = [questionOne, questionTwo, questionThree];
let i = 0;
for (const element of array) {
  console.log(`Question: ${element}`);
  const answer = readlineSync.question('Answer: ');
  if (element % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
    i += 1;
  } if (element % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    i += 1;
  } else if ((element % 2 !== 0 && answer !== 'no') || (element % 2 === 0 && answer !== 'yes')) {
    let correctAnswer = '';
    if (element % 2 !== 0) {
      correctAnswer = 'no';
    } else correctAnswer = 'yes';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}`);
    break;
  } if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
}
