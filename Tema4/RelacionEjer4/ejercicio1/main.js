function invertText(cadenaTexto) {
    let textArray = cadenaTexto.split("");
    let invertedTextChain = [];

    for (let i = textArray.length - 1; i >= 0; i--) {
        invertedTextChain.push(textArray[i]);   
    }

    return invertedTextChain.toString();
}

