function generaNumeroAleatorio(min, max){
    let numero;
    numero =  Math.floor(Math.random() * (max - min + 1) + min);
    return numero;
};

function pintaNumeros(){
    let numero;
    for(let i = 0; i < 15; i++){
        numero = generaNumeroAleatorio(1, 15);
        document.write(numero + "<br>");
    }
};



