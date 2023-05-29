# Calculator

## Live Demo

[Click me to see the Live Demo!](https://xbiotech.github.io/Calculator)

[![Calculator Preview](https://i.gyazo.com/c5a7abe716911f3d7ad64a9bbaaa4b81.gif?autoplay=1&loop=1)](https://gyazo.com/c5a7abe716911f3d7ad64a9bbaaa4b81)

## Welcome! :wave:

Thanks for checking out my Project.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Learning resources](#learning-resources)
  - [Feedback](#got-feedback-for-me)

## Overview

### The project

Calculator project that executes chained calculations, stores and displays last number input and calculation.

This project was created as part of the Odin Project curriculum, an open-source web development education platform. The purpose of this project was to learn and practice new web development skills.

## My process

### Built with

- HTML5
- CSS
- Grid
- JavaScript

### What I learned

- use powerful array functions like the forEach()
- how to store all the values

I added some small code snippets below to illustrate my workwise

```javascript
//input number is stored as memory by clicking any operator button, the for each function allowed to set up one event listener for all operator buttons.
operator.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (
      btn.textContent === "+" ||
      btn.textContent === "-" ||
      btn.textContent === "*" ||
      btn.textContent === "/"
    ) {
      memoryNum.textContent = inputNum.textContent;
    }
    //how i introduced chained calculations
    if (previousNumber !== "" && selectedOperator !== "") {
      result = operate(selectedOperator, +previousNumber, +currentNumber);
      previousNumber = result;
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

//when the user has provided the numbers and the operator that are necessary to calculate, then the program operates on them.
equal.addEventListener("click", () => {
  if (
    previousNumber !== "" &&
    selectedOperator !== "" &&
    currentNumber !== ""
  ) {
    result = operate(selectedOperator, +previousNumber, +currentNumber);
  }
  //it stores the numbers and operator the user has calculated with in the memory
  memoryNum.textContent += currentNumber;
  memoryNum.textContent += " " + equal.textContent;
  //displays the calculation result where the user input normally is displayed and clears number and operator to preapre for a new calculation
  inputNum.textContent = result;
  previousNumber = "";
  selectedOperator = "";
  currentNumber = result;
});
```

### Learning resources

- [The Odin Project](https://www.theodinproject.com/)
- [W3Schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/)
-

## Got feedback for me?

I'm always down for some feedback! I'm constantly striving to improve my coding skills and take them to the next level, so if you have any thoughts or suggestions, don't hesitate to hit me up via email or Discord.

Thanks a ton for your help, and let's blast off together :rocket:

- E-Mail - [Dennis Schneider](mailto:biotech9261@gmail.com)
- Discord - [BioTech](https://discord.com/users/343126401450377217)
