function changeTextContent() {
    var textElement = document.getElementById("text");
    var textOptions = ["This is the text that will be changed.", "I am different text, look at me!"];
    var currentContent = textElement.textContent;

    if (currentContent != textOptions[1]) {
        textElement.textContent = textOptions[1];
    }
    else {
        textElement.textContent = textOptions[0];
    }
}