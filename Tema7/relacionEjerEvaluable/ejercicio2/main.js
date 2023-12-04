randomColorPageBackground();

let numero = prompt("Por favor, introduce un número");
numero = Number(numero);1

if (!isNaN(numero)) {
  alert("El número introducido es " + numero);
} else {
  alert("No has introducido un número válido");
}



function randomColorPageBackground() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}