function arrowFunctionWhithIndexOf(textChain, lookingWord) {
    let textArray = textChain.split(" ");
    let index = 0;

    textArray.forEach(word => {
        if (lookingWord == word) {
            index++;
        }
    });

    return index; 
}