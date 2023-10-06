var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calculateLetter(dniNumbers){
    let div;
    div = dniNumbers % 23;
    document.write("Tu DNI es: " + dniNumbers + letras[div]);
}

function checkDni(dni) {
    let dniArray = Array.from(dni);
    let sum;
    dniArray.forEach(digit => {
        if ( sum == null){
            sum = digit;
        }
        else{
            sum = sum + digit;
        }
    });

    sum = parseInt(sum) % 23;

    if(dniArray[dniArray.length - 1] == letras[sum]){
        document.write("El DNI " + dni + " es correcto.")
    }
    else{
        document.write("El DNI " + dni + " no es correcto. La letra correcta sería: " + letras[sum])
    }
}