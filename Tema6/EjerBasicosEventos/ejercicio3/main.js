var paragraph = document.getElementById('square');

document.addEventListener('mousemove', function(e) {
    let posX = e.clientX;
    let posY = e.clientY;
    let poss = document.getElementById('text');
    poss.textContent = posX + "x" + posY;
    paragraph.style.backgroundColor = 'blue';
});

document.addEventListener('keydown', function(e) {
    let asciiCode = e.keyCode;
    let keyP = e.key;
    let poss = document.getElementById('text');
    poss.textContent = "Tecla presionada: " + keyP + " Codigo ascii: " + asciiCode;
    paragraph.style.backgroundColor = 'red';
});

