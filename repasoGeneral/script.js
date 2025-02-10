function agregarTareas() {
    // Seleccionar el elemento con el id "listaTareas"
    let listaTareas = document.getElementById("listaTareas");

    console.log("Elemento listaTareas: ", listaTareas);

    // Declarar una variable llamada "tarea": crear un elemento div
    // Y debe llevar el texto "Nueva tarea"
    let tarea = document.createElement("div");
    //tarea.textContent = "Nueva tarea";

    let elementoMensaje = document.getElementById("mensaje");
    let textoMensaje = document.createElement("p");

    //Pedir al usuario el texto que llevará cada tarea
    let textoTarea = prompt("Añade el texto de la tarea");
    console.log("Valor introducido por el usuario: ", textoTarea);

    if (textoTarea === '' || textoTarea.length === 0) {
        elementoMensaje.style.display = "flex";
        
        let mensaje = "¡El nombre de la tarea no puede estar vacío!";
        textoMensaje.textContent = mensaje;

        // 16.01.2025 1.0
        let hijosMensaje = elementoMensaje.children;

        // console.log("Hijos elementoMensaje: ", elementoMensaje.children);

        //Comprobar que no tengamos un elemento ya con el mismo texto para no crear duplicidades en el recuadro del mensaje
        if (hijosMensaje.length !== 0) {

            for (let index = 0; index < hijosMensaje.length; index++) {
                if (textoMensaje.textContent != hijosMensaje[index].textContent) {
                    elementoMensaje.appendChild(textoMensaje);
                }
            }

        } else {
    
            elementoMensaje.appendChild(textoMensaje);
        }

        // Fin 1.0

        // Si no está vacía, realizar todos los pasos de la función
    } else {

        elementoMensaje.style.display = "none";  // Solamente oculta el mensaje de let mensaje  //16.01.2024 Fin 2.0

        tarea.textContent = textoTarea;

        

        //Añadir una clase llamada "tarea"
        tarea.className = "tarea";
    
        console.log("nuevo elemento div:", tarea);    
     
    
        //Añadir un nuevo elemento button a la variable tarea, antes de añadirla a la lista
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar tarea";
        botonEliminar.className = "eliminar";
    
        console.log("nuevo boton para eliminar tarea: ", botonEliminar);
    
        //Asignar al click del boton eliminar, la función "eliminarTarea"
        botonEliminar.onclick = function () {
            eliminarTarea(this);
        }
    
        // Añadir un nuevo botón que invoque una función que asigne un color de fondo verde a la tarea
        //Añadir un nuevo elemento button a la variable tarea, antes de añadirla a la lista
        let botonCompletar = document.createElement("button");
        botonCompletar.textContent = "Completar tarea";
        botonCompletar.className = "completar";
    
        console.log("nuevo boton para eliminar tarea: ", botonCompletar);
    
        //Asignar al click del boton eliminar, la función "eliminarTarea"
        botonCompletar.onclick = function () {
            completarTarea(this);
        }
    
        // ** Los append child siempre recomendado al final de nuestra función
        tarea.appendChild(botonEliminar);
        tarea.appendChild(botonCompletar);

        // 16.01.2025 3.0
        
        // Comprobar que no tengamos una tarea ya con el mismo texto para no crear duplicidades en la lista de tareas.

        let hijosListaTareas = listaTareas.children;

        // console.log("Hijos hijosListaTareas: ", hijosListaTareas);

        if (hijosListaTareas.length !== 0) {
            // for (let index = 0; index < hijosListaTareas.length; index++) {
                // if (tarea.innerHTML != hijosListaTareas[index]) {
                if (!hijosListaTareas.includes(tarea)) {
                    listaTareas.appendChild(tarea);
                }
            // }

        } else {
            listaTareas.appendChild(tarea);
        }

        // Fin 3.0
    
        //A la variable "listaTareas" añadir como elemento hijo la variable "tarea"
    }
}

// Seleccionar el elemento con id "agregarTarea"
let agregarTarea = document.getElementById("agregarTarea");
console.log("Boton agregar tarea: ", agregarTarea);

// onclick="agregarTarea()" -> Asignarle a la hora de hacer click en el boton la función "agregarTareas"
// ** la hemos cambiado el nombre porque no puede existir una función con el mismo nombre que una variable

agregarTarea.onclick = function () {
    agregarTareas();
}

// Función para borrar la tarea del botón
function eliminarTarea(elementoBoton) {
    let elementoPadre = elementoBoton.parentElement;
    console.log("Elemento padre del boton eliminar: ", elementoPadre);
    elementoPadre.remove();
}

function completarTarea (elementoBoton) {
    let elementoPadre = elementoBoton.parentElement;
    console.log("Elemento padre del boton eliminar: ", elementoPadre);

    //Cambiar el color mediante el atributo "style"
    //elementoPadre.style = "background-color: green;";
    // console.log("class del padre: ",elementoPadre.className);
    // elementoPadre.className = elementoPadre.className + " completada";

    //Añadir la clase con el fondo verde al elemento padre del botón
    elementoPadre.classList.add("completada");
}

function vaciarTexto (elemento) {
    elemento.textContent = "";
}