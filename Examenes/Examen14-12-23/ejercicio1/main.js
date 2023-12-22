function login(user, password) {
    event.preventDefault();
    let login = document.getElementById('login');
    let incidencias = document.getElementById('incidencias');
    if (user == password) {
        login.style.display = 'none';
        incidencias.style.display = 'block';
    }
    else {
        alert('Usuario y contraseña incorrecto');
        document.getElementById('login').reset();
    }
}

let tDep = document.getElementsByName("tipoDeporte");
tDep.forEach(dep => {
    dep.addEventListener('change', function (e) {
        if (dep.value == 'Fútbol' || dep.value == 'Baloncesto') {
            document.getElementById('futOrBask').style.display = "block";
            document.getElementById('gimn').style.display = "none";
        } else if (dep.value == 'Gimnasia') {

            document.getElementById('futOrBask').style.display = "none";
            document.getElementById('gimn').style.display = "block";

            let checkboxes = document.querySelectorAll("input[type=checkbox]");
            let gUnits = document.getElementsByClassName('unid');

            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].addEventListener("change", function (e) {
                    if (checkboxes[i].checked) {
                        gUnits[i].style.display = "inline";
                    }
                });
            }

        }
    });
});

function showResults() {
    event.preventDefault();

    let dep = document.getElementsByName('tipoDeporte')[0].value;
    console.log(dep);

    if (dep == 'Fútbol' || dep == 'Baloncesto') {
        console.log(document.getElementById('fbSelect').value +
            " Unidades: " + document.getElementById('units').value
        );

    } else if (dep == 'Gimnasia') {
        let cb = document.querySelectorAll("input[type=checkbox]");
        let gUnits = document.getElementsByClassName('unid');

        for (let i = 0; i < cb.length; i++) {
            if (cb[i].checked) {
                console.log(cb[i].value + " Unidades: " +
                    gUnits.getElementsByClassName("gUnid")[0].value
                );
            }
        }
    }
}
