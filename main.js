'use strict';

// Capture DOM elements in variables
const currentScreenOutput = document.querySelector(
  '.calculator__screen__output-current'
);
const previousScreenOutput = document.querySelector(
  '.calculator__screen__output-previous'
);
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('.decimal');

// Variable to capture operator when pressed
let operator;

// Variable to store the number before operator button is pressed
let firstNumber;

// Variable to store second number after equals operator button has been pressed
let secondNumber;

// Final result variable
let result;

// When number button is pressed, update primary display on screen
numberBtns.forEach((button) => {
  button.addEventListener('click', () => {
    // button.classList.add('toggleBtnColor');
    let number = button.value;
    currentScreenOutput.innerHTML += number;
  });
});

// Store first number input to into a variable, clear currentScreen and display on previousScreen. Also capture the value of the operator button that was pressed
operatorBtns.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentScreenOutput.innerHTML === '' && !firstNumber) {
      console.error('You must type in a number');
    } else if (operator) {
      operator = button.value;
      previousScreenOutput.innerHTML = `${firstNumber} ${operator}`;
      currentScreenOutput.innerHTML = '';
    } else {
      firstNumber = parseFloat(currentScreenOutput.innerHTML);
      operator = button.value;
      previousScreenOutput.innerHTML = `${firstNumber} ${operator}`;
      currentScreenOutput.innerHTML = '';
    }
  });
});

// Function to calculate equation of the two number variables
const calculateResult = () => {
  if (operator === '+') {
    return firstNumber + secondNumber;
  } else if (operator === '-') {
    return firstNumber - secondNumber;
  } else if (operator === 'x') {
    return firstNumber * secondNumber;
  } else if (operator === '/') {
    return firstNumber / secondNumber;
  } else {
    console.error('No operator selected');
  }
};

// Function for equals button click event listener to call on, which assigns the second number to a variable, stores the result of equation into a variable and updates display to show the answer to equation. This is done by calling the calculateResult function
const finalOutput = () => {
  if (currentScreenOutput.innerHTML === '') {
    console.error('You must type in a number');
  } else {
    secondNumber = parseFloat(currentScreenOutput.innerHTML);
    previousScreenOutput.innerHTML = firstNumber + operator + secondNumber;
    result = calculateResult();
    if (result % 1 != 0) {
      currentScreenOutput.innerHTML = result.toFixed(4);
    } else if (result % 1 === 0) {
      currentScreenOutput.innerHTML = result;
    } else {
      console.error('No operator selected');
    }
  }
};

// Equals button click event listener will invoke the finalOutput function above
equalsBtn.addEventListener('click', finalOutput);



// Clear/reset function
const clearAll = () => {
  currentScreenOutput.innerHTML = '';
  previousScreenOutput.innerHTML = '';
  firstNumber = '';
  secondNumber = '';
  result = '';
  operator = '';
};

clearBtn.addEventListener('click', clearAll);