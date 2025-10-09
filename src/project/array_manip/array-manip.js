//element declaration
const displayElement = document.querySelector("#arrayDisplay");
const newElementUnshift = document.querySelector("#newElementUnshift");
const newElementPush = document.querySelector("#newElementPush");

//Array creation
let array = ["Initial value"]

//functions
function displayArray() {
    const displayedArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        displayedArray[i] = "Element "+ i +": " + element;
    }
    const displayValue = displayedArray.join(", ");
    displayElement.textContent = displayValue;
}

function unshiftArray(array, value) {
    let values = [];

    if (value.includes(", ")) {
        console.log("Adding '" + value + "' as elements to the beginning of the array.")
        values = value.split(", ")
        for (let i = values.length-1; i > -1; i--) {
            const element = values[i];
            array.unshift(element);
        }
    }
    else {
        console.log("Adding '" + value + "' as an element to the beginning of the array.");
        array.unshift(value);
    }

    displayArray();
}

function pushArray(array, value) {
    let values = [];

    if (value.includes(", ")) {
        console.log("Adding '" + value + "' as elements to the end of the array.")
        values = value.split(", ")
        for (let i = 0; i < values.length; i++) {
            const element = values[i];
            array.push(element);
        }
    }
    else {
        console.log("Adding '" + value + "' as an element to the end of the array.");
        array.push(value);
    }

    displayArray();
}

//initial display
displayArray();

//Button Handlers
document.querySelector("#buttonUnshift").onclick = function () {unshiftArray(array, newElementUnshift.value)};
document.querySelector("#buttonPush").onclick = function () {pushArray(array, newElementPush.value)};