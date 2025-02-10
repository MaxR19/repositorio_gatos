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
    let genero = document.getElementById("genero").value; // da un undefined en la vista previa

    console.log("Nombre completo: ", nombreCompleto);
    console.log("Edad: ", edad);
    console.log("Descripcion: ", descripcion);

    // let pattern = new RegExp("[0,9]","g")

    let contenido = document.getElementById("profile_preview");

    let isNanNombre = isNaN(Number(nombreCompleto));

    // let contieneNumero = nombreCompleto.search(pattern);

    for (let index = 0; index < nombreCompleto.length; index++) {
        if (!isNaN(nombreCompleto[index])) alert("Cuidado.")
    }
    
    // Añadir comprobación para informar al usuario que no puede introducir un nombre vacío.

    if (nombreCompleto === "") {
        alert ("El campo nombre no puede estar vacío.");
    }
    
    else if (!(isNanNombre)) { // Si solo se introduce números salta el alert.
        alert ("El campo nombre no puede contener números.");
    }

    /* else if (contieneNumero !== -1) {
        alert ("El campo nombre no puede contener números.");
    } */
    
    else if (edad === "") {
        alert ("El campo edad no puede estar vacío.");
    }

    else if (descripcion === "") {
        alert ("El campo descripción no puede estar vacío.");
    }

    else {    
        contenido.innerHTML = `
        <h3>Nombre: ${nombreCompleto}, ${edad} años</h3>
        <p>Descripcion personal: </p>
        <p>${descripcion}</p>
        <p>${genero}</p>
        `;

        contenido.style.display = "block"; // Al estar activado el display en el css con el valor none es necesario modificarlo en el js.
    }

}

