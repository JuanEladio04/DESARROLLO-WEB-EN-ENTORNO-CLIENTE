function cuentaVocales(pString) {
      let stringArray = pString.split("");
      let cont = 0;
      stringArray.forEach(letter => {
            if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
                  cont++;
            }
      });
      return cont;
}

function cuentaConsonantes(pString, nVocales) {
      let lTotales = pString.length;
      return lTotales - nVocales;
}

function showResults(nVocales, nConsonantes) {
      document.write('La frase tiene ' + nVocales + ' vocales y ' + nConsonantes + ' consonantes.');
}