function generateTable(dobles) {
    nDobles = NumberArrayGenetator(dobles);
    dobles--;

    document.write(nDobles);

    document.write("<table border = 1>");
    for (let i = 0; i < 14; i++) {
        document.write("<tr>");
        document.write("<td>Partido " + (i + 1) + "</td>");
        selectNum = Math.floor(Math.random() * 3) + 1; //Seleccionamos el numero actual de la quiniela
        dSelectNum = -1;
        if (i == nDobles[dobles]) { //Comprobamos si el partido es doble
            do {
                dSelectNum = Math.floor(Math.random() * 3) + 1; //Seleccionamos el numero actual de la quiniela en caso de ser doble
            } while (dSelectNum == selectNum);
            dobles--;
        }
        for (let j = 0; j < 3; j++) {
            document.write("<td>");

            drawQuinielaVlue(j, selectNum);
            drawQuinielaVlue(j, dSelectNum);

            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function NumberArrayGenetator(length) {
    let array = new Array();

    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 13) + 0;
    }
    return array;
}

function drawQuinielaVlue(num1, num2) {
    if (num1 == num2 - 1) {
        if (num1 == 1) {
            document.write("X");
        } else if (num1 == 2) {
            document.write(num1);
        }
        else {
            document.write(num1 + 1);
        }
    }
}