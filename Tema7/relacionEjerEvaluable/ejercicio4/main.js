function numFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function showResults(num) {
    let textField = document.getElementById("result");
    textField.value = numFactorial(num);
}