function realiceFunction(){
    let numGroup = [];
    for (let i = 0; i < 10; i++) {
        let num = prompt("Introduce un número:");
        numGroup.push(num);
        
    }
    showNumbers(numGroup);
    sumNumbers(numGroup);
}

function showNumbers(numberGroup){
    numberGroup.forEach(number => {
        alert(number);
    });
}

function sumNumbers(numberGroup){
    let sum = 0;
    for (let i = 0; i < numberGroup.length; i++) {
        sum = sum + parseInt(numberGroup[i]);
    }
    document.write("<p>La suma de los súmeros es: " + sum + "</p>");
}