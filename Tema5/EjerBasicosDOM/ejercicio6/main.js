function invert() {
    const paragraphs = Array.from(document.getElementsByTagName("p"));
    for (let i = paragraphs.length - 1; i >= 0 ; i--) {
        let invertedParagraph = document.createElement('p');
        invertedParagraph.textContent = paragraphs[i].innerText;
        document.getElementById('invertedParagraphs').appendChild(invertedParagraph);
    }
}