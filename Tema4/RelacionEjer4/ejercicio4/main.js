function capicuaNumberChecker(num) {
    if (!isNaN(num)) {
        let numberArray = num.split();
        let reverseNum = [];

        for (let i = numberArray.length - 1; i >= 0; i--) {
            reverseNum.push(numberArray[i]);
        }

        if (num == reverseNum.toString()) {
            document.write('<p>El número ' + num + ' es capicúa</p>');
        }
        else{
            document.write('<p>El número ' + num + ' no es capicúa</p>');
        }
    }
    else{
        document.write('<p>Debes escribir un número</p>');
    }
    document.write('<a href="index.html">Volver</a>')
}