function showResults() {
    let textField = document.getElementById("result");
    textField.value = getResults();
}

function getResults() {
    let name = document.getElementsByName("ittName")[0].value;
    let age = Number(document.getElementsByName("itnAge")[0].value);
    let sal = Number(document.getElementsByName("itnSal")[0].value);

    let result = sal;

    if (sal > 1000 && sal < 2000) {
        if (age >= 50) {
            result = sal + (sal * 0.10);
        }
        else {
            result = sal + (sal * 0.05);
        }
    }
    else if (sal < 1000) {
        if (age >= 60) {
            result = sal + (sal * 0.20);
        }
        else if (age >= 50 && age <= 60) {
            result = sal + (sal * 0.15);
        }
        else {
            result = sal + (sal * 0.075);
        }
    }

    return result;
}
