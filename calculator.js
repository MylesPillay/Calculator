// VARIABLE DECLARATIONS

const numberBtns = document.getElementById("#number");
const screenDisplay = document.getElementById("#screen");
const operatorBtn = document.getElementById("symbol");
const deleteBtn = document.getElementById("#delete");
const allClearBtn = document.getElementById("#all-clear");
const equals = document.getElementById("#equals");

//Display

numberBtns.forEach((numberBtns) => {
    numberBtns.addEventListener("click", (event) => {
      let numberValue = event.target.value;
      screenDisplay.innerHTML += numberValue;
      console.log(screenDisplay);
    })
  });
  const clearScreen = () => {
    screenDisplay.innerHTML = "";
  };
  clear.addEventListener("click", clearScreen);
  
// creating n1 (number One)

let n1;
let operator;
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {

    numberOne = parseInt(screenDisplay.innerHTML);
    console.log(n1);
    clearScreen();

    operator = operatorBtn.value;
    console.log(operator);

  });
})

// creating n2

let n2;
let operator;
equals.addEventListener("click", () => {
    n2 = parseInt(displayScreen.innerHTML)
    ;
    if (operator == "+") {
      result = addNumbers(n1, n2);
      console.log(result);
      screenDisplay.innerHTML = result;
    } else if (operator == "-") {
      result = substractNumbers(n1, n2);
      console.log(result);
      screenDisplay.innerHTML = result;
    } else if (operator == "*") {
      result = multiplyNumbers(n1, n2);
      console.log(result);
      screenDisplay.innerHTML = result;
    } else if (operator == "/") {
      result = divideNumbers(n1, n2);
      console.log(result);
      screenDisplay.innerHTML = result;
    }
  });
