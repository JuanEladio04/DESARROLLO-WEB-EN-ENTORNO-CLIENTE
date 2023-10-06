function checkPalindromo(palindromo) {
    
    let palindromoArray = convierteEnArray(palindromo);
    comprobador(palindromoArray);
}

function comprobador(palindromoArray) {
    let phrase1 = ""
    for (let i = 0; i < (palindromoArray.length / 2); i++) {
        phrase1 = phrase1 + palindromoArray[i];
    }
    alert(phrase1);

    let phrase2 = ""
    for (let i = (palindromoArray.length - 1); i >= (palindromoArray.length / 2) ; i--) {
        phrase2 = phrase2 + palindromoArray[i];
    }
    alert(phrase2);

    if(phrase1.toLowerCase() == phrase2.toLowerCase()){
        alert('La cadena de texto si es un palíndromo');
    }
    else {
        alert('La cadena de texo no es un palíndromo');
    }
}

function convierteEnArray(palindromo){
    let array = [];
    Array.from(palindromo).forEach(letter => {
        if(letter != " "){
            array.push(letter);
        }
    });
    return array;
}
