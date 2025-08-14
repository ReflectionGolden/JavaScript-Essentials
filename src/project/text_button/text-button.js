function changeTextContent() {
    var textElement = document.getElementById("text");
    var textOptions = ["This is the text that will be changed.", "I am different text, look at me!"];
    var currentContent = textElement.textContent;

    if (currentContent != textOptions[1]) { //if the current text isn't the different text...
        textElement.textContent = textOptions[1]; //change it to the different text.
    }
    else { //otherwise...
        textElement.textContent = textOptions[0]; //change it to the original text
    }
}