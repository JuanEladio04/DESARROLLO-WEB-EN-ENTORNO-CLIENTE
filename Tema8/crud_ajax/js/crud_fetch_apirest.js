const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();



const getAll = async () => {
    try {
        let respuesta = await fetch("http://localhost:5555/proveedores");
        let json = await respuesta.json();
        console.log(respuesta);
        if (!respuesta.ok) throw {
            status: respuesta.status,
            statusText: respuesta.statusText
        };
        console.log(json);
        json.forEach((el) => {
            $template.querySelector(".nombre").textContent = el.nombre;
            $template.querySelector(".contacto").textContent = el.contacto;

            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.nombre = el.nombre;
            $template.querySelector(".edit").dataset.contacto = el.contacto;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message}</b></p>`
        );
    }
};

d.addEventListener("DOMContentLoaded", getAll);


d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.ithId.value) {
            try {
                let options = {
                        method: "POST",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        body: JSON.stringify({
                            nombre: e.target.ittNombre.value,
                            contacto: e.target.ittContacto.value,
                        }),
                    },
                    respuesta = await fetch("http://localhost:5555/proveedores", options),
                    json = await respuesta.json();
                if (!respuesta.ok) throw {
                    status: respuesta.status,
                    statusText: respuesta.statusText
                };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            //Update - PUT
            try {
                let options = {
                        method: "PUT",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        body: JSON.stringify({
                            nombre: e.target.ittNombre.value,
                            contacto: e.target.ittContacto.value,
                        }),
                    },
                    respuesta = await fetch(
                        `http://localhost:5555/proveedores/${e.target.ithId.value}`,
                        options
                    ),
                    json = await respuesta.json();

                if (!respuesta.ok) throw {
                    status: respuesta.status,
                    statusText: respuesta.statusText
                };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }
        $form.ittNombre.value=null;
        $form.ittContacto.value=null;
        $form.ithId.value=null;
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar Módulo Primero";
        $form.ittNombre.value = e.target.dataset.nombre;
        $form.ittContacto.value = e.target.dataset.contacto;
        $form.ithId.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(
            `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
        );

        if (isDelete) {
            try {
                let options = {
                        method: "DELETE",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        },
                    respuesta = await fetch(`http://localhost:5555/proveedores/${e.target.dataset.id}`,options );
                    json = await respuesta.json();

                if (!respuesta.ok) throw {
                    status: respuesta.status,
                    statusText: respuesta.statusText
                    };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});