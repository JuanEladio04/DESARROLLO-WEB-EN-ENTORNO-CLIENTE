    var tries = 10;

function randomNumberGame(chosenNumber) {

        let randomNum = Math.floor(Math.random() * 100) + 1; 

        if (chosenNumber === randomNum) {
            alert('¡HAS GANADO!');
            return; 
        } else {
            tries--;

            if (chosenNumber > randomNum) {
                alert('El número está por encima de ' + randomNum + '. Te quedan ' + tries + ' intentos.');
            } else {
                alert('El número está por debajo de ' + randomNum + '. Te quedan ' + tries + ' intentos.');
            }
        }

        if (tries === 0) {
            alert('Has perdido');
        }
}
