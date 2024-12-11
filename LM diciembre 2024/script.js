function agregarTareas () {
    // Seleccionar el elemento con el id "listaTareas"
    let listaTareas = document.getElementById("listaTareas");
    // let listaTareasSinFuncion = document."listaTareas";

    //document.listaTareas también funciona
    console.log("Elemento listaTareas: ", listaTareas);

    // Declarar una variable llamada "tarea": crear un elemento div
    // Y debe llevar el texto "Nueva tarea"
    let tarea = document.createElement("div");
    console.log ("NuevaTarea: ", tarea);
    
    //Para asignar texto al contenido de un div
    // tarea.textContent = "Nueva tarea"; Antes

    // Pedir al usuario el texto que llevará cada tarea
    let textoTarea = prompt("Añade el texto de la tarea");
    console.log("Valor introducido por el usuario: ", textoTarea);
    tarea.textContent = textoTarea;
    
    // Añadir una clase llamada tarea"
    tarea.className = "tarea";

    console.log ("NuevaTarea: ", tarea);
    
    // Cada tarea va a tener dos botones
    
    // Añadir un nuevo elemento button a la variable tarea, antes de añadirla a la lista
    let botonColor = document.createElement("button");
    botonColor.textContent = "Cambiar de color la tarea finalizada";
    botonColor.className = "cambiarColor";

    console.log ("Nuevo botón 2: ", botonColor);
    
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar tarea";
    botonEliminar.className = "eliminar";
    
    console.log ("Nuevo botón: ", botonEliminar);

    // Asignar al click del boton eliminar, la función "eliminarTarea"
    botonColor.onclick = function () {
        console.log("¡¡COMPLETADA!!");
        cambiarColorTarea(this);
    }

    // Asignar al click del boton eliminar, la función "eliminarTarea"
    botonEliminar.onclick = function () {
        eliminarTarea(this);
    }

    tarea.appendChild(botonColor);
    tarea.appendChild(botonEliminar);
    
    // A la variable listaTareas añadir como elemento hijo la variable "tarea"
    listaTareas.appendChild(tarea);
}

    

// Para habilitar el click del botón fuera del html
// Crear variable para seleccionar el elemento con id "agregarTarea" 
let agregarTarea = document.getElementById("agregarTarea");
console.log ("Botón agregar tarea: ", agregarTarea);

//Agregar la función a la variable creada
agregarTarea.onclick = function () {
    agregarTareas();
}

function eliminarTarea(botonEliminar) {
    let elementoPadre = botonEliminar.parentNode;
    console.log("Elemento padre del botón eliminar: ", elementoPadre);
    elementoPadre.remove();
}

function cambiarColorTarea(botonColor) {
    let elementoPadre = botonColor.parentNode;
    console.log("Elemento padre del botón eliminar: ", elementoPadre);

    //Cambair el color mediante el atributo "style"
    elementoPadre.style = "background-color: green;";

    // Añadir la clase con el fondo verde al elemento padr edle botón
    elementoPadre.classList.add("completada");
}