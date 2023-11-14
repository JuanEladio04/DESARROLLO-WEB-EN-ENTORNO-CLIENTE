function muestraOculta(option) {
    let paragraph = document.getElementById('parrafo' + option);
    let link = document.getElementById('enlace' + option);

    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        link.textContent = "Ocultar contenidos párrafo " + option;
    } else {
        paragraph.style.display = 'none';
        link.textContent = "Mostrar contenidos párrafo " + option;
    }
}

function aumentar(option) {
    let paragraph = document.getElementById('parrafo' + option);
    let style = window.getComputedStyle(paragraph, null);
    let size = parseFloat(style.getPropertyValue('font-size'));    
    paragraph.style.fontSize = (size + 1) + 'px';
}

function disminuir(option) {
    let paragraph = document.getElementById('parrafo' + option);
    let style = window.getComputedStyle(paragraph, null);
    let size = parseFloat(style.getPropertyValue('font-size'));    
    paragraph.style.fontSize = (size - 1) + 'px';
}

function defecto(option) {
    let paragraph = document.getElementById('parrafo' + option);
    paragraph.style.fontSize='';
}


