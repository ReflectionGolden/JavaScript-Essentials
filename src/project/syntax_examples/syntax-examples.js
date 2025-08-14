var varOne = "this is a variable using var"; //var variable
let letOne = 42; //let variable
const constOne = [1, 2, 3]; //constant

//named function
function namedFunction() {
    console.log("This is a named function, and it is outputting the var variable '"+varOne+"'.")
}
namedFunction();

//Anonymous function assigned to a variable
let anonFunc = function() {
    console.log("This is an anonymous function, assigned to a variable it is outputting the let variable '"+letOne+"'.")
}
anonFunc();

//built-in function (using parseInt as the example)
let numStr = "123";
let parsedNum = parseInt(numStr);
console.log("The parsed number for the built-in function:", parsedNum);

//If/else conditional
const date = new Date();
let dayOfMonth = date.getDate();

function isEven(n) {
   return n % 2 == 0;
}

if (isEven(dayOfMonth)) {
    console.log("The day of the month is even.");
}
else {
    console.log("The day of the month is odd.");
}

//switch conditional
let weekday = date.getDay();
switch (weekday) {
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    case 0:
        console.log("Today is Sunday.");
        break;
    default:
        console.log("How did you do this? What day is it?");
}

//arrays of various types
var stringArray = ["Book", "Movie", "Game"];
var numberArray = [9, 8, 7, 7, 6, 5];
var mixedArray = [1, 1, "two", 1, 1, "three", 1, 1, "one", 1, 1, "meef"];

//loop through an array
for (let i = 0; i < mixedArray.length; i++) {
    console.log("Mixed array value "+i+":", mixedArray[i]);
}

//creating and using an object
var game = {
    name: "Dungeons & Dragons",
    edition: "5th Edition",
    fullName: function() {
        return this.name + " " + this.edition;
    }
}

//accessing properties
console.log("The game is", game.name);
console.log("The full name of the game is", game.fullName());
