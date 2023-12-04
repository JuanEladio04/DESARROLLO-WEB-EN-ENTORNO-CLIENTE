function crearTablero() {
    let tablero = new Array(10);
    for (let i = 0; i < 10; i++) {
        tablero[i] = new Array(10).fill(0);
    }
    return tablero;
}

function colocarBarco(tablero, tamano) {
    let direccion = Math.random() < 0.5 ? "horizontal" : "vertical";
    let fila, columna;

    if (direccion === "horizontal") {
        fila = Math.floor(Math.random() * 10);
        columna = Math.floor(Math.random() * (10 - tamano));
    } else {
        fila = Math.floor(Math.random() * (10 - tamano));
        columna = Math.floor(Math.random() * 10);
    }

    for (let i = 0; i < tamano; i++) {
        if (direccion === "horizontal") {
            if (tablero[fila][columna + i] !== 0) {
                return colocarBarco(tablero, tamano);
            }
        } else {
            if (tablero[fila + i][columna] !== 0) {
                return colocarBarco(tablero, tamano);
            }
        }
    }

    for (let i = 0; i < tamano; i++) {
        if (direccion === "horizontal") {
            tablero[fila][columna + i] = 1;
        } else {
            tablero[fila + i][columna] = 1;
        }
    }
}

function iniciarJuego() {
    let tablero = crearTablero();
    colocarBarco(tablero, 4); // portaviones
    for (let i = 0; i < 2; i++) {
        colocarBarco(tablero, 3); // acorazados
    }
    for (let i = 0; i < 3; i++) {
        colocarBarco(tablero, 2); // destructores
    }
    for (let i = 0; i < 2; i++) {
        colocarBarco(tablero, 1); // fragatas
    }
    return tablero;
}

function dibujarTablero(tablero) {
    let tabla = document.getElementById('tablero');
    tabla.innerHTML = '';
    for (let i = 0; i < tablero.length; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < tablero[i].length; j++) {
            let celda = document.createElement('td');
            celda.className = tablero[i][j] === 1 ? 'barco' : 'agua';
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
}
