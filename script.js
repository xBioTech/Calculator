const btn = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
const inputNum = document.querySelector(".inputnum")

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
        inputNum.textContent = btn.textContent;
    });
});

const displayValue = input.value;
