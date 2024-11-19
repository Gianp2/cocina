// Diccionario de ingredientes con sus rutas de imagen
const imagenesIngredientes = {
    "harina": "../assets/images/harina.png",
    "huevo": "../assets/images/huevo.png",
    "leche": "../assets/images/leche.png",
    "azúcar": "../assets/images/azucar.png",
    "manteca": "../assets/images/manteca.png",
    "sal": "../assets/images/sal.png",
    // Añade más ingredientes e imágenes según necesites
};

// Función para crear la fila de una receta
function agregarRecetaAlListado(nombre, ingredientes, tiempo) {
    const tbody = document.querySelector(".tbody");
    const tr = document.createElement("tr");

    // Columna para el nombre de la receta
    const tdNombre = document.createElement("td");
    tdNombre.textContent = nombre;
    tr.appendChild(tdNombre);

    // Columna para los ingredientes con imágenes
    const tdIngredientes = document.createElement("td");

    ingredientes.forEach(ingrediente => {
        const divIngrediente = document.createElement("div");
        divIngrediente.classList.add("ingrediente");

        // Crear la imagen del ingrediente si existe en el diccionario
        const img = document.createElement("img");
        img.classList.add("imagen-ingrediente");
        img.alt = ingrediente;
        
        if (imagenesIngredientes[ingrediente.toLowerCase()]) {
            img.src = imagenesIngredientes[ingrediente.toLowerCase()];
        } else {
            img.src = "../assets/images/default.png"; // Imagen por defecto si no se encuentra el ingrediente
        }

        const span = document.createElement("span");
        span.textContent = ingrediente;

        divIngrediente.appendChild(img);
        divIngrediente.appendChild(span);
        tdIngredientes.appendChild(divIngrediente);
    });

    tr.appendChild(tdIngredientes);

    // Columna para el tiempo de preparación
    const tdTiempo = document.createElement("td");
    tdTiempo.textContent = tiempo + " min";
    tr.appendChild(tdTiempo);

    // Botón de eliminar receta
    const tdEliminar = document.createElement("td");
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.onclick = () => eliminarReceta(tr);
    tdEliminar.appendChild(btnEliminar);
    tr.appendChild(tdEliminar);

    tbody.appendChild(tr);
}

// Función para capturar datos del formulario
document.getElementById("formulario").onsubmit = function(event) {
    event.preventDefault();

    const nombreReceta = document.getElementById("nombreReceta").value;
    const tiempoCocina = document.getElementById("tiempoCocina").value;

    const ingredientes = []; // Aquí deberías recoger los ingredientes añadidos en el formulario.
    document.querySelectorAll(".creadorCantidadRecetas input").forEach(input => {
        ingredientes.push(input.value);
    });

    agregarRecetaAlListado(nombreReceta, ingredientes, tiempoCocina);

    // Limpia el formulario después de añadir la receta
    document.getElementById("formulario").reset();
};

// Función para eliminar una receta
function eliminarReceta(row) {
    row.remove();
}
