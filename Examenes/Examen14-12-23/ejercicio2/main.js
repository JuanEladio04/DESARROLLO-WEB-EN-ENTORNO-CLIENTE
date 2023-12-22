function createMatriz(matriz) {
    for (let i = 0; i < 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = generaNumeroAleatorio(30, 90);
        }
    }
}

function invierteDiagonalMatriz(matriz) {
    let mInvertida = matriz;

    for (let i = 0, ii = matriz.length - 1; i < matriz.length; i++, ii--) {
        for (let j = 0, ji = matriz[i].length - 1; j < matriz[i].length; j++, ji--) {
            if(i == j && ii == ji) {
                mInvertida[i][j] = matriz[ii][ji];
            }
        }
    }

    return mInvertida;
}

function muestraMatriz(matriz) {
    document.write('<table border = 1>')
    for (let i = 0; i < matriz.length; i++) {
        document.write('<tr>');
        for (let j = 0; j < matriz[i].length; j++) {
            if(i == j) {
                document.write('<th>'); 
                document.write(matriz[i][j]);
                document.write('</th>');
            }
            else{
                document.write('<td>'); 
                document.write(matriz[i][j]);
                document.write('</td>');
            }
        }
        document.write('</tr>');
    }
    document.write('</table>')
}

function generaNumeroAleatorio(min, max) {
    let numero;
    numero = Math.floor(Math.random() * (max - min + 1) + min);
    return numero;
};