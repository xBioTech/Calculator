const btn = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
const inputNum = document.querySelector(".inputnum");
const equal = document.querySelector(".equal");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const memoryNum = document.querySelector(".memorynum");

function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    if(operator === "+"){
        return add(num1, num2);
    } else if (operator === "-"){
        return substract(num1, num2);
    } else if (operator === "*"){
        return multiply(num1, num2);
    } else if (operator === "/"){
        return divide(num1, num2);
    }
}

btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentNumber += btn.textContent;
        inputNum.textContent = currentNumber;
    });
});

let previousNumber = "";
let selectedOperator = "";
let result = null;
let currentNumber = "";

operator.forEach((btn) => {
btn.addEventListener("click", () => {
    if(btn.textContent === "+" || btn.textContent === "-" || btn.textContent === "*" || btn.textContent === "/"){
        memoryNum.textContent = inputNum.textContent;
    }
    if (previousNumber !== "" && selectedOperator !== "") {
        result = operate(selectedOperator, +previousNumber, +currentNumber);
        previousNumber = result
        memoryNum.textContent = previousNumber;
        inputNum.textContent = previousNumber;
        currentNumber = "";
    } else {
        previousNumber = currentNumber;
        currentNumber = "";
    }
    memoryNum.textContent += " " + btn.textContent + " ";
    selectedOperator = btn.textContent;
});
});

equal.addEventListener("click", () => {
    if(previousNumber !== "" && selectedOperator !== "" && currentNumber !== ""){
        result = operate(selectedOperator, +previousNumber, +currentNumber);
    }
    memoryNum.textContent += currentNumber;
    memoryNum.textContent += " " + equal.textContent; 
    inputNum.textContent = result;
    previousNumber = "";
    selectedOperator = "";
    currentNumber = result;
});



clear.addEventListener("click", () => {
    memoryNum.textContent = "";
    inputNum.textContent = 0;
    previousNumber = "";
    selectedOperator = "";
    result = null;
    currentNumber = "";
});

del.addEventListener("click", () => {
    inputNum.textContent = 0;
    currentNumber = "";
});
