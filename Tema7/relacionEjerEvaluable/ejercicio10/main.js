var counter = 0;

function revealParagraph() {
  let paragraph = document.getElementsByTagName('p')[counter];
  paragraph.style.display = 'block';
  counter++;
}