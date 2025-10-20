// Element Selectors
const InputFieldOne = document.querySelector("#input1");
const InputFieldTwo = document.querySelector("#input2");
const ResultField   = document.querySelector("#result");

const AddButton    = document.querySelector("#AddButton");
const MultButton   = document.querySelector("#MultButton");
const SubtButton   = document.querySelector("#SubtButton");
const DivideButton = document.querySelector("#DivButton");

//error list
const Errors = {
    "Error0": "Internal Error: Value somehow requested from non-existent input.",
    "Error1": "Input Error: Please imput valid numbers.",
    "Error2": "Input Error: Division by zero is not allowed"
}

// Functions
function getInput(id) {
    let inputValue;
    switch (id) {
        case 1:
            inputValue = InputFieldOne.value;
            break;
        case 2:
            inputValue = InputFieldTwo.value;
            break;
        default:
            inputValue = "Error0";
            return inputValue;
    }
    return parseFloat(inputValue);
}

function displayResult(result) {
    if (typeof result === 'string' && result.includes("Error")) {
        ResultField.textContent = Errors[result];
    }
    else {
        ResultField.textContent = result;
    }
}

function addInputs() {
    let x = getInput(1);
    let y = getInput(2);
    let z;

    if (x == "Error0" || y == "Error 0") {
        z = "Error0";
    }
    else if (isNaN(x) || isNaN(y)) {
        z = "Error1";
    }
    else {
        z = x + y;
    }

    displayResult(z);
}

function subtractInputs() {
    let x = getInput(1);
    let y = getInput(2);
    let z;

    if (x == "Error0" || y == "Error 0") {
        z = "Error0";
    }
    else if (isNaN(x) || isNaN(y)) {
        z = "Error1";
    }
    else {
        z = x - y;
    }

    displayResult(z);
}

function multiplyInputs() {
    let x = getInput(1);
    let y = getInput(2);
    let z;

    if (x == "Error0" || y == "Error 0") {
        z = "Error0";
    }
    else if (isNaN(x) || isNaN(y)) {
        z = "Error1";
    }
    else {
        z = x * y;
    }

    displayResult(z);
}

function divideInputs() {
    let x = getInput(1);
    let y = getInput(2);
    let z;

    if (x == "Error0" || y == "Error 0") {
        z = "Error0";
    }
    else if (isNaN(x) || isNaN(y)) {
        z = "Error1";
    }
    else if (y == 0) {
        z = "Error2";
    }
    else {
        z = x / y;
    }

    displayResult(z);
}

// Handlers
AddButton.addEventListener("click", addInputs);
SubtButton.addEventListener("click", subtractInputs);
MultButton.addEventListener("click", multiplyInputs);
DivideButton.addEventListener("click", divideInputs);
