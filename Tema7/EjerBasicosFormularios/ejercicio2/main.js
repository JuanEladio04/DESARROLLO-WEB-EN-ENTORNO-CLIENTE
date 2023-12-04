var textArea = document.getElementById("textArea");
textArea.addEventListener('keyup', validateTextArea);
textArea.addEventListener('keypress', showCharacters);

function validateTextArea() {
    let text = textArea.value;
    if (text.length > 50 || text.length < 1) {
        document.getElementById("submitButton").disabled = true;
    } else {
        document.getElementById("submitButton").disabled = false;
    }
}

function showCharacters() {
    var cParagraph = document.getElementById("characters");
    cParagraph.textContent = "Caracteres: " + textArea.value.length + "/50";
}
