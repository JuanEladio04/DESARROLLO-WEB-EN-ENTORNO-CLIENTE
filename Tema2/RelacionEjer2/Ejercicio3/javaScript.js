function calculaMultiplos() {
    let multiplos = [];
    let multiplo = 0;
    let i = 0;
    document.write("<p>");
    do {
        multiplo = i * 11;
        document.write(multiplo + ", ");
        multiplos.push(multiplo);
        i++;
    } while (multiplo < 3000)
    document.write("</p>");
    sumaMultiplos(multiplos);
}

function sumaMultiplos(multiplos) {
    let suma = 0;
    for (let i = 0; i < multiplos.length; i++) {
        suma = suma + parseInt(multiplos[i]);
    }
    alert("La suma de todos los multiplos es: " + suma);
}

calculaMultiplos();
