'use strict';

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Пожалуйста введите число:');
  console.log(userInput);

  numbers.push(Number(userInput));
  console.log(numbers);
} while (userInput !== null);

for (const userInput of numbers) {
  total = total + userInput;
}

alert('Общая сумма чисел равна: ' + String(total));
