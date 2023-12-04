function cifradoCesar(texto, desplazamiento) {
    var resultado = '';
    for (var i = 0; i < texto.length; i++) {
        var codigoAscii = texto.charCodeAt(i);
        if (codigoAscii >= 65 && codigoAscii <= 90) {
            resultado += String.fromCharCode((codigoAscii - 65 + desplazamiento) % 26 + 65);
        } else if (codigoAscii >= 97 && codigoAscii <= 122) {
            resultado += String.fromCharCode((codigoAscii - 97 + desplazamiento) % 26 + 97);
        } else {
            resultado += texto.charAt(i);
        }
    }
    return resultado;
}


function showResults(text) {
    let textField = document.getElementById("result");
    textField.textContent = cifradoCesar(text, 1);
}