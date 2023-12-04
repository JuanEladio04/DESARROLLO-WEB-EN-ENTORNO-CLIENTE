function validarRadios() {
    var radios = document.getElementsByName('itrGender');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    alert("Por favor, selecciona al menos un sexo.");
    return false;
}

function validarCheckboxes() {
    var checkboxes = document.getElementsByName('itcbModules');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }
    alert("Por favor, selecciona al menos un módulo.");
    return false;
}

