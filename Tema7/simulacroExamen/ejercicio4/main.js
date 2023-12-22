function changeBackground() {
    document.body.style.backgroundColor = "red";
}

function setTAVisible() {
    var textArea = document.getElementById("textArea");
    textArea.style.display = "block";
}

function setStyleToTA() {
    textArea.style.backgroundColor = "green";
    textArea.style.color = "white";
    textArea.value = "Estoy dentro del cuadro de texto";
}

function invertValueFromTA() {
    text = textArea.value;
    text = text.split('');
    let reverseText = ''

    for (let i = text.length - 1; i >= 0; i--) {
        reverseText = reverseText + text[i];
    }

    textArea.value = reverseText;
}

function countCharacters() {
    let textLength = textArea.value.split('').length;

    let paragraph = document.createElement("p");
    paragraph.textContent = textLength;
    document.body.appendChild(paragraph);
}
