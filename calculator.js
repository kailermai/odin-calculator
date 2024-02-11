var firstNum;
var secondNum;
var operatorIndex;
var displayText = "";
let result;

function add(num1, num2) {
  return Number(num1) + Number(num2);
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

function operate(displayMath) {
  let matharray = displayMath.split(" ");
  //Calculates multiplication and division first
  while (matharray.includes("*") || matharray.includes("/")) {
    if (matharray.indexOf("*") > matharray.indexOf("/")) {
      let operatorIndex = matharray.indexOf("*");
      firstNum = matharray[operatorIndex - 1];
      secondNum = matharray[operatorIndex + 1];
      result = multiply(firstNum, secondNum);
      matharray.splice(operatorIndex - 1, 3, result);
    } else {
      let operatorIndex = matharray.indexOf("/");
      firstNum = matharray[operatorIndex - 1];
      secondNum = matharray[operatorIndex + 1];
      result = divide(firstNum, secondNum);
      matharray.splice(operatorIndex - 1, 3, result);
    }
  }
  //Calculates addition and subtraction
  while (matharray.includes("+") || matharray.includes("-")) {
    if (matharray.indexOf("+") > matharray.indexOf("-")) {
      let operatorIndex = matharray.indexOf("+");
      firstNum = matharray[operatorIndex - 1];
      secondNum = matharray[operatorIndex + 1];
      result = add(firstNum, secondNum);
      matharray.splice(operatorIndex - 1, 3, result);
    } else {
      let operatorIndex = matharray.indexOf("-");
      firstNum = matharray[operatorIndex - 1];
      secondNum = matharray[operatorIndex + 1];
      result = subtract(firstNum, secondNum);
      matharray.splice(operatorIndex - 1, 3, result);
    }
  }

  return matharray;
}

const display = document.querySelector(".display");
display.textContent = displayText;

//Adding each number to display text
const num0 = document.querySelector("#zero");
num0.addEventListener("click", () => {
  displayText += "0";
  display.textContent = displayText;
});
const num1 = document.querySelector("#one");
num1.addEventListener("click", () => {
  displayText += "1";
  display.textContent = displayText;
});
const num2 = document.querySelector("#two");
num2.addEventListener("click", () => {
  displayText += "2";
  display.textContent = displayText;
});
const num3 = document.querySelector("#three");
num3.addEventListener("click", () => {
  displayText += "3";
  display.textContent = displayText;
});
const num4 = document.querySelector("#four");
num4.addEventListener("click", () => {
  displayText += "4";
  display.textContent = displayText;
});

const num5 = document.querySelector("#five");
num5.addEventListener("click", () => {
  displayText += "5";
  display.textContent = displayText;
});

const num6 = document.querySelector("#six");
num6.addEventListener("click", () => {
  displayText += "6";
  display.textContent = displayText;
});

const num7 = document.querySelector("#seven");
num7.addEventListener("click", () => {
  displayText += "7";
  display.textContent = displayText;
});

const num8 = document.querySelector("#eight");
num8.addEventListener("click", () => {
  displayText += "8";
  display.textContent = displayText;
});

const num9 = document.querySelector("#nine");
num9.addEventListener("click", () => {
  displayText += "9";
  display.textContent = displayText;
});

const btndivide = document.querySelector("#divide");
btndivide.addEventListener("click", () => {
  displayText += " / ";
  display.textContent = displayText;
});

const btnadd = document.querySelector("#add");
btnadd.addEventListener("click", () => {
  displayText += " + ";
  display.textContent = displayText;
});

const btnsubtract = document.querySelector("#subtract");
btnsubtract.addEventListener("click", () => {
  displayText += " - ";
  display.textContent = displayText;
});

const btnmultiply = document.querySelector("#multiply");
btnmultiply.addEventListener("click", () => {
  displayText += " * ";
  display.textContent = displayText;
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  displayText = "";
  display.textContent = displayText;
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  displayText = Math.floor(operate(displayText)[0] * 100) / 100;
  display.textContent = displayText;
});
