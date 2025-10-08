//Array creation
let array = ["Initial value"]

//functions
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
}

//initial display


//Button Handlers