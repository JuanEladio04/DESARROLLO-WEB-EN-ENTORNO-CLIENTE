function calcularage(fecha) {
    var today = new Date();
    var counter = new Date(fecha);
    var age = today.getFullYear() - counter.getFullYear();
    var m = today.getMonth() - counter.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < counter.getDate())) {
        age--;
    }
    return age;
}