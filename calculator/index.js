const display = document.getElementById("display");

// Flag to keep track of whether the last input was a function
let lastWasFunction = false;

function appendToDisplay(input) {
    if (input === '^') {
        display.value += '**'; // Replace ^ with ** for exponentiation
        lastWasFunction = false;
    } else if (input === 'sin()' || input === 'cos()' || input === 'tan()' || input === 'sqrt()' || input === 'Math.log()' || input === 'Math.exp()') {
        if (!lastWasFunction && display.value.trim().length > 0) {
            display.value += input;
            lastWasFunction = true;
        }
    } else if (input === ')') {
        // Prevent adding closing bracket if the last input was a function
        if (lastWasFunction || display.value.length === 0 || display.value.slice(-1) === '(') {
            // Do nothing if the last input was a function or display starts with an opening bracket
        } else {
            display.value += input;
            lastWasFunction = false;
        }
    } else {
        display.value += input;
        lastWasFunction = false;
    }
}

function clearDisplay() {
    display.value = "";
    lastWasFunction = false;
}

function calculate() {
    try {
        // Convert `^` to `**` for exponentiation
        let expression = display.value.replace(/\^/g, '**');
        // Evaluate the expression and set the result
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
