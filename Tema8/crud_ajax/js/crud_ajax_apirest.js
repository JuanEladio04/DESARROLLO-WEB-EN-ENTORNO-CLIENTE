const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
        } else { 
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
}

const getAll = () => {
    ajax({
        url: "http://localhost:5555/productos",
        success: (respuesta) => {
            respuesta.forEach(el => {
                let $clone = d.importNode($template, true);
                $clone.querySelector(".nombre").textContent = el.nombre;
                $clone.querySelector(".precio").textContent = el.precio;
                $clone.querySelector(".stock").textContent = el.stock;

                $clone.querySelector(".edit").dataset.id = el.id;
                $clone.querySelector(".edit").dataset.nombre = el.nombre;
                $clone.querySelector(".edit").dataset.precio = el.precio;
                $clone.querySelector(".edit").dataset.stock = el.stock;

                $clone.querySelector(".delete").dataset.id = el.id;

                $fragment.appendChild($clone);
            });
            $table.querySelector("tbody").appendChild($fragment);
        },
        error: (err) => {
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
        }
    });
}

d.addEventListener("DOMContentLoaded", getAll);
d.addEventListener("submit", e => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.ithId.value) {
            ajax({
                url: "http://localhost:5555/productos",
                method: "POST",
                success: (respuesta) => location.reload(),
                error: (err) => {
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)
                },
                data: {
                    nombre: e.target.ittProd.value,
                    precio: e.target.ittPrecio.value,
                    stock: e.target.ittStock.value
                }
            });
        } else {
            ajax({
                url: `http://localhost:5555/productos/${e.target.ithId.value}`,
                method: "PUT",
                success: (respuesta) => { location.reload() },
                error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                data: {
                    nombre: e.target.ittProd.value,
                    precio: e.target.ittPrecio.value,
                    stock: e.target.ittStock.value
                }
            });
        }

        $form.ittProd.value = null;
        $form.ittPrecio.value = null;
        $form.ittStock.value = null;
        $form.ithId.value = null;
    }
});

d.addEventListener("click", e => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar los productos";
        $form.ittProd.value = e.target.dataset.nombre;
        $form.ittPrecio.value = e.target.dataset.precio;
        $form.ittStock.value = e.target.dataset.stock;
        $form.ithId.value = e.target.dataset.id;
    }
    if (e.target.matches(".delete")) {
        let isDelete = confirm(`¿Estás seguro de eliminar el ${e.target.dataset.id}?`);
        if (isDelete) {
            ajax({
                url: `http://localhost:5555/productos/${e.target.dataset.id}`,
                method: "DELETE",
                success: (respuesta) => location.reload(),
                error: (err) => alert(err)
            });
        }
    }
});
