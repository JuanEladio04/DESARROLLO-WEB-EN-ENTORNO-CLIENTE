function returnSmallerAndBigger(pString) {
    let nArray = [];
    nArray.push(calculateBigger(pString));
    nArray.push(calculateSmaller(pString));
    return nArray;
}

function calculateBigger(pString) {
    let numberArray = pString.split(",");
    let bigger = Number(numberArray[0]);
    numberArray.forEach(number => {
        if(Number(number) > bigger){
            bigger = Number(number);
        }
    });
    return bigger;
}

function calculateSmaller(pString) {
    let numberArray = pString.split(",");
    let smaller = Number(numberArray[0]);
    numberArray.forEach(number => {
        if(Number(number) < smaller){
            smaller = Number(number);
        }
    });
    return smaller;
}

function showResults(pString){
    let nArray = returnSmallerAndBigger(pString);
    nArray.forEach(number => {
        document.write(number + " ")
    });
};
