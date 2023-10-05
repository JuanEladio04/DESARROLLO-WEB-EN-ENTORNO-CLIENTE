var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calculateLetter(dniNumbers){
    let div;
    div = dniNumbers % 23;
    document.write("Tu DNI es: " + dniNumbers + letras[div]);
}

function checkDni(dni) {
    let dniArray = Array.from(dni);
    sum = 0;
    dniArray.forEach(digit => {
        if(!isNaN(parseInt(digit))){
            sum = sum + digit;
        }
    });
    alert(sum);
}