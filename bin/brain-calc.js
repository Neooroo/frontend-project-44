import readlineSync from 'readline-sync';

const mathOperations = ['-', '+', '*'];
function randomIndex() {
  return Math.floor(Math.random() * mathOperations.length);
}
const operations = [mathOperations[randomIndex()], mathOperations[randomIndex()], mathOperations[randomIndex()]];
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);
console.log('What is the result of the expression?');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const coupleOne = [getRandomInt(101), getRandomInt(101)];
const coupleTwo = [getRandomInt(101), getRandomInt(101)];
const coupleThree = [getRandomInt(101), getRandomInt(101)];
let i = 0;
console.log(operations);
for (const element of operations) {
  if (element === '-') {
    console.log(`question: ${coupleOne[0]} - ${coupleOne[1]}`);
    const answer = readlineSync.question('Answer: ');
    let number = coupleOne[0] - coupleOne[1];
    if (number === answer) {
      console.log('correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${number}'`);
    }
  }
}
