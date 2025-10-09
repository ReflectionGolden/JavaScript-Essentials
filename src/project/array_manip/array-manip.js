//element declaration
const displayElement = document.querySelector("#arrayDisplay");
const newElementUnshift = document.querySelector("#newElementUnshift");
const newElementPush = document.querySelector("#newElementPush");
const removalIndex = document.querySelector("#removalIndex");

//Array creation
let array = ["Initial value"];

//functions
function displayArray() {
    const displayedArray = [];
    array.forEach((element, index) => {
        displayedArray.push("Element "+ index +": " + element);
    });
    const displayValue = displayedArray.join(", ");
    console.log("Displaying array ["+ array.join(", ") +"] as ["+ displayValue +"]");
    displayElement.textContent = displayValue;
}

function unshiftArray(array, value) {
    let values = [];

    if (value.includes(", ")) {
        console.log("Adding '" + value + "' as elements to the beginning of the array.");
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
        console.log("Adding '" + value + "' as elements to the end of the array.");
        values = value.split(", ")
        values.forEach ((element) => array.push(element));
    }
    else {
        console.log("Adding '" + value + "' as an element to the end of the array.");
        array.push(value);
    }

    displayArray();
}

function shiftArray(array) {
    const removedValue = array.shift();
    console.log("Removed '"+ removedValue + "' from the front of the array.");

    displayArray();
}

function popArray(array) {
    const removedValue = array.pop();
    console.log("Removed '"+ removedValue + "' from the end of the array.");

    displayArray();
}

function spliceArray(array, index) {
    const removedValue = array.splice(index, 1);
    console.log("Removed '"+ removedValue + "' from position "+ index +" of the array.");

    displayArray();
}

//initial display
displayArray();

//Button Handlers
document.querySelector("#buttonUnshift").onclick = function () {unshiftArray(array, newElementUnshift.value)};
document.querySelector("#buttonPush").onclick    = function () {pushArray(array, newElementPush.value)};
document.querySelector("#buttonShift").onclick   = function () {shiftArray(array)};
document.querySelector("#buttonPop").onclick     = function () {popArray(array)};
document.querySelector("#buttonSplice").onclick  = function () {spliceArray(array, removalIndex.value)};