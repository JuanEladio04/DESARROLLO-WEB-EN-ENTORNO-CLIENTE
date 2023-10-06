function getMinorNumber() {
    let num1 = prompt("Introduce el primer número");
    let num2= prompt("Introduce el segundo número");
    let num3= prompt("Introduce el tercer número");

    let numArray = [num1, num2, num3];
    let minor;
    numArray.forEach(num => {
        if (minor == null){
            minor = num;
        }
        else if(num < minor){
            minor = num;
        }
    });
    document.write('<h4>El número menor es: ' + minor + '</h4>');
}