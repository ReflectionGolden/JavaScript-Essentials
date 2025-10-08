//Array creation
let array = ["Initial value"]

//functions
function displayArray() {
    let displayElement = document.getElementById("arrayDisplay");
    let displayValue = "";

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const disp = "Element "+ i +": " + element;
        if (i != array.length - 1) {
            disp.concat(" <br>");
        }
        displayValue.concat(disp);
    }

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