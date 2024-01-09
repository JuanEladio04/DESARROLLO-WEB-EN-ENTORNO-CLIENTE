const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let respuesta = await axios.get("http://localhost:5555/empleados"),
            json = await respuesta.data;

        console.log(json);

        json.forEach((el) => {
            $template.querySelector(".puesto").textContent = el.puesto;
            $template.querySelector(".nombre").textContent = el.nombre;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.puesto = el.puesto;
            $template.querySelector(".edit").dataset.nombre = el.nombre;
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
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        puesto: e.target.ittPuesto.value,
                        nombre: e.target.ittNombre.value,
                    })
                };
                let respuesta = await axios("http://localhost:5555/empleados", options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            try {
                let options = {
                    method: "PUT",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        puesto: e.target.ittPuesto.value,
                        nombre: e.target.ittNombre.value,
                    }),
                };
                let respuesta = await axios(`http://localhost:5555/empleados/${e.target.ithId.value}`, options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }
        $form.ittPuesto.value = null;
        $form.ittNombre.value = null;
        $form.ithId.value = null;
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar Santo";
        $form.ittPuesto.value = e.target.dataset.puesto;
        $form.ittNombre.value = e.target.dataset.nombre;
        $form.ithId.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(
            `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
        );

        if (isDelete) {
            //Delete - DELETE
            try {
                let options = {
                    method: "DELETE",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                };
                let respuesta = await axios(`http://localhost:5555/empleados/${e.target.dataset.id}`, options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});