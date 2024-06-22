/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/



// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

const display = document.querySelector(".display")
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const equalsButton = document.querySelector(".button.equals");
// const clearButton = document.querySelector(".button.operator")

let firstOperand = '';
let operator = '';
let secondOperand = '';


// As a user, I want to be able to see the output of the mathematical operation.
function updateDisplay() {
    display.textContent = `${firstOperand} ${operator} ${secondOperand}`
}

function clearButton(){
    firstOperand = '';
    operator = '';
    secondOperand = '';
}

// As a user, I want to be able to select numbers so that I can perform operations with them.
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log('clicked', event)

    // if(event.target.className === "button number") {
    //     display.textContent += button.textContent
    // }
        if (operator === '') {
        firstOperand += button.textContent;
        updateDisplay();
        } else {
        secondOperand += button.textContent;
        updateDisplay();
        }
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log('clicked', event)

    // if(event.target.className === "button operator") {
    //     display.textContent = button.textContent
    // }

    if(button.textContent === 'C'){
        display.textContent = clearButton() // this will reset the calculator and show no number... As a user, I want to be able to clear all operations and start from 0.
    } else if (operator === '' && firstOperand !== '') {
        operator = button.textContent;
        updateDisplay();
    }
    })

    // if(operator === '' && firstOperand !== '') {
    //     operator = button.textContent;
    //     updateDisplay();
    // } else if (button.textContent === 'C'){
    //     display.textContent = '' // this will reset the calculator and show no number
    // }
})

equalsButton.addEventListener('click', () => {
    // console.log('clicked', event)

    if(firstOperand !== '' && secondOperand !== '' ) {
    let result;

    const num1 = Number (firstOperand)
    const num2 = Number (secondOperand)

    switch (operator) {

        // As a user, I want to be able to add two numbers together.
        case '+':
            result = num1 + num2;
            break;

        // As a user, I want to be able to subtract one number from another.
        case '-':
            result = num1 - num2;
            break;

        // As a user, I want to be able to multiply two numbers together.
        case '*':
            result = num1 * num2;
            break;

        // As a user, I want to be able to divide one number by another.
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 0
            }
            break

        default:
            return
    }

    display.textContent = result

    firstOperand = '';
    operator = '';
    secondOperand = '';
    }

})

// display.addEventListener('click', () => {
//     // console.log('clicked', ())
//         display.textContext = ''
//     }
// );


// display the number in the display

// click on an operator, such as :
// add
// subtract
// multiply/
// divide

// output --- equal sign

// clear all operations and start from 0
