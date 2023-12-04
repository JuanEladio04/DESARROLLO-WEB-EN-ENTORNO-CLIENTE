function cleanInputs() {
    let inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].type == "text" || inputs[i].type == "password"){
            inputs[i].value = "";
        }
    }
}

function checkCredentials(user, pass) {
    let username = "admin";
    let password = "1234";

    if(user == username && pass == password) {
        document.write("Bienvenidos al sistema")
    }
    else{
        document.write("Usuario y/o contraseña incorrectos")
    }
}
