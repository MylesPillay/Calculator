const currentScreenOutput = document.querySelector(
  ".calculator__screen__output-current"
);
const previousScreenOutput = document.querySelector(
  ".calculator__screen__output-previous"
);
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");
const decimalBtn = document.querySelector(".decimal");

let operator;
let firstNumber;
let secondNumber;
let result;

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    let number = button.value;
    currentScreenOutput.innerHTML += number;
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentScreenOutput.innerHTML === "" && !firstNumber) {
      console.error("You must type in a number");
    } else if (operator) {
      operator = button.value;
      previousScreenOutput.innerHTML = `${firstNumber} ${operator}`;
      currentScreenOutput.innerHTML = "";
    } else {
      firstNumber = parseFloat(currentScreenOutput.innerHTML);
      operator = button.value;
      previousScreenOutput.innerHTML = `${firstNumber} ${operator}`;
      currentScreenOutput.innerHTML = "";
    }
  });
});

const calculateResult = () => {
  if (operator === "+") {
    return firstNumber + secondNumber;
  } else if (operator === "-") {
    return firstNumber - secondNumber;
  } else if (operator === "x") {
    return firstNumber * secondNumber;
  } else if (operator === "/") {
    return firstNumber / secondNumber;
  } else {
    console.error("No operator selected");
  }
};

const finalOutput = () => {
  if (currentScreenOutput.innerHTML === "") {
    console.error("You must type in a number");
  } else {
    secondNumber = parseFloat(currentScreenOutput.innerHTML);
    previousScreenOutput.innerHTML = firstNumber + operator + secondNumber;
    result = calculateResult();
    if (result % 1 != 0) {
      currentScreenOutput.innerHTML = result.toFixed(4);
    } else if (result % 1 === 0) {
      currentScreenOutput.innerHTML = result;
    } else {
      console.error("No operator selected");
    }
  }
};

equalsBtn.addEventListener("click", finalOutput);

const clearAll = () => {
  currentScreenOutput.innerHTML = "";
  previousScreenOutput.innerHTML = "";
  firstNumber = "";
  secondNumber = "";
  result = "";
  operator = "";
};

clearBtn.addEventListener("click", clearAll);
