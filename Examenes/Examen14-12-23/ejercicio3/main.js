var paragraph = document.getElementById('paragraph');
//Boton 1
function ocultarParrafo(){
    event.stopPropagation();
    paragraph.style.display = 'none';
}

document.addEventListener('dblclick', function (e) {
    paragraph.style.display = 'block';
});

//Boton 2
function insertarParrafoAnterior(){
    aParagraph = document.createElement('p');
    aParagraph.textContent = 'Párrafo creado anterior al que había';
    let anterior = document.getElementById('anterior');
    anterior.appendChild(aParagraph);
}

//Boton 3
function invertColors(){
    let bgColor = paragraph.style.backgroundColor;
    let color = paragraph.style.color;

    paragraph.style.backgroundColor = color;
    paragraph.style.color = bgColor;
}

document.addEventListener('keydown', function (event) {
    if (event.shiftKey && event.key === 'F10') {
      paragraph.style.backgroundColor = 'blue';
      paragraph.style.color = 'white';
      paragraph.textContent = 'Vacío';
    }
  });