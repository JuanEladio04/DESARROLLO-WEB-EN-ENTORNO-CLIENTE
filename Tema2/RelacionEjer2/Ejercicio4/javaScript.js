var array = [6, "pepe", 2, "juan"];

function basicOperations() {
    let suma;
    let resta;
    let multiplicacion;
    let division;
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            if(suma == null){
                suma = array[i];
                resta = array[i];
                multiplicacion = array[i];  
                division = array[i];
            }
            else {
                suma  = suma + array[i];
                division  = division / array[i];
                resta  = resta - array[i];
                multiplicacion  = multiplicacion * array[i];
            }
        }
    }
    document.write("<p>Resultado de la suma: " + suma + "</p>");
    document.write("<p>Resultado de la resta: " + resta + "</p>");
    document.write("<p>Resultado de la multiplicación: " + multiplicacion + "</p>");
    document.write("<p>Resultado de la división: " + division + "</p>");
}

function checkStrings() {
    let mayor = 'ª';
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            if(array[i].length > mayor.length){
                mayor = array[i];
            }
        }
    }
    document.write("<p>La palabra mas larga es: " +  mayor + "</p>");
}