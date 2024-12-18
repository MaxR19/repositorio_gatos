let crearPerfil = document.getElementById("create_profile");

/* 
        <input id="nombre" maxlength="50" type="text" placeholder="Introduce tu nombre">
        <input id="edad" type="number" min="5" max="105" step="5">
        <textarea id="descripcion" minlength="15" maxlength="250" placeholder="Comentarios"></textarea> */

crearPerfil.onclick = function () {
    // imprimir por consola los valores de lso 3 primeros inputs
    let nombreCompleto = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let descripcion = document.getElementById("descripcion").value;

    console.log("Nombre completo: ", nombreCompleto);
    console.log("Edad: ", edad);
    console.log("Descripcion: ", descripcion);

    let contenido = document.getElementById("profile_preview");
    
    contenido.innerHTML = `
        <h3>Nombre: ${nombreCompleto}, ${edad} años</h3>
        <p>Descripcion personal: </p>
        <p>${descripcion}</p>
    `;

    contenido.style.display = "block";
}
