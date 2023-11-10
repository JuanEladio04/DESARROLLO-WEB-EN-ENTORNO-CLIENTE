function addParagraph() {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = "Párrafo insertado"; 

    let paragraphs = document.getElementById('paragraphs');
    paragraphs.insertBefore(newParagraph, paragraphs.childNodes[2]);
}

function deleteParagraph() {
    let paragraphs = document.getElementById('paragraphs');
    if (paragraphs.childNodes.length > 4) {
        paragraphs.removeChild(paragraphs.childNodes[2]);
    }
}