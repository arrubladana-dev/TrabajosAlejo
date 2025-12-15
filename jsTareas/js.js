function agregar() {
    const inputTexto = document.getElementById("texto1");
    const selectEstado = document.getElementById("escoger");
    const contenedor = document.getElementById("agreTexto");

    const texto = inputTexto.value;
    const estado = selectEstado.value;

    const tarjeta = document.createElement("div");
    tarjeta.className = "targeta";

    if (estado === "pendiente") {
        tarjeta.classList.add("pendiente");
    } else if (estado === "proceso") {
        tarjeta.classList.add("proceso");
    } else if (estado === "finalizado") {
        tarjeta.classList.add("finalizado");
    }

    tarjeta.textContent = texto;

    contenedor.appendChild(tarjeta);
    inputTexto.value = "";
}
