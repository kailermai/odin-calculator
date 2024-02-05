var firstNum;
var secondNum;
var operator;
var displayText;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operatorFunc(firstNum, secondNum, operator) {
  add(firstNum, secondNum);
}

const display = document.querySelector(".display");
display.textContent = displayText;

for (let i = 0; i <= 9; i++) {
  i = document.querySelector(".button." + i);
  i.addEventListener("click", () => {
    displayText += i;
  });
}
