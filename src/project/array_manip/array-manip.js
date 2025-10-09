//element declaration
const displayElement = document.querySelector("#arrayDisplay");
const newElementUnshift = document.querySelector("#newElementUnshift");

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
        console.log("Adding '" + values + "' as elements to the beginning of the array.")
        values = value.split(", ")
        for (let i = 0; i < values.length; i++) {
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

//initial display
displayArray();

//Button Handlers
document.querySelector("#buttonUnshift").onclick = function () {unshiftArray(array, newElementUnshift.value)};
