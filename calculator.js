var firstNum;
var secondNum;
var operator;
var displayText = "";

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

//Adding each number to display text
const num0 = document.querySelector("#zero");
num0.addEventListener("click", () => {
  displayText += 0;
  display.textContent = displayText;
});
const num1 = document.querySelector("#one");
num1.addEventListener("click", () => {
  displayText += 1;
  display.textContent = displayText;
});
const num2 = document.querySelector("#two");
num2.addEventListener("click", () => {
  displayText += 2;
  display.textContent = displayText;
});
const num3 = document.querySelector("#three");
num3.addEventListener("click", () => {
  displayText += 3;
  display.textContent = displayText;
});
const num4 = document.querySelector("#four");
num4.addEventListener("click", () => {
  displayText += 4;
  display.textContent = displayText;
});

const num5 = document.querySelector("#five");
num5.addEventListener("click", () => {
  displayText += 5;
  display.textContent = displayText;
});

const num6 = document.querySelector("#six");
num6.addEventListener("click", () => {
  displayText += 6;
  display.textContent = displayText;
});

const num7 = document.querySelector("#seven");
num7.addEventListener("click", () => {
  displayText += 7;
  display.textContent = displayText;
});

const num8 = document.querySelector("#eight");
num8.addEventListener("click", () => {
  displayText += 8;
  display.textContent = displayText;
});

const num9 = document.querySelector("#nine");
num9.addEventListener("click", () => {
  displayText += 9;
  display.textContent = displayText;
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  displayText = "";
  display.textContent = displayText;
});
