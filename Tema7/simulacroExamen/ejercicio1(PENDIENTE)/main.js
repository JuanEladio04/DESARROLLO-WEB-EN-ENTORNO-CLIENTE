//Apartado A
function repConsoleDisplay() {
    event.preventDefault();
    console.log("Nombre: " + document.getElementById("nombre1").value);
    console.log("Apellidos: " + document.getElementById("apellido1").value);
    console.log("Teléfonos: " + document.getElementById("telefono").value);
    console.log("Nº serie: " + document.getElementById("numserie").value);

    let radioButtons = document.getElementsByName("clasereparacion");
    let selectedValue;
    for(let i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked) {
            selectedValue = radioButtons[i].value;
            break;
        }
    }
    console.log("Tipo de reparación: " + selectedValue);

    console.log("Antigüedad: " + document.getElementById("antiguedad").value);
    console.log("Tipo avería: " + document.getElementById("tipoaveria").value);
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(c => {
        if(c.checked){
            console.log("Sintoma: " + c.value);
        }
    });
    console.log("Observaciones: " + document.getElementById("observaciones1").value);
}

//Apartado B
var textArea = document.getElementById('observaciones1');

textArea.addEventListener('focus', function (e) {
    textArea.style.backgroundColor = "black";
    textArea.style.color = "white";
});

textArea.addEventListener('focusout', function (e) {
    textArea.style = "";
});

//Apartado C

let roundBtn = document.getElementsByName("clasereparacion");
roundBtn.forEach(btn => {
    btn.addEventListener('change', function (e) {
        if(btn.checked && btn.value == 'portatil'){
            document.getElementById('marcaModelo').style.display = "block";
        } else {
            document.getElementById('marcaModelo').style.display = "none";
        }
    });
});
